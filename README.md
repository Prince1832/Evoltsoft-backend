# EV Charging Station Management - Backend
This is the backend API for an Electric Vehicle (EV) Charging Station management system. Built with Node.js and Express, this API provides secure and efficient endpoints to manage EV charging stations, including user authentication and CRUD operations for charging stations.

It’s built using **Node.js**, **Express**, and **MongoDB**, and provides a set of APIs to handle authentication and charging station management.

---

## How to Run This Project Locally

### 1. Clone the repository

```bash
git clone https://github.com/Prince1832/Evoltsoft-backend.git
cd Evoltsoft-backend
```

### 2. Install dependencies
npm install


### 3. Setup environment variables

Create a `.env` file in the root folder and add the following:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret


You can use [MongoDB Atlas](https://www.mongodb.com/atlas/database) to host your database if you don't have one already.

### 4. Start the server

npm run dev

Your backend will start on `http://localhost:5000`



## API Overview

### Auth Routes

- `POST /api/auth/register` → Register a new user  
- `POST /api/auth/login` → Login and get a token

No authentication is required for these routes.

---

### Charger Station Routes (Protected)

These routes require a valid JWT token in the `Authorization` header.

- `GET /api/chargers` → Get all stations
- `POST /api/chargers` → Add a new station
- `PUT /api/chargers/:id` → Update station by ID
- `DELETE /api/chargers/:id` → Delete station by ID

---

## Deployment

The backend is planned to be deployed on **Render**.  
 Deployment link will be added here once it's live.

---

## API Testing

Postman collection and Swagger docs will be shared soon to help you test the API easily.

---

## Tech Stack

- Node.js
- Express
- MongoDB + Mongoose
- JWT for authentication
- bcrypt for password hashing
- dotenv for managing environment variables

---

## About the Author

Made with  by **Prince1832**

GitHub: [https://github.com/Prince1832](https://github.com/Prince1832)
