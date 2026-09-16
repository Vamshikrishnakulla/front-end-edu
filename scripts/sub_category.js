document.addEventListener("DOMContentLoaded", () => {
    // Subject Open/Close logic
    const subjectOpen = document.getElementById("subject-open");
    if (subjectOpen) {
        subjectOpen.addEventListener("click", () => block_subject(1));
        subjectOpen.removeAttribute("onclick");
    }

    const subjectClose = document.getElementById("subject-close");
    if (subjectClose) {
        subjectClose.addEventListener("click", () => block_subject(0));
        subjectClose.removeAttribute("onclick");
    }

    // Sub-subject open/close logic
    const subCloseButtons = document.querySelectorAll(".sub-close, button.sub-close");
    subCloseButtons.forEach((btn, index) => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation(); // prevent triggering parent clicks
            block_sub_subject(index.toString());
        });
        btn.removeAttribute("onclick");
    });

    // Side selection logic
    const sideDivs = document.querySelectorAll(".side");
    sideDivs.forEach((div, index) => {
        div.addEventListener("click", () => sel1(index.toString()));
        div.removeAttribute("onclick");
    });

    // Subject items logic
    const subjectItems = document.querySelectorAll(".side li");
    let subjectCounter = 0;

    // Assign indices to list items just like the inline onclicks
    const getSubjectIndex = (text) => {
         const mapping = {
            "BEE": 0, "M-1": 1, "EM": 2, "DRAWING": 3, "PHYSICS": 4,
            "M-2": 5, "ENGLISH": 6, "CHEMISTRY": 7, "C": 8,
            "DSA": 9, "AE": 10, "ES": 11, "CAO": 12, "M-3": 13,
            "CI": 14, "DE": 15, "MFCS": 16, "DAA": 17, "OS": 18, "JAVA": 19,
            "DBMS": 20, "TOC": 21, "WEB": 22, ".NET": 23, "PSS": 24, "MEA": 25,
            "CD": 26, "CN": 27, "SE": 28, "AI": 29, "MAD": 30, "MPI": 31,
            "CNS": 32, "ML": 33, "PYTHON": 34, "OOAD": 35, "CC": 36,
            "PR": 37, "IM": 38, "DS": 39, "IOT": 40, "NSS": 41
         };
         return mapping[text] !== undefined ? mapping[text].toString() : null;
    };

    subjectItems.forEach(item => {
        let textContent = item.textContent.trim();
        let idx = getSubjectIndex(textContent);
        if(idx !== null) {
            item.addEventListener("click", (e) => {
                e.stopPropagation();
                subject(e.target, idx);
            });
            item.removeAttribute("onclick");
        }
    });

    // Main subject heading click
    const subjectHeading = document.querySelector("h2.subjectname");
    if (subjectHeading) {
        subjectHeading.addEventListener("click", subject_change);
        subjectHeading.removeAttribute("onclick");
    }

    // QPaper Button click
    const qpaperBtn = document.getElementById("qpaperbutton");
    if (qpaperBtn) {
        qpaperBtn.addEventListener("click", Q_paper);
        qpaperBtn.removeAttribute("onclick");
    }

    // SPaper Button click
    const spaperBtn = document.getElementById("spaperbutton");
    if (spaperBtn) {
        spaperBtn.addEventListener("click", subject_change);
        spaperBtn.removeAttribute("onclick");
    }

    // Start learning button
    const startLearningBtn = document.querySelector(".btn-hold button.btn:last-child");
    if (startLearningBtn) {
        startLearningBtn.addEventListener("click", () => {
             window.location.assign('playlist.html');
        });
        startLearningBtn.removeAttribute("onclick");
    }
});

// Moved from sub_category_transparent.html
document.addEventListener("DOMContentLoaded", () => {
    // present date value.
    const dateValueEl = document.getElementById("datevalue");
    if (dateValueEl) {
        const d = new Date();
        dateValueEl.innerHTML = d.toDateString();
    }
});

function sel1(k) {
    var x = document.getElementsByClassName("sideinfo");
    var y = document.getElementsByClassName("sub-open");
    var z = document.getElementsByClassName("sub-close");

    for (var i = 0; i < x.length; i++) {
        if (i == k) {
            if(x[i]) x[i].style.display = "inline-block";
            if(y[i]) y[i].style.display = "none";
            if(z[i]) z[i].style.display = "inline-block";
        }
        else {
            if(x[i]) x[i].style.display = "none";
            if(y[i]) y[i].style.display = "inline";
            if(z[i]) z[i].style.display = "none";
        }
    }
}

//function for syllabus copy dispaly.
function subject(obj, k) {
    var sub, x, y;
    sub = obj.innerHTML.trim();
    localStorage.setItem('subject', sub);
    localStorage.setItem('subjectcode', k);
    x = document.getElementsByClassName("fakeimg");
    y = document.getElementsByClassName("subjectname");

    if (x.length > 0) {
        x[0].src = "images/syllabus/" + sub + "IMAGE.jpg";
    }
    if (y.length > 0) {
        y[0].innerHTML = localStorage.getItem('subject');
    }

    // Fix: Reset the button states when a new subject is selected
    subject_change();
}

//function to change the subject after visiting question papers
function subject_change() {
    var sub, x;
    sub = localStorage.getItem('subject');
    x = document.getElementsByClassName("fakeimg");
    if (x.length > 0) {
        x[0].src = "images/syllabus/" + sub + "IMAGE.jpg";
    }

    const sBtn = document.getElementById("spaperbutton");
    const qBtn = document.getElementById("qpaperbutton");
    if (sBtn) sBtn.style.display = "none";
    if (qBtn) qBtn.style.display = "block";
}

//function for question paper display.
function Q_paper() {
    let x, sub;
    sub = localStorage.getItem('subject');
    if (sub !== undefined && sub !== null) {
        x = document.getElementsByClassName("fakeimg");
        if (x.length > 0) {
            x[0].src = "images/syllabus/qpapers/" + sub + "paper.jpg";
        }
        const sBtn = document.getElementById("spaperbutton");
        const qBtn = document.getElementById("qpaperbutton");
        if (qBtn) qBtn.style.display = "none";
        if (sBtn) sBtn.style.display = "block";
    }
    else {
        window.location.reload();
    }
}

function setStorage() {
    localStorage.setItem('subject', 'BEE');
    localStorage.setItem('subjectcode', 0);
}

function block_subject(val) {
    const cardDisplay = document.getElementById("card-display");
    const subOpen = document.getElementById("subject-open");
    const subClose = document.getElementById("subject-close");

    if (val == 1) {
        if(cardDisplay) cardDisplay.style.display = "block";
        if(subOpen) subOpen.style.display = "none";
        if(subClose) subClose.style.display = "block";
    }
    if (val == 0) {
        if(cardDisplay) cardDisplay.style.display = "none";
        if(subOpen) subOpen.style.display = "block";
        if(subClose) subClose.style.display = "none";
    }
}

function block_sub_subject(val) {
    var x = document.getElementsByClassName("sideinfo");
    var y = document.getElementsByClassName("sub-open");
    var z = document.getElementsByClassName("sub-close");
    if(x[val]) x[val].style.display = "none";
    if(y[val]) y[val].style.display = "inline";
    if(z[val]) z[val].style.display = "none";
}

function myCourse() {
    alert(`choose one of the following course's`);
}
