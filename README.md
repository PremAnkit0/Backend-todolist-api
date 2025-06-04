# 🗂️ TODO List API

This is a simple RESTful backend API for managing TODO lists and items. Built using **Node.js**, **Express**, and **MongoDB**, this project lets users create, update, and delete todo lists and their corresponding items.

---

## 🚀 About the Project

This is my **first ever backend project**, built as part of my **Practice School (PS)** at BITS Pilani. The aim was to understand how backend systems work, how REST APIs are structured, and how databases (MongoDB in this case) interact with Node.js applications.

---

## 📌 Features

- 🔐 Create and manage TODO lists
- ✅ Add, update, and delete individual items in lists
- 🔎 Retrieve items globally or by specific list
- 🌐 Connected to MongoDB using Mongoose
- 📦 Organized file structure with Routes, Controllers, and Models

---

## 🔗 API Endpoints

### 📁 Lists
- `POST /api/lists` – Create a new list
- `GET /api/lists/:id` – Get list by ID
- `PUT /api/lists/:id` – Update list by ID
- `DELETE /api/lists/:id` – Delete list by ID

### 📝 Items
- `POST /api/items` – Create a new item in a list
- `GET /api/items` – Get all items
- `GET /api/items/:id` – Get item by ID
- `GET /api/items/list/:listId` – Get all items in a specific list
- `PUT /api/items/:id` – Update item by ID
- `DELETE /api/items/:id` – Delete item by ID

---

## 🧑‍💻 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** (with Mongoose)
- **Postman** (for testing)
- **Git & GitHub** (for version control)

---

## ⚙️ Setup Instructions

1. **Clone this repository**
   ```bash
   git clone https://github.com/PremAnkit0/Backend-todolist-api.git
   cd Backend-todolist-api

2. **Install dependencies**
   npm install

3. **Create a `.env` file** in the root directory with the following content:
   MONGO_URL=your_mongodb_connection_string
   PORT=5000/3000

4. **Run the server**
   nodemon index.js
   
5. **Test the API** using Postman or any API client.

---

## 📁 Folder Structure

```plaintext
TODOLIST-API/
├── index.js              # Main entry point
├── routes_temp/          # All route definitions
│   ├── itemRoutes.js
│   └── listRoutes.js
├── controllers_temp/     # Business logic
│   ├── itemController.js
│   └── listController.js
├── models/               # Mongoose schemas
│   ├── Item.js
│   └── List.js
├── .env                  # Environment variables (DO NOT COMMIT THIS)
└── README.md             # You're reading it!

---

## 📮 Feedback

Feel free to open an issue or fork this project. As this is my learning project, suggestions are most welcome!

---

> Built with ❤️ as part of my journey into backend development (Practice School @ BITS Pilani Hyderabad Campus)





