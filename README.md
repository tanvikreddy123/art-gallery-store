# MERN Full-Stack Art Gallery Store

A full-stack MERN web application for an online art gallery store, featuring a secure Node.js/Express RESTful API with JWT authentication, owner-based authorization, and a dynamic React UI for managing art listings.

### Live Demo

- **Frontend:** [https://art-gallery-frontend-4at0.onrender.com](https://art-gallery-frontend-4at0.onrender.com)
- **API Base:** [https://art-gallery-backend-k6co.onrender.com/api](https://art-gallery-backend-k6co.onrender.com/api)

---

### Features

- **Auth:** Register/Login with JWT, token stored client-side.
- **CRUD:** Create, read, update, and delete art pieces you own.
- **Authorization:** Only the creator can edit/delete their pieces.
- **Protected routes:** Express middleware validates tokens & ownership.
- **Polished UI:** Conditional buttons, dark theme, toasts.
- **REST API:** Clean endpoints with Mongoose models.

---

### Tech Stack

#### **Backend**

- Node, Express, MongoDB (Atlas), Mongoose
- jsonwebtoken, bcryptjs, dotenv, cors

#### **Frontend**

- React (Vite), React Router
- Axios (single configured instance)
- notistack for toasts

---

### Quick Start (Local)

1.  **Clone & install**
    ```bash
    git clone https://github.com/tanvikreddy123/art-gallery-store.git
    cd art-gallery-store
    ```

2.  **Backend**
    - Navigate to the backend directory and install dependencies:
      ```bash
      cd backend
      npm install
      ```
    - Create a `backend/.env` file:
      ```env
      PORT=5555
      MONGO_URI=your_mongodb_connection_string
      JWT_SECRET=your_strong_random_jwt_secret
      # When deployed, set this to your frontend URL (no trailing slash),
      # e.g. https://art-gallery-frontend-xxxx.onrender.com
      CLIENT_URL=http://localhost:5173
      ```
    - Run the backend server:
      ```bash
      npm run dev
      # server -> http://localhost:5555
      ```

3.  **Frontend**
    - Navigate to the frontend directory and install dependencies:
      ```bash
      cd ../frontend
      npm install
      ```
    - Create a `frontend/.env` file (for local development):
      ```env
      VITE_API_BASE_URL=http://localhost:5555
      ```
    - Run the frontend application:
      ```bash
      npm run dev
      # app -> http://localhost:5173
      ```


### Deployment (Render)

#### **Backend (Web Service)**

-   **Source:** repo root, **Root Directory:** `backend`
-   **Build Command:** `npm install`
-   **Start Command:** `npm start` (or `node server.js`)
-   **Environment**
    -   `MONGO_URI` – your Atlas connection string
    -   `JWT_SECRET` – strong random value
    -   `CLIENT_URL` – your frontend URL, e.g. `https://art-gallery-frontend-xxxx.onrender.com`
-   **(optional)** `NODE_VERSION=22.19.0` (or your local version)

*When live you should see a log like `Server running on port XXXX and MongoDB Connected: ....`*

#### **Frontend (Static Site)**

-   **Source:** same repo, **Root Directory:** `frontend`
-   **Build Command:** `npm install && npm run build`
-   **Publish Directory:** `dist`
-   **Redirect/Rewrite rule (SPA):**
    -   **Source:** `/*`
    -   **Destination:** `/index.html`
    -   **Action:** Rewrite
-   **Environment**
    -   `VITE_API_BASE_URL=https://art-gallery-backend-xxxx.onrender.com` (origin only; the app appends `/api`)

*Any time you change frontend env vars on Render, use **Manual Deploy → Clear build cache & deploy**, then hard-refresh the site.*

---

### Scripts

#### **Backend**

-   `npm run dev` – nodemon
-   `npm start` – production

#### **Frontend**

-   `npm run dev` – Vite dev server
-   `npm run build` – production build
-   `npm run preview` – preview build locally

---

*Project by Tanvik Reddy Kotha*