// @ts-check

/**
 * Validates whether mandatory user profile keys exist in localStorage.
 * @returns {boolean} True if user profile is complete, otherwise false.
 */
function isProfileComplete() {
    const requiredKeys = ['name', 'email', 'key', 'college', 'addno'];
    return requiredKeys.every(key => {
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
 * Checks the provided credentials against the stored profile.
 * @param {string} email - The user's input email.
 * @param {string} pass - The user's input password.
 * @returns {void}
 */
function checkLogin(inputEmail, inputPassword) {
    const cleanEmail = (inputEmail || "").trim().toLowerCase();
    const cleanPass = (inputPassword || "").trim();

    const storedEmail = (localStorage.getItem("email") || "").trim().toLowerCase();
    const storedPass = (localStorage.getItem("key") || "").trim();

    if (!storedEmail && !storedPass) {
        alert("Please signup for the website and login again.");
        window.location.assign("signup.html");
    } else if (storedEmail === cleanEmail && storedPass === cleanPass) {
        localStorage.setItem("isLoggedIn", "true");
        alert("Login success, you can now access the syllabus.");
        window.location.assign("category.html");
    } else {
        alert("Incorrect details, please enter correct details.");
    }
}

/**
 * Checks storage to see if user is authenticated before allowing access to discussions.
 * @returns {void}
 */
function checkStorageForPlaylist() {
    if (isAuthenticated()) {
        alert('Hello, sorry!!,.. This is a test feature, under implementation will make the service avaliale soon!!,..');
    } else {
        window.location.assign("login.html");
    }
}
