// @ts-check

document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", async (e) => {
            e.preventDefault();

            const submitBtn = document.getElementById("sub");
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = "Submitting...";
            }

            // Extract and sanitize inputs
            const getVal = (id) => {
                const el = document.getElementById(id);
                return el ? el.value : "";
            };

            const payload = {
                name: getVal("contactname").trim(),
                addno: getVal("add").trim(),
                college: getVal("college").trim(),
                university: getVal("uni").trim(),
                branch: getVal("branch").trim().toUpperCase(),
                email: getVal("contact_email").trim().toLowerCase(),
                key: getVal("text_area").trim()
            };

            const response = await apiAuthCall('SIGNUP', payload);

            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerHTML = "Submit";
            }

            if (response.success) {
                // Populate localStorage with non-logged-in profile state if requested
                // Note: Not setting 'isLoggedIn' until actual login occurs.
                Object.keys(payload).forEach(k => {
                    localStorage.setItem(k, payload[k]);
                });

                alert(response.message || "Registered successfully! Please login now.");
                window.location.assign("login.html");
            } else {
                alert(response.error || "An error occurred during signup.");
            }
        });
    }
});
