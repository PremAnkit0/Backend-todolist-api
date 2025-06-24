# 🗂️ TODO List API

This is a full-stack web application for managing TODO lists and items. Built using **Node.js**, **Express**, and **MongoDB** for the backend, with user authentication and a modern frontend interface.

---

## 🚀 About the Project

This project started as my **first backend project** during **Practice School (PS)** at BITS Pilani and has evolved into a full-stack application. The goal was to understand full-stack development, including:
- Building RESTful APIs with Node.js and Express
- Database design and integration with MongoDB
- User authentication and authorization
- Frontend development and API integration
- Best practices in project structure and code organization

---

## 📌 Features

- 👤 User authentication and authorization
- 🔐 Create and manage personal TODO lists
- ✅ Add, update, and delete individual items in lists
- 🔎 Retrieve items globally or by specific list
- 🌐 Connected to MongoDB using Mongoose
- 🎨 Modern, responsive frontend interface
- 📦 Organized file structure with Routes, Controllers, and Models
- 🔒 Secured endpoints with JWT authentication

---

## 🔗 API Endpoints

### 🔑 Authentication
- `POST /api/auth/register` – Register a new user
- `POST /api/auth/login` – Login user
- `GET /api/auth/profile` – Get user profile
- `PUT /api/auth/profile` – Update user profile

### 📁 Lists
- `POST /api/lists` – Create a new list
- `GET /api/lists` – Get all lists for authenticated user
- `GET /api/lists/:id` – Get list by ID
- `PUT /api/lists/:id` – Update list by ID
- `DELETE /api/lists/:id` – Delete list by ID

### 📝 Items
- `POST /api/items` – Create a new item in a list
- `GET /api/items` – Get all items for authenticated user
- `GET /api/items/:id` – Get item by ID
- `GET /api/items/list/:listId` – Get all items in a specific list
- `PUT /api/items/:id` – Update item by ID
- `DELETE /api/items/:id` – Delete item by ID

---

## 🧑‍💻 Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** (with Mongoose) - Database
- **JWT** - Authentication
- **bcrypt** - Password hashing
- **dotenv** - Environment configuration

### Frontend
- Custom frontend (see `frontend/` folder for details)

### Development & Testing
- **nodemon** - Development server
- **Postman** - API testing
- **Git & GitHub** - Version control

---

## ⚙️ Setup Instructions

1. **Clone this repository**
   ```bash
   git clone https://github.com/PremAnkit0/Backend-todolist-api.git
   cd Backend-todolist-api
   ```

2. **Install backend dependencies**
   ```bash
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   cd ..
   ```

4. **Create a `.env` file** in the root directory with the following content:
   ```
   MONGO_URL=your_mongodb_connection_string
   PORT=5000
   JWT_SECRET=your_jwt_secret_key
   ```

5. **Run the development servers**
   
   Backend:
   ```bash
   npm run dev  # runs nodemon index.js
   ```
   
   Frontend:
   ```bash
   cd frontend
   npm start
   ```

6. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   
7. **Test the API** using Postman or any API client

---

## 📁 Project Structure

```plaintext
TODOLIST-API/
├── frontend/            # Frontend application
├── index.js            # Main entry point
├── routes/             # All route definitions
│   ├── authRoutes.js   # Authentication routes
│   ├── itemRoutes.js   # Item management routes
│   └── listRoutes.js   # List management routes
├── controllers/        # Business logic
│   ├── authController.js
│   ├── itemController.js
│   └── listController.js
├── models/            # Mongoose schemas
│   ├── User.js       # User model
│   ├── Item.js       # Item model
│   └── List.js       # List model
├── middleware/        # Custom middleware
│   └── authMiddleware.js  # JWT authentication
├── .env              # Environment variables (DO NOT COMMIT THIS)
└── README.md         # You're reading it!
```

---

## 🔒 Authentication

The API uses JWT (JSON Web Tokens) for authentication. To access protected endpoints:

1. Register or login to get a JWT token
2. Include the token in the Authorization header:
   ```
   Authorization: Bearer <your_jwt_token>
   ```
3. The token will be required for all protected routes

---

## 📮 Feedback

Feel free to open an issue or fork this project. As this started as a learning project and has grown into something more comprehensive, suggestions and contributions are most welcome!

---

> Built with ❤️ as part of my journey into full-stack development (Practice School @ BITS Pilani Hyderabad Campus)





