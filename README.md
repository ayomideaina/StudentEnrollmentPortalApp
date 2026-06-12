# KodeCamp 6.0 — Enrollment Portal

## Overview

This project is a React application that manages a student enrollment roster. It demonstrates core React concepts, modern JavaScript (ES6+), API integration, controlled and uncontrolled forms, component composition, state management, and conditional rendering.

The application loads an initial roster from the Random User API, allows users to enroll new students through a form, and displays all enrolled students in a responsive card layout.

---

## Features

### Student Roster

* Fetches student data from the Random User API.
* Merges fetched students with predefined seed students.
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

Managed using React state (`useState`):

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

### Validation

The form validates:

* First name is required
* Last name is required
* Score must be between 0 and 100
* Email must contain "@"

Invalid submissions display inline error messages and prevent enrollment.

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
* JavaScript (ES6+)
* JSX
* CSS
* Fetch API

---

## Component Structure

```text
src/
│
├── App.jsx
├── App.css
│
└── components/
    ├── Header.jsx
    ├── Button.jsx
    ├── ClassButton.jsx
    ├── StudentCard.jsx
    ├── StudentList.jsx
    ├── EnrollForm.jsx
    └── StatusMessage.jsx
```

---

## React Concepts Demonstrated

### Functional Components

* Header
* Button
* StudentCard
* StudentList
* EnrollForm
* StatusMessage

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

Mapped fields:

| API Field         | Application Field |
| ----------------- | ----------------- |
| login.uuid        | id                |
| name.first        | firstName         |
| name.last         | lastName          |
| email             | email             |
| picture.thumbnail | avatar            |

Additional fields are generated:

* track
* score
* isActive

---

## Key JavaScript Features Used

* Arrow Functions
* Template Literals
* Destructuring
* Array.map()
* Array.filter()
* Array.reduce()
* Conditional Rendering
* Async/Await
* Spread Operator
* Optional Component Composition

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

or

```bash
npm start
```

depending on the project setup.

---

## Learning Objectives Covered

* Modern JavaScript & ES6
* JSX
* Functional Components
* Class Components
* Props & Destructuring
* Component Composition
* Conditional Rendering
* useState
* useEffect
* useRef
* API Fetching
* Loading & Error States
* Controlled Forms
* Uncontrolled Forms
* State Lifting
* Form Validation
* React Data Flow

```
```
