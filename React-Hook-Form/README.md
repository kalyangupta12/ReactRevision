
# React-Hook-Form Project

This project is a practice project for revising concepts of React Hook Form and integrating it with a backend API. 
It also simulates handling form validation, API requests, and feedback using toast notifications.

## Project Overview

This project was developed as part of the **React Revision Series**, based on **CodeWithHarry's Sigma Web Development Course** on YouTube. The main goal of this project is to practice form handling with React Hook Form, integrate with a MySQL backend, and demonstrate form validation with proper error handling and feedback.

### Features

- **Form Handling**: Uses `react-hook-form` to manage form submission, validation, and state.
- **Backend Integration**: Sends form data to a Node.js server which connects to a MySQL database.
- **Toast Notifications**: Provides user feedback using the `react-hot-toast` library.
- **Loader Simulation**: Adds simulated network delay with the `ThreeDots` loader component.

## Technologies

- Frontend: React, React Hook Form, Axios, react-hot-toast
- Backend: Node.js, Express, MySQL
- Loader: react-loader-spinner

## Installation

To run this project locally, follow these steps:

### Frontend

1. Clone the repository:

   ```bash
   git clone https://github.com/kalyangupta12/ReactRevision.git
   cd ReactRevision/React-Hook-Form
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Run the React development server:

   ```bash
   npm run dev
   ```

### Backend

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Create a MySQL database named `hook_test` and add a `users` table with `id`, `email`, and `password` columns.

3. Update the MySQL credentials in `server.js` to match your local MySQL setup.

4. Start the backend server:

   ```bash
   nodemon server.js
   ```

## Usage

1. Navigate to the form in the frontend, and submit user information (email and password).
2. The backend server will receive the form data and insert it into the MySQL database.
3. Success or error messages will be displayed as toast notifications on the frontend.

## API Routes

- `POST /sendusers`: Accepts user data (email and password) and inserts it into the database.
- `GET /users`: Retrieves all users from the database.

## Acknowledgment

This project is inspired by CodeWithHarry's Sigma Web Development Course on YouTube. Special thanks to him for creating such helpful tutorials.
