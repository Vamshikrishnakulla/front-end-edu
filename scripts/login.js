// @ts-check

document.addEventListener("DOMContentLoaded", () => {
    // Note: login.html does not use a <form> tag, it relies on div and a generic button
    const submitBtn = document.querySelector('.container button');
    if (submitBtn) {
        submitBtn.addEventListener('click', async (e) => {
            e.preventDefault();

            submitBtn.disabled = true;
            submitBtn.innerHTML = "Submitting...";

            const emailInput = document.getElementById("contact_email");
            const passInput = document.getElementById("password");

            const payload = {
                email: emailInput ? emailInput.value.trim().toLowerCase() : "",
                key: passInput ? passInput.value.trim() : ""
            };

            const response = await apiAuthCall('LOGIN', payload);

            submitBtn.disabled = false;
            submitBtn.innerHTML = "Submit";

            if (response.success) {
                const user = response.user;
                if (user) {
                    localStorage.setItem("name", user.name);
                    localStorage.setItem("email", user.email);
                }
                localStorage.setItem("isLoggedIn", "true");

                alert(response.message || "Login success!");
                window.location.assign("category.html");
            } else {
                alert(response.error || "Login failed.");
            }
        });
    }
});
