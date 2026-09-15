document.addEventListener("DOMContentLoaded", () => {
    // Select the boxes by relying on their order in DOM using querySelectorAll
    const boxes = document.querySelectorAll('.box');

    if (boxes.length >= 1) {
        const webBtn = boxes[0].querySelector('button');
        if (webBtn) {
            webBtn.addEventListener('click', webCheck);
        }
    }

    const languageSelect = document.getElementById('lan');
    if (languageSelect) {
        languageSelect.addEventListener('change', (e) => language(e.target.value));
    }

    if (boxes.length >= 2) {
        const videoBtn = boxes[1].querySelector('button');
        if (videoBtn) {
            videoBtn.addEventListener('click', () => {
                if (languageSelect) {
                    language(languageSelect.value);
                }
            });
        }
    }

    if (boxes.length >= 3) {
        const notesBtn = boxes[2].querySelector('button');
        if (notesBtn) {
            notesBtn.addEventListener('click', notebookcheck);
        }
    }

    if (boxes.length >= 4) {
        const discussLink = boxes[3].querySelector('p');
        if (discussLink) {
            discussLink.addEventListener('click', checkStorageForPlaylist);
        }
    }
});
