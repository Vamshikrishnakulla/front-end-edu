// @ts-check

const AUTH_APPS_SCRIPT_URL = 'YOUR_AUTH_APPS_SCRIPT_URL_HERE';

/**
 * Validates whether mandatory user profile keys exist in localStorage.
 * @returns {boolean} True if user profile is complete, otherwise false.
 */
function isProfileComplete() {
    const requiredKeys = ['name', 'email'];
    return isAuthenticated() && requiredKeys.every(key => {
        const value = localStorage.getItem(key);
        return value !== null && value.trim() !== '';
    });
}

/**
 * Checks if the user is currently logged in.
 * @returns {boolean} True if logged in, false otherwise.
 */
function isAuthenticated() {
    return localStorage.getItem("isLoggedIn") === "true";
}

/**
 * Checks storage to see if user is authenticated before allowing access to discussions.
 * @returns {void}
 */
function checkStorageForPlaylist() {
    if (isAuthenticated()) {
        window.location.assign("discussion.html");
    } else {
        alert('Please login to access the discussion room.');
        window.location.assign("login.html");
    }
}

// ==========================================
// Mock Auth Database (Offline/Testing)
// ==========================================
let mockAuthDatabase = null;
function getMockAuthDatabase() {
    if (mockAuthDatabase) return mockAuthDatabase;

    const stored = localStorage.getItem('mockAuthDB');
    if (stored) {
        mockAuthDatabase = JSON.parse(stored);
        return mockAuthDatabase;
    }

    // Seed initial test account with auto-incremented ID format
    mockAuthDatabase = [
        {
            user_id: 1,
            email: 'alice@test.com',
            key: 'pass123',
            name: 'Alice Student',
            addno: '1234567890',
            college: 'Test College',
            university: 'Test University',
            branch: 'CSE',
            created_at: new Date().toISOString()
        }
    ];
    saveMockAuthDatabase();
    return mockAuthDatabase;
}

function saveMockAuthDatabase() {
    localStorage.setItem('mockAuthDB', JSON.stringify(mockAuthDatabase));
}

// ==========================================
// API Interaction
// ==========================================
async function apiAuthCall(action, payload = {}) {
    const isOfflineTest = localStorage.getItem("isOfflineTest") === "true";
    const useMock = AUTH_APPS_SCRIPT_URL.includes('YOUR_AUTH_APPS_SCRIPT_URL_HERE') || isOfflineTest;

    if (useMock) {
        return handleMockAuthApi(action, payload);
    }

    // Real API Call
    try {
        let options = {
            method: "POST",
            body: JSON.stringify({ action: action, data: payload }),
            headers: { "Content-Type": "text/plain;charset=utf-8" },
            redirect: "follow"
        };

        const response = await fetch(AUTH_APPS_SCRIPT_URL, options);
        if (!response.ok) {
             throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Auth API Error:", error);
        return { success: false, error: "Connection error. Please try again." };
    }
}

async function handleMockAuthApi(action, payload) {
    // Simulate network delay
    await new Promise(res => setTimeout(res, 400));
    const db = getMockAuthDatabase();

    if (action === 'SIGNUP') {
        const email = String(payload.email || "").trim().toLowerCase();

        // Check if email exists
        const exists = db.find(user => String(user.email).trim().toLowerCase() === email);
        if (exists) {
            return { success: false, error: "Email already registered. Please login." };
        }

        const maxId = db.length > 0 ? Math.max(...db.map(u => u.user_id)) : 0;

        const newUser = {
            user_id: maxId + 1,
            email: email,
            key: String(payload.key || "").trim(),
            name: String(payload.name || "").trim(),
            addno: String(payload.addno || "").trim(),
            college: String(payload.college || "").trim(),
            university: String(payload.university || "").trim(),
            branch: String(payload.branch || "").trim().toUpperCase(),
            created_at: new Date().toISOString()
        };
        db.push(newUser);
        saveMockAuthDatabase();
        return { success: true, message: "Registered successfully! Please login now." };
    }

    if (action === 'LOGIN') {
        const email = String(payload.email || "").trim().toLowerCase();
        const key = String(payload.key || "").trim();

        const user = db.find(u => String(u.email).trim().toLowerCase() === email);
        if (user) {
            if (String(user.key).trim() === key) {
                return {
                    success: true,
                    user: {
                        name: user.name,
                        email: user.email
                    },
                    message: "Login success!"
                };
            } else {
                return { success: false, error: "Incorrect details, please enter correct details." };
            }
        }
        return { success: false, error: "Please signup for the website and login again." };
    }

    return { success: false, error: "Unknown action" };
}
