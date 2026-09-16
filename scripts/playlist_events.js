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
        discussLink.addEventListener('click', checkStorageForPlaylist);
    }
});
