# Learning Hub

## Project Title & Overview

**Learning Hub** is a web application designed specifically for CSE Engineering students. It provides a centralized repository for accessing university syllabus copies, recommended video playlists (available in English, Hindi, and Telugu), and essential handwritten notebooks or PDF study materials. By offering clear learning paths directly linked to specific subjects and semesters, it streamlines exam preparation and daily study routines without the clutter of unstructured search engine results.

---

## 🌟 Core Features

- **Dynamic HTML Component Injection:** Shared UI components such as the site-wide `<nav>` header and `<footer>` are injected dynamically via `scripts/components.js`. This prevents markup duplication while allowing traditional stylesheets to apply globally without the encapsulation constraints of Shadow DOM or Web Components.
- **Client-Side Authentication & State:** `localStorage` is heavily utilized to act as a lightweight client-side database. It persists user registration data (simulated authentication) and preserves the state of the selected course when navigating between the subject dashboard and the video playlist pages.
- **Modular Event Binding:** All inline HTML event handlers (e.g., `onclick`) have been extracted into dedicated, page-specific JavaScript modules to ensure separation of concerns and prevent null reference errors on elements that don't exist on certain pages.

---

## 🛠 Tech Stack

Built strictly using **Vanilla Web Technologies**:

- **HTML5:** Semantic elements, web-first ARIA roles and accessibility metadata.
- **CSS3:** Flexbox layouts, media queries, CSS sticky positioning, and custom styling.
- **ES6+ JavaScript:** Modular DOM event binding, `localStorage` state management, and input sanitization.

_Note: No external frameworks (React, Vue, Angular), CSS preprocessors (SASS/Tailwind), or bundlers are used._

---

## 📁 Repository Directory Layout

```text
├── index.html                    # Landing page redirecting to category dashboard
├── category.html                 # Primary branch selection dashboard (CSE, ECE, EEE, CIVIL)
├── sub_category_transparent.html # Semester sidebar and subject/syllabus/Q-paper viewer
├── playlist.html                 # Resource hub for chosen course (Web, Video, Notes, Discussion)
├── login.html                    # User login form
├── signup.html                   # User registration form
├── about.html                    # Platform information page
├── contact.html                  # Administrator query form
├── css/
│   ├── navbar.css                # Header navigation bar & mobile dropdown styles
│   ├── footer.css                # Global footer & flexbox layout rules
│   ├── category.css              # Branch grid & hero banner styles
│   ├── sub_category.css          # Sidebar, syllabus viewer, and course controls styling
│   ├── about.css                 # Sticky flexbox layout rules for short content
│   ├── index.css                 # Landing page styles
│   ├── login_signup.css          # Form field layouts & submit button styling
│   └── contact.css                # Contact form layout
├── scripts/
│   ├── auth.js                   # Shared authentication state checks & helper functions
│   ├── components.js             # Dynamic header/footer injection & mobile drawer logic
│   ├── playlist.js               # Unified coursesData model & link lookup handlers
│   ├── playlist_events.js        # Event listeners and auth gate for playlist.html
│   ├── category.js               # Hero banner carousel & branch card event listeners
│   ├── sub_category.js           # Semester sidebar toggle & view state management
│   ├── login.js                  # Login form submission & credential check logic
│   └── signup.js                 # Registration form validation & data normalization
└── images/                       # Static visual assets and syllabus image copies
```

## 💾 Client-Side State Engine (localStorage)

| localStorage Key | Type                | Description                                                           |
| :--------------- | :------------------ | :-------------------------------------------------------------------- |
| `name`           | string              | User's full name.                                                     |
| `email`          | string              | Normalized email address (lowercase.trim()).                          |
| `key`            | string              | Trimmed user password.                                                |
| `addno`          | string              | User admission number.                                                |
| `college`        | string              | College name.                                                         |
| `university`     | string              | University name.                                                      |
| `branch`         | string              | Normalized branch code (UPPERCASE.trim()).                            |
| `isLoggedIn`     | `"true" \| "false"` | Discrete active session control flag.                                 |
| `subject`        | string              | Human-readable title of selected course (e.g. "BEE", "M-1").          |
| `subjectcode`    | string              | Numeric index string mapped to coursesData array.                     |
| `language`       | string              | Video playlist language preference ("English", "Hindi", or "Telugu"). |

## 📦 Course Data Model (`scripts/playlist.js`)

Each course item inside `coursesData` is structured as follows:

```javascript
{
    id: 0,                           // Mapped to subjectcode in localStorage
    webLink: "https://...",          // Written tutorial reference
    englishVideo: "https://...",     // YouTube playlist link (English)
    hindiVideo: "https://...",       // YouTube playlist link (Hindi)
    teluguVideo: "https://...",      // YouTube playlist link (Telugu)
    noteBook: "https://..."          // Google Drive link to PDF notes
}
```

## 🚀 Local Setup & Execution

Since the project uses Vanilla HTML/CSS/JS, no `npm install` or compilation steps are required.

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. **Serve locally using HTTP server:**
   Serving via a local web server prevents CORS issues and guarantees `localStorage` functions predictably across pages.

   _Using Python 3:_

   ```bash
   python -m http.server 8000
   ```

   _Using Node `http-server`:_

   ```bash
   npx http-server -p 8000
   ```

3. **Access in browser:**
   Open `http://localhost:8000/category.html` in your web browser.
