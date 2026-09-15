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
