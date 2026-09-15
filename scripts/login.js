document.addEventListener("DOMContentLoaded", () => {
    const submitBtn = document.querySelector('.container button');
    if (submitBtn) {
        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const email = document.getElementById("contact_email").value;
            const pass = document.getElementById("password").value;
            checkLogin(email, pass);
        });
        submitBtn.removeAttribute('onclick');
    }
});
