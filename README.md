# MERN Full-Stack Art Gallery Store

A complete full-stack web application built from the ground up using the MERN stack (MongoDB, Express.js, React.js, Node.js). This project is an online gallery store where users can register, log in, and showcase art pieces. It features a secure RESTful API with robust user authentication and authorization.

---
### Features

- **User Authentication:** Secure user registration and login using JSON Web Tokens (JWT).
- **Full CRUD Functionality:** Authenticated users can Create, Read, Update, and Delete their own art piece listings.
- **Authorization:** A user can only edit or delete the art pieces that they have personally created.
- **Protected API Routes:** Backend middleware prevents unauthorized access to modification endpoints.
- **Dynamic UI:** The navigation bar and action buttons on art cards render conditionally based on the user's authentication status and ownership of the content.
- **RESTful API:** A well-structured backend API built with Express.js and Mongoose.

---

### Tech Stack

#### **Backend**
- **Node.js:** JavaScript runtime environment.
- **Express.js:** Web framework for Node.js.
- **MongoDB:** NoSQL database for storing data.
- **Mongoose:** Object Data Modeling (ODM) library for MongoDB.
- **JWT (jsonwebtoken):** For creating and verifying user tokens.
- **bcrypt.js:** For hashing user passwords.
- **dotenv:** For managing environment variables.

#### **Frontend**
- **React.js:** JavaScript library for building user interfaces.
- **React Router:** For client-side routing and navigation.
- **Axios:** For making HTTP requests to the backend API.
- **Vite:** Next-generation frontend tooling for a fast development experience.
- **Notistack:** For displaying toast notifications/alerts.

---

### Getting Started (Local Setup)

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

#### **Prerequisites**
- Node.js (v18 or later)
- npm (Node Package Manager)
- A free MongoDB Atlas account for the database.

#### **Installation**

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/[Your-GitHub-Username]/[Your-Repo-Name].git
    cd art-gallery-store
    ```

2.  **Setup the Backend:**
    ```bash
    # Navigate to the backend directory
    cd backend

    # Install dependencies
    npm install

    # Create a .env file in the /backend directory
    # and add the following variables:
    touch .env
    ```
    Your `backend/.env` file should look like this:
    ```
    PORT=5555
    MONGO_URI="your_mongodb_connection_string"
    JWT_SECRET="your_strong_random_jwt_secret"
    ```

3.  **Setup the Frontend:**
    ```bash
    # Navigate to the frontend directory from the root
    cd frontend

    # Install dependencies
    npm install
    ```

#### **Running the Application**

You will need two separate terminals to run both the backend and frontend servers.

1.  **Run the Backend Server:**
    ```bash
    # In the /backend directory
    npm run dev
    ```
    The server will start on `http://localhost:5555`.

2.  **Run the Frontend Application:**
    ```bash
    # In the /frontend directory
    npm run dev
    ```
    The React application will start on `http://localhost:5173`. Open this URL in your browser to use the app.

---
*Project by Tanvik Reddy Kotha*