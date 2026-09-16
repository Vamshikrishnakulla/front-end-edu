// @ts-check

/**
 * Validates whether mandatory user profile keys exist in localStorage.
 * @returns {boolean} True if user profile is complete, otherwise false.
 */
function isAuthenticated() {
    return localStorage.getItem("name") !== null &&
           localStorage.getItem("addno") !== null &&
           localStorage.getItem("email") !== null &&
           localStorage.getItem("key") !== null &&
           localStorage.getItem("college") !== null;
}

/**
 * Checks the provided credentials against the stored profile.
 * @param {string} email - The user's input email.
 * @param {string} pass - The user's input password.
 * @returns {void}
 */
function checkLogin(email, pass) {
    const actualemail = localStorage.getItem("email");
    const actualpass = localStorage.getItem("key");

    if (actualemail == undefined && actualpass == undefined) {
        alert("please signup for the website and login again.");
        window.location.assign("signup.html");
    } else if (actualemail === email && actualpass === pass) {
        alert("Login success, you can now access the syllabus.");
        window.location.assign("category.html");
    } else {
        alert("incorrect details, please enter correct details.");
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
