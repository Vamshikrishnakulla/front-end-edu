function isAuthenticated() {
    return localStorage.getItem("name") &&
           localStorage.getItem("addno") &&
           localStorage.getItem("email") &&
           localStorage.getItem("key") &&
           localStorage.getItem("college");
}

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

function checkStorageForPlaylist() {
    if (isAuthenticated()) {
        alert('Hello, sorry!!,.. This is a test feature, under implementation will make the service avaliale soon!!,..');
    } else {
        window.location.assign("login.html");
    }
}
