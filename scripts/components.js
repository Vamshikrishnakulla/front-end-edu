// @ts-check

/**
 * Returns the HTML string for the application navigation bar.
 * @type {string}
 */
const headerHTML = `
    <nav>
        <span id="logo"><img class="logoimg" src="images/logoimg.jpeg" alt="logo.jpeg"></span>
        <button id="logo-div-open" class="logoitems" aria-label="navbars">
            <span class="logoitem"></span>
            <span class="logoitem"></span>
            <span class="logoitem"></span>
        </button>
        <button id="logo-div-close" class="logoitems" aria-label="navbars">
            <span class="logoitem"></span>
            <span class="logoitem"></span>
            <span class="logoitem"></span>
        </button>
        <ul id="navdisplay">
          <li class="ali" style="padding: 5px; height: 50px;"><img src="images/logoimg.jpeg" style="width:120px; height:40px; margin:0px; border-radius:0px;" alt="logo.jpeg"></li>
          <li class="ali"><a href="category.html">Home</a></li>
          <li class="ali"><a href="about.html">About</a></li>
          <li class="ali dropdown">
            <a href="#">Subjects</a>
            <div class="dropdown-content">
              <a href="sub_category_transparent.html">B.tech I-I </a>
              <a href="sub_category_transparent.html">B.tech I-II </a>
              <a href="sub_category_transparent.html">B.tech II-I </a>
              <a href="sub_category_transparent.html">B.tech II-II </a>
              <a href="sub_category_transparent.html">B.tech ,.... etc,. </a>
            </div>
          </li>
          <li class="ali"><a href="contact.html">ContactUs</a></li>
          <div class="right">
            <li><input type="search" placeholder="Search Q&A..."></li>
            <li class="searchbutton"><a href="#">Search</a></li>
            <li><a href="signup.html">SignUp</a></li>
            <li><a href="login.html">Login</a></li>
          </div>
        </ul>
    </nav>
`;

/**
 * Generates the HTML string for the application footer.
 * @returns {string} The footer HTML string.
 */
const getFooterHTML = () => `
        <span>&#169;Getthrough.com</span>
        <span>▶️Projectbeclearedlearninghub@gmail.com</span>
        <span>📚facebook.com</span>
`;

/**
 * Toggles the visibility of the mobile navigation menu.
 * @param {number} val - 1 to open the menu, 0 to close it.
 * @returns {void}
 */
function changenav(val) {
    const logo = document.getElementById("logo");
    const openBtn = document.getElementById("logo-div-open");
    const closeBtn = document.getElementById("logo-div-close");
    const navDisplay = document.getElementById("navdisplay");

    if (!logo || !openBtn || !closeBtn || !navDisplay) return;

    if (val == 1) {
        logo.style.display = "none";
        openBtn.style.display = "none";
        closeBtn.style.display = "block";
        closeBtn.style.border = "2px solid rgb(209, 204, 204)";
        navDisplay.style.display = "block";
    }
    if (val == 0) {
        logo.style.display = "inline-block";
        closeBtn.style.display = "none";
        openBtn.style.display = "block";
        navDisplay.style.display = "none";
        window.location.reload();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const headerPlaceholder = document.getElementById("header-placeholder");
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = headerHTML;

        // Attach changenav events dynamically after injection
        const openBtn = document.getElementById("logo-div-open");
        const closeBtn = document.getElementById("logo-div-close");
        if (openBtn) {
            openBtn.addEventListener("click", () => changenav(1));
        }
        if (closeBtn) {
            closeBtn.addEventListener("click", () => changenav(0));
        }
    }

    const footerPlaceholder = document.getElementById("footer-placeholder");
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = getFooterHTML();
    }
});
