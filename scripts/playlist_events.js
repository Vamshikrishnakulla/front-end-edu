// @ts-check

document.addEventListener("DOMContentLoaded", () => {

    const webBtn = document.getElementById("webBtn");
    if (webBtn) {
        webBtn.addEventListener('click', webCheck);
    }

    const languageSelect = document.getElementById('lan');
    if (languageSelect) {
        languageSelect.addEventListener('change', (e) => language(e.target.value));
    }

    const videoBtn = document.getElementById("videoBtn");
    if (videoBtn) {
        videoBtn.addEventListener('click', () => {
            if (languageSelect) {
                language(languageSelect.value);
            }
        });
    }

    const notesBtn = document.getElementById("notesBtn");
    if (notesBtn) {
        notesBtn.addEventListener('click', notebookcheck);
    }

    const discussLink = document.getElementById("discussLink");
    if (discussLink) {
        const aTag = discussLink.querySelector("a");
        if (isAuthenticated()) {
            if (aTag) {
                aTag.innerHTML = "💬 Open Discussion Room";
                aTag.href = "#discussion";
            }
        } else {
            if (aTag) {
                aTag.innerHTML = "🔒 Please, Login to continue.";
                aTag.href = "login.html";
            }
        }
        discussLink.addEventListener('click', (e) => {
            e.preventDefault();
            checkStorageForPlaylist();
        });
    }
});
