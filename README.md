# Learning Hub

## Project Title & Overview
**Learning Hub** is a web application designed specifically for CSE Engineering students. It provides a centralized repository for accessing university syllabus copies, recommended video playlists (available in English, Hindi, and Telugu), and essential handwritten notebooks or PDF study materials. By offering clear learning paths directly linked to specific subjects and semesters, it streamlines exam preparation and daily study routines without the clutter of unstructured search engine results.

## Tech Stack & Architecture
This project is built using strictly **Vanilla Web Technologies**:
*   **HTML5**
*   **CSS3**
*   **ES6+ JavaScript**

*There are intentionally no external frameworks (like React, Vue, Angular), CSS preprocessors (SASS/LESS), build tools, or npm bundlers used in this project. The goal is to keep the codebase raw, performant, and easily understandable without complex build pipelines.*

**Key Architectural Decisions:**
*   **Dynamic HTML Component Injection:** Shared UI components such as the site-wide `<nav>` header and `<footer>` are injected dynamically via `scripts/components.js`. This prevents markup duplication while allowing traditional stylesheets to apply globally without the encapsulation constraints of Shadow DOM or Web Components.
*   **Client-Side Authentication & State:** `localStorage` is heavily utilized to act as a lightweight client-side database. It persists user registration data (simulated authentication) and preserves the state of the selected course when navigating between the subject dashboard and the video playlist pages.
*   **Modular Event Binding:** All inline HTML event handlers (e.g., `onclick`) have been extracted into dedicated, page-specific JavaScript modules to ensure separation of concerns and prevent null reference errors on elements that don't exist on certain pages.

## Repository Directory Layout

```text
├── index.html                  # Landing page introducing the platform
├── category.html               # Main dashboard to select engineering branch
├── sub_category_transparent.html # Semester and subject selection interface (Question papers & Syllabus)
├── playlist.html               # The resource hub showing Web Links, Videos, and Notes for the chosen subject
├── login.html                  # User login interface
├── signup.html                 # User registration interface
├── about.html                  # Information about the platform's features
├── contact.html                # Form to contact the administrators
├── css/
│   ├── navbar.css              # Global navigation styling
│   ├── footer.css              # Global footer styling
│   ├── category.css            # Styles specific to the branch selection page
│   ├── sub_category.css        # Styles specific to the subject selection sidebar and cards
│   ├── index.css               # Styles for the landing page
│   ├── login_signup.css        # Shared styles for authentication forms
│   ├── contact.css             # Styles specific to the contact form
│   └── playlist_inline.css     # Extra styles for the playlist layout
├── scripts/
│   ├── auth.js                 # Shared authentication and localStorage helper logic
│   ├── components.js           # Dynamic injection logic for the header and footer components
│   ├── playlist.js             # Consolidated course data models and redirection logic
│   ├── playlist_events.js      # DOM event listeners specific to the playlist page
│   ├── category.js             # Event listeners for the category/branch selection
│   ├── sub_category.js         # State toggling logic for subject sidebar and syllabus/question paper views
│   ├── login.js                # Form submission handlers for login
│   └── signup.js               # Form submission handlers for registration
└── images/                     # Static assets (logos, background images, syllabus snapshots)
```

## Data Model Documentation
The core course data is stored natively in `scripts/playlist.js` as an array of objects (`coursesData`), drastically improving the DRY nature of the codebase by replacing five parallel arrays.

Each object is structured as follows:
```javascript
{
    id: 0,                           // Matches the subjectcode in localStorage
    webLink: "https://...",          // Written tutorial/web article reference
    englishVideo: "https://...",     // YouTube playlist link (English)
    hindiVideo: "https://...",       // YouTube playlist link (Hindi)
    teluguVideo: "https://...",      // YouTube playlist link (Telugu)
    noteBook: "https://..."          // Google Drive link to handwritten notes/PDF
}
```

**`localStorage` Key Specifications:**
*   `name`: The user's registered name.
*   `email` / `key`: User login credentials (email and password).
*   `addno` / `college` / `university` / `branch`: Additional user profile data captured during signup.
*   `subject`: The human-readable name of the currently selected course (e.g., "BEE", "M-1").
*   `subjectcode`: The numeric index mapped to the `coursesData` array. Set when a user clicks a subject in the sidebar.
*   `language`: The user's preferred language choice for video playlists.

## Local Setup & Usage

Because the application relies exclusively on Vanilla HTML/CSS/JS, no `npm install` or build steps are required.

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd learning-hub
    ```
2.  **Serve locally:**
    To ensure `localStorage` functions correctly and CORS issues are avoided (which can sometimes occur when opening files directly via `file://`), you should serve the directory using a simple local web server.

    Using Python (if installed):
    ```bash
    python -m http.server 8000
    ```
    Or using Node.js `http-server` (if installed globally):
    ```bash
    http-server .
    ```
3.  **Access the app:**
    Open your browser and navigate to `http://localhost:8000`. The application will start at `index.html`.
