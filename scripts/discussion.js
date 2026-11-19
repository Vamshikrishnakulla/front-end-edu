const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw1QpAXeSxUkRGVbRfwIi2LRMk2ZdACr7yyRN7F5Z4pilo9mEhOWRYB20Ba5Ley9Nf7zQ/exec';

let state = {
    threads: [],
    page: 1,
    limit: 5,
    hasMore: false,
    subjectcode: null,
    subject: null,
    userEmail: null,
    userName: null
};

// ==========================================
// Initialization & Authentication
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // 1. Check Authentication
    if (localStorage.getItem("isLoggedIn") !== "true") {
        alert("Please login to access the discussion forum.");
        window.location.href = "login.html";
        return;
    }

    // 2. Check Subject Scoping
    const subjectcode = localStorage.getItem("subjectcode");
    const subject = localStorage.getItem("subject");

    if (!subjectcode || subjectcode === "null" || subjectcode === "undefined") {
        alert("No subject selected. Redirecting to categories.");
        window.location.href = "category.html";
        return;
    }

    state.subjectcode = subjectcode;
    state.subject = subject;
    state.userEmail = localStorage.getItem("email");
    state.userName = localStorage.getItem("name") || "Student";

    // 3. Update Header
    const titleEl = document.getElementById('discussion-title');
    if (titleEl) {
        titleEl.textContent = `Discussion Forum - ${subject}`;
    }

    // 4. Attach Event Listeners
    document.getElementById('post-question-form').addEventListener('submit', handlePostQuestion);
    document.getElementById('load-more-btn').addEventListener('click', () => loadThreads(state.page + 1));

    // Use event delegation for dynamic content
    document.getElementById('questions-container').addEventListener('click', handleContainerClicks);
    document.getElementById('questions-container').addEventListener('submit', handleContainerSubmits);

    // 5. Initial Load
    loadThreads(1);
});


// ==========================================
// Error Handling
// ==========================================
function showErrorBanner(message) {
    const container = document.getElementById('error-banner-container');
    if (!container) return;

    const errorDiv = document.createElement('div');
    errorDiv.className = 'api-error-banner';
    errorDiv.innerHTML = `
        <span>${escapeHTML(message)}</span>
        <button class="close-error-btn" aria-label="Close error" onclick="this.parentElement.remove();">&times;</button>
    `;
    container.appendChild(errorDiv);
}

// ==========================================
// API Interaction & Mock Interceptor
// ==========================================
async function apiCall(action, payload = {}) {
    const isOfflineTest = localStorage.getItem("isOfflineTest") === "true";
    const useMock = APPS_SCRIPT_URL.includes('YOUR_GOOGLE_APPS_SCRIPT_URL_HERE') || isOfflineTest;

    if (useMock) {
        return handleMockApi(action, payload);
    }

    // Real API Call
    try {
        let url = APPS_SCRIPT_URL;
        let options = {
            redirect: "follow"
        };

        if (action === 'GET_THREADS') {
            url += `?action=GET_THREADS&subjectcode=${encodeURIComponent(payload.subjectcode)}&page=${payload.page}&limit=${payload.limit}`;
            options.method = "GET";
        } else {
            options.method = "POST";
            options.body = JSON.stringify({ action: action, data: payload });
            options.headers = { "Content-Type": "text/plain;charset=utf-8" }; // Avoid CORS preflight in GAS
        }

        const response = await fetch(url, options);
        if (!response.ok) {
             throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("API Error:", error);
        showErrorBanner(`Connection Error: ${error.message}. Please try again.`);
        return { success: false, error: error.message };
    }
}


// ==========================================
// Mock Backend Implementation (Seeded Data)
// ==========================================
let mockDatabase = null;
function getMockDatabase() {
    if (mockDatabase) return mockDatabase;

    const stored = localStorage.getItem('mockDiscussionDB');
    if (stored) {
        mockDatabase = JSON.parse(stored);
        return mockDatabase;
    }

    const now = Date.now();
    mockDatabase = {
        questions: [
            { question_id: 'q_bee_1', subjectcode: '0', author_name: 'Alice Student', author_email: 'alice@test.com', title: 'Help with Nodal Analysis', body: 'Can someone explain how to set up the matrix for a 3-node circuit?', timestamp: now - 100000000, votes: 2, is_deleted: false },
            { question_id: 'q_bee_2', subjectcode: '0', author_name: 'Bob Learner', author_email: 'bob@test.com', title: 'Difference between AC and DC', body: 'What are the main practical differences?', timestamp: now - 50000000, votes: 0, is_deleted: false },
            { question_id: 'q_m1_1', subjectcode: '1', author_name: 'Charlie Math', author_email: 'charlie@test.com', title: 'Taylor Series expansion', body: 'I keep getting stuck on the remainder term.', timestamp: now - 80000000, votes: 0, is_deleted: false }
        ],
        answers: [
            { answer_id: 'a_bee_1_1', question_id: 'q_bee_1', author_name: 'Dr. Smith', author_email: 'smith@prof.com', body: 'First, identify your reference node (ground). Then apply KCL at the other two nodes.', timestamp: now - 90000000, votes: 5, is_deleted: false },
            { answer_id: 'a_bee_1_2', question_id: 'q_bee_1', author_name: 'Senior Student', author_email: 'senior@test.com', body: 'Check out the textbook chapter 4, it has a great step-by-step guide on creating the conductance matrix.', timestamp: now - 80000000, votes: 1, is_deleted: false },
            { answer_id: 'a_bee_1_3', question_id: 'q_bee_1', author_name: 'Peer Buddy', author_email: 'buddy@test.com', body: 'I always start by drawing the currents leaving the node.', timestamp: now - 70000000, votes: 5, is_deleted: false }
        ],
        votes: [
            { vote_id: 'q_bee_1_user1@test.com' },
            { vote_id: 'q_bee_1_user2@test.com' },
            { vote_id: 'a_bee_1_1_u1@t.com' },
            { vote_id: 'a_bee_1_1_u2@t.com' },
            { vote_id: 'a_bee_1_1_u3@t.com' },
            { vote_id: 'a_bee_1_1_u4@t.com' },
            { vote_id: 'a_bee_1_1_u5@t.com' },
            { vote_id: 'a_bee_1_2_u1@t.com' },
            { vote_id: 'a_bee_1_3_u1@t.com' },
            { vote_id: 'a_bee_1_3_u2@t.com' },
            { vote_id: 'a_bee_1_3_u3@t.com' },
            { vote_id: 'a_bee_1_3_u4@t.com' },
            { vote_id: 'a_bee_1_3_u5@t.com' }
        ]
    };
    saveMockDatabase();
    return mockDatabase;
}

function saveMockDatabase() {
    localStorage.setItem('mockDiscussionDB', JSON.stringify(mockDatabase));
}

async function handleMockApi(action, payload) {
    // Simulate network delay
    await new Promise(res => setTimeout(res, 400));
    const db = getMockDatabase();

    if (action === 'GET_THREADS') {
        const { subjectcode, page, limit } = payload;
        const validQs = db.questions.filter(q => String(q.subjectcode) === String(subjectcode) && !q.is_deleted);
        validQs.sort((a, b) => b.timestamp - a.timestamp);

        const startIndex = (page - 1) * limit;
        const paginated = validQs.slice(startIndex, startIndex + limit);

        paginated.forEach(q => {
            const qAnswers = db.answers.filter(a => a.question_id === q.question_id && !a.is_deleted);
            qAnswers.sort((a, b) => {
                if (b.votes === a.votes) return a.timestamp - b.timestamp;
                return b.votes - a.votes;
            });
            q.answers = qAnswers;
        });

        return { success: true, data: JSON.parse(JSON.stringify(paginated)), hasMore: (startIndex + limit) < validQs.length };
    }

    if (action === 'ADD_QUESTION') {
        db.questions.push({ ...payload, votes: 0, is_deleted: false });
        saveMockDatabase();
        return { success: true };
    }

    if (action === 'ADD_ANSWER') {
        db.answers.push({ ...payload, votes: 0, is_deleted: false });
        saveMockDatabase();
        return { success: true };
    }

    if (action === 'UPVOTE') {
        const vote_id = `${payload.target_id}_${payload.user_email}`;
        if (db.votes.find(v => v.vote_id === vote_id)) {
            return { success: false, error: "Already upvoted" };
        }
        db.votes.push({ vote_id });

        let target = db.questions.find(q => q.question_id === payload.target_id);
        if (!target) target = db.answers.find(a => a.answer_id === payload.target_id);
        if (target) target.votes += 1;
        saveMockDatabase();
        return { success: true };
    }

    if (action === 'EDIT_POST') {
        let target = db.questions.find(q => q.question_id === payload.target_id && q.author_email === payload.author_email);
        if (!target) target = db.answers.find(a => a.answer_id === payload.target_id && a.author_email === payload.author_email);
        if (target) {
            target.body = payload.new_body;
            saveMockDatabase();
            return { success: true };
        }
        return { success: false, error: "Unauthorized or not found" };
    }

    if (action === 'DELETE_POST') {
        let target = db.questions.find(q => q.question_id === payload.target_id && q.author_email === payload.author_email);
        if (!target) target = db.answers.find(a => a.answer_id === payload.target_id && a.author_email === payload.author_email);
        if (target) {
            target.is_deleted = true;
            saveMockDatabase();
            return { success: true };
        }
        return { success: false, error: "Unauthorized or not found" };
    }

    return { success: false, error: "Unknown action" };
}


// ==========================================
// Controller Logic
// ==========================================

async function loadThreads(pageToLoad) {
    const container = document.getElementById('questions-container');
    const loadMoreBtn = document.getElementById('load-more-btn');

    if (pageToLoad === 1) {
        container.innerHTML = '<div class="loading-state">Loading discussions...</div>';
    }

    loadMoreBtn.disabled = true;
    loadMoreBtn.textContent = 'Loading...';

    const response = await apiCall('GET_THREADS', {
        subjectcode: state.subjectcode,
        page: pageToLoad,
        limit: state.limit
    });

    if (response.success) {
        if (pageToLoad === 1) {
            state.threads = response.data;
            container.innerHTML = '';
        } else {
            state.threads = [...state.threads, ...response.data];
        }

        state.page = pageToLoad;
        state.hasMore = response.hasMore;

        if (state.threads.length === 0) {
            container.innerHTML = '<div class="loading-state">No questions yet. Be the first to ask!</div>';
        } else {
            if (pageToLoad === 1) {
                renderAllThreads();
            } else {
                // Just append the new ones
                const fragment = document.createDocumentFragment();
                response.data.forEach(thread => {
                    const temp = document.createElement('div');
                    temp.innerHTML = createThreadHTML(thread);
                    fragment.appendChild(temp.firstElementChild);
                });
                container.appendChild(fragment);
            }
        }

        if (state.hasMore) {
            loadMoreBtn.style.display = 'block';
            loadMoreBtn.disabled = false;
            loadMoreBtn.textContent = 'Load More Questions';
        } else {
            loadMoreBtn.style.display = 'none';
        }
    } else {
        container.innerHTML = `<div class="error-msg">Failed to load discussions: ${response.error || 'Unknown error'}</div>`;
        loadMoreBtn.style.display = 'none';
    }
}

async function handlePostQuestion(e) {
    e.preventDefault();
    const titleEl = document.getElementById('question-title');
    const bodyEl = document.getElementById('question-body');
    const submitBtn = document.getElementById('submit-question-btn');

    const title = titleEl.value.trim();
    const body = bodyEl.value.trim();
    if (!title || !body) return;

    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting...';

    const newQuestion = {
        question_id: 'q_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
        subjectcode: state.subjectcode,
        author_name: state.userName,
        author_email: state.userEmail,
        title: title,
        body: body,
        timestamp: Date.now()
    };

    const res = await apiCall('ADD_QUESTION', newQuestion);

    if (res.success) {
        titleEl.value = '';
        bodyEl.value = '';
        // Optimistically reload page 1
        loadThreads(1);
    } else {
        showErrorBanner("Error posting question: " + (res.error || "Unknown"));
    }

    submitBtn.disabled = false;
    submitBtn.textContent = 'Submit Question';
}

function handleContainerClicks(e) {
    const target = e.target;

    // Upvote
    if (target.closest('.vote-btn')) {
        const btn = target.closest('.vote-btn');
        const id = btn.dataset.id;
        handleUpvote(id, btn);
    }

    // Delete
    if (target.matches('.delete-post-btn')) {
        const id = target.dataset.id;
        handleDelete(id);
    }

    // Edit (Show prompt for simplicity, though inline edit is better UI, prompt meets constraints compactly)
    if (target.matches('.edit-post-btn')) {
        const id = target.dataset.id;
        const currentBody = target.dataset.body;
        handleEdit(id, currentBody);
    }
}

function handleContainerSubmits(e) {
    if (e.target.matches('.reply-form')) {
        e.preventDefault();
        const form = e.target;
        const qId = form.dataset.questionId;
        const textarea = form.querySelector('textarea');
        const btn = form.querySelector('button');
        const body = textarea.value.trim();

        if (!body) return;

        submitAnswer(qId, body, textarea, btn);
    }
}

async function submitAnswer(questionId, body, textarea, btn) {
    btn.disabled = true;
    btn.textContent = 'Submitting...';

    const newAnswer = {
        answer_id: 'a_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
        question_id: questionId,
        author_name: state.userName,
        author_email: state.userEmail,
        body: body,
        timestamp: Date.now()
    };

    const res = await apiCall('ADD_ANSWER', newAnswer);
    if (res.success) {
        textarea.value = '';
        // Optimistically reload page 1 to see the answer
        loadThreads(1);
    } else {
        showErrorBanner("Error posting answer.");
        btn.disabled = false;
        btn.textContent = 'Submit Answer';
    }
}

async function handleUpvote(targetId, btnEl) {
    btnEl.disabled = true; // Prevent double click

    const res = await apiCall('UPVOTE', {
        target_id: targetId,
        user_email: state.userEmail,
        timestamp: Date.now()
    });

    if (res.success) {
        // Optimistically update the UI
        const countSpan = btnEl.parentElement.querySelector('.vote-count');
        if (countSpan) {
            countSpan.textContent = parseInt(countSpan.textContent) + 1;
        }
        btnEl.style.color = '#11999e';
    } else {
        showErrorBanner(res.error || "Could not upvote.");
        btnEl.disabled = false;
    }
}

async function handleDelete(targetId) {
    if (!confirm("Are you sure you want to delete this post?")) return;

    const res = await apiCall('DELETE_POST', {
        target_id: targetId,
        author_email: state.userEmail
    });

    if (res.success) {
        loadThreads(1); // Reload to reflect deletion
    } else {
        showErrorBanner("Error deleting post: " + (res.error || "Unauthorized"));
    }
}

async function handleEdit(targetId, currentBody) {
    const newBody = prompt("Edit your post:", currentBody);
    if (newBody === null || newBody.trim() === "" || newBody === currentBody) return;

    const res = await apiCall('EDIT_POST', {
        target_id: targetId,
        author_email: state.userEmail,
        new_body: newBody.trim()
    });

    if (res.success) {
        loadThreads(1); // Reload to reflect changes
    } else {
        showErrorBanner("Error editing post: " + (res.error || "Unauthorized"));
    }
}


// ==========================================
// View / Render Logic
// ==========================================
function renderAllThreads() {
    const container = document.getElementById('questions-container');
    container.innerHTML = state.threads.map(t => createThreadHTML(t)).join('');
}

function createThreadHTML(thread) {
    const isOwner = thread.author_email === state.userEmail;

    // Sort answers to find accepted solution
    // (Already sorted by backend/mock: oldest top votes first)
    const answers = thread.answers || [];
    let acceptedAnswerId = null;
    if (answers.length > 0 && answers[0].votes > 0) {
        acceptedAnswerId = answers[0].answer_id;
    }

    return `
        <article class="question-card" id="${thread.question_id}">
            <div class="question-header">
                <div class="vote-section">
                    <button class="vote-btn" data-id="${thread.question_id}" aria-label="Upvote question">▲</button>
                    <span class="vote-count">${thread.votes || 0}</span>
                </div>
                <div class="question-content">
                    <h3>${escapeHTML(thread.title)}</h3>
                    <div class="question-meta">
                        Asked by |<strong>${escapeHTML(thread.author_name)}</strong> &bull; ${formatDate(thread.timestamp)}
                    </div>
                    <div class="question-body">${escapeHTML(thread.body).replace(/\n/g, '<br>')}</div>

                    <div class="post-actions">
                        ${isOwner ? `
                            <button class="action-btn edit-post-btn" data-id="${thread.question_id}" data-body="${escapeHTML(thread.body)}">Edit</button>
                            <button class="action-btn delete-post-btn" data-id="${thread.question_id}">Delete</button>
                        ` : ''}
                    </div>
                </div>
            </div>

            <div class="answers-section">
                <h4>Answers (${answers.length})</h4>
                <div id="answers-list-${thread.question_id}">
                    ${answers.map(a => createAnswerHTML(a, a.answer_id === acceptedAnswerId)).join('')}
                </div>

                <form class="reply-form" data-question-id="${thread.question_id}">
                    <textarea placeholder="Write your answer here..." required aria-label="Answer Body"></textarea>
                    <button type="submit" class="btn">Submit Answer</button>
                </form>
            </div>
        </article>
    `;
}

function createAnswerHTML(answer, isAccepted) {
    const isOwner = answer.author_email === state.userEmail;
    return `
        <div class="answer-card" id="${answer.answer_id}">
            <div class="vote-section">
                <button class="vote-btn" data-id="${answer.answer_id}" aria-label="Upvote answer">▲</button>
                <span class="vote-count">${answer.votes || 0}</span>
            </div>
            <div class="answer-content">
                ${isAccepted ? `<div class="accepted-badge">★ Accepted Solution</div>` : ''}
                <div class="question-meta">
                    <strong>${escapeHTML(answer.author_name)}</strong> &bull; ${formatDate(answer.timestamp)}
                </div>
                <div class="answer-body">${escapeHTML(answer.body).replace(/\n/g, '<br>')}</div>
                <div class="post-actions">
                    ${isOwner ? `
                        <button class="action-btn edit-post-btn" data-id="${answer.answer_id}" data-body="${escapeHTML(answer.body)}">Edit</button>
                        <button class="action-btn delete-post-btn" data-id="${answer.answer_id}">Delete</button>
                    ` : ''}
                </div>
            </div>
        </div>
    `;
}


// ==========================================
// Utilities
// ==========================================
function escapeHTML(str) {
    return str.replace(/[&<>'"]/g,
        tag => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        }[tag] || tag)
    );
}

function formatDate(timestamp) {
    const now = Date.now();
    const diffInSeconds = Math.floor((now - timestamp) / 1000);

    if (diffInSeconds < 60) return "Just now";

    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`;

    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;

    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;

    // Fallback to absolute date
    const date = new Date(timestamp);
    return date.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
}
