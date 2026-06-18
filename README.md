# KodeCamp 6.0 — Enrollment Portal (Now With Routing)

## Overview

This project is a React application that manages a student enrollment roster. It demonstrates core React concepts, modern JavaScript (ES6+), API integration, controlled and uncontrolled forms, component composition, state management, and conditional rendering.

The application loads an initial roster from the Random User API, allows users to enroll new students through a form, and displays all enrolled students in a responsive card layout. Routing was then added to navigate between Home, Enroll, Student View Details, and an Error 404 page.

---

## Routes

| URL | Page | Description |
|---|---|---|
| `/` | `HomePage` | The roster — header stats, student cards, refresh button |
| `/students/:id` | `StudentDetailPage` | Full details for one student, found via the `id` in the URL |
| `/enroll` | `EnrollPage` | The enrollment form, on its own page |
| any other URL | `NotFoundPage` | Friendly 404 message with a link back home |

---

## Features

### Navbar

* Shows on every page, with links to Home and Enroll.
* Built with `<NavLink>` so the active page's link is styled differently.
* Uses `<Link>` / `<NavLink>` only — never a plain `<a href>` — so navigation never reloads the browser.

### Home Page

* Displays the header stats and the full student roster.
* Fetches student data from an API and merges it with any students enrolled during the session.
* Each student's name links to their detail page.
* Shows a loading message while fetching and an error message if the request fails.
* Includes a "Refresh Roster" button to re-fetch the data.

### Student Detail Page

* Reads the student's `id` from the URL using `useParams()`.
* Finds and displays that student's full details.
* Shows "Student not found" with a link home if no student matches.
* Includes a "Back to Roster" link.

### Enroll Page

* Renders the enrollment form on its own route.
* After a successful enroll, `useNavigate()` redirects back to the homepage, where the new student appears at the top of the roster.

### 404 Page

* Renders for any URL that doesn't match a defined route.
* Shows a friendly message with a link back to the homepage.

### Student Roster

* Displays:

  * Avatar
  * Full Name
  * Email
  * Track
  * Score
  * Grade
  * Active/Inactive status

### Enrollment Form

The form intentionally demonstrates both React form patterns:

#### Controlled Inputs

* First Name
* Last Name
* Track
* Score

These fields update React state on every change and power a live preview section.

#### Uncontrolled Inputs
Managed using refs (`useRef`):

* Email
* Active Checkbox

Values are read directly from the DOM during form submission.

#### Validation

* First name is required
* Last name is required
* Score must be between 0 and 100
* Email must contain "@"

Invalid submissions show inline errors and block enrollment.

### Statistics

The header displays:

* Total enrolled students
* Average class score

The average score is calculated using JavaScript's `reduce()` method.

### Loading & Error States

The application handles:

* Loading state while fetching data
* Error state when API requests fail

A reusable `StatusMessage` component is used for both states.

---

## Technologies Used

* React
* React Router (`react-router-dom`)
* JavaScript (ES6+)
* JSX
* CSS
* Fetch API

---

## Project Structure

```text
src/
│
├── App.jsx
├── App.css
├── main.jsx
│
├── components/
│   ├── Navbar.jsx
│   ├── Header.jsx
│   ├── Button.jsx
│   ├── ClassButton.jsx
│   ├── StudentCard.jsx
│   ├── StudentList.jsx
│   ├── EnrollForm.jsx
│   └── StatusMessage.jsx
│
└── pages/
    ├── HomePage.jsx
    ├── StudentDetailPage.jsx
    ├── EnrollPage.jsx
    └── NotFoundPage.jsx
```

---

## How Routing Works Here

* **`<BrowserRouter>`** wraps the entire app in `main.jsx`, which is what allows React Router to read and control the browser's URL.
* **`<Routes>` / `<Route>`** live in `App.jsx` and decide which page component to render based on the current URL. This replaced the old approach where `App.jsx` rendered every section directly.
* **`:id` route parameters** let one route (`/students/:id`) handle an unlimited number of students — the actual id is read inside the page using `useParams()`.
* **`useNavigate()`** is used in `EnrollPage` to redirect programmatically after a successful form submission, rather than waiting for the user to click a link.

---

## State Management Across Pages

The full `students` array, along with loading/error status and the enroll handler, all live in `App.jsx` — the common parent of every page. Each page receives only what it needs as props:

* `HomePage` receives the roster, status, stats, and a refresh handler.
* `StudentDetailPage` receives the roster, then finds its one student by id.
* `EnrollPage` receives the track list and the function to add a new student.

Because all pages read from and write to this single shared source, enrolling a student on `/enroll` is immediately reflected back on `/` — no extra syncing logic required.

---

## React Concepts Demonstrated

### Functional Components

All components and pages — Navbar, HomePage, StudentDetailPage, EnrollPage, NotFoundPage, Header, Button, StudentCard, StudentList, EnrollForm, StatusMessage.

### Class Components

* ClassButton

### Hooks

#### useState

Used for:

* Student roster
* Loading state
* Error state
* Form fields
* Validation messages

#### useEffect

Used to:

* Fetch roster data when the application loads

#### useRef

Used for:

* Email input
* Active checkbox

---

## API Integration

The application loads students from:

https://randomuser.me/api/?results=6&nat=us,gb

fields generated:

* track
* score
* isActive

---

## Component-based Architecture

- Component-based architecture means the app is built from reusable UI pieces. Each component handles its own display and behavior, so the app is easier to read and maintain.
- The Virtual DOM is React's copy of the UI in memory. React compares it to the real DOM and updates only what changed, which makes rendering faster.
- This app uses the Random User API to load the initial student roster. It shows a loading message while fetching and an error message if the fetch fails, so the page does not crash.

---

## Controlled VS. Uncontrolled Forms

- Controlled forms keep input values in React state for instant validation and live preview updates.
- Uncontrolled forms keep values in the browser DOM and read them only on submit, which is useful for fields you don't need to track constantly.
- Controlled inputs are useful for live UI feedback or validation while uncontrolled inputs are needed for simpler form handling for occasional reads.

---

## Running the Project

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

---

## Learning Objectives Covered

* Modern JavaScript & ES6
* JSX
* Functional Components
* Class Components
* Props & Destructuring
* Component Composition
* Conditional Rendering
* useState, useEffect, useRef
* API Fetching
* Loading & Error States
* Controlled & Uncontrolled Forms
* State Lifting
* Form Validation
* Client-Side Routing with React Router
* Dynamic Route Parameters (`useParams`)
* Programmatic Navigation (`useNavigate`)
* 404 / Catch-All Routes
