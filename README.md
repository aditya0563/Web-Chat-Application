# 💬 Real-Time Chat Application (MERN + Redux + Socket.io)

A full-stack real-time chat application built using the **MERN stack**, **Redux Toolkit** for state management, and **Socket.io** for real-time communication. It allows users to send and receive messages instantly, track online status, and store chat history.

---

## 🚀 Features

* 🔐 User Authentication (JWT Login / Signup)
* 💬 Real-time Messaging
* 🟢 Online / Offline Status
* 📜 Chat History Stored in MongoDB
* ⚡ Global State Management using Redux Toolkit
* 📱 Responsive UI (Mobile + Desktop)

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Redux Toolkit
* Axios
* Socket.io Client

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Socket.io


---

## 📂 Project Structure

## 📂 Project Structure

```
chat-app/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── services/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── socket/
│   ├── server.js
│   └── package.json
│
├── .gitignore
└── README.md
```


---

## ⚙️ Installation & Setup

### 1. Clone the repository

git clone https://github.com/bikashdalapati-09/chat-app.git
cd chat-app

### 2. Install dependencies

**Frontend**
* cd frontend
* npm install

**Backend**
* cd backend
* npm install

---


## ▶️ Run the Application

**Start Backend**
* cd backend
* npm run dev

**Start Frontend**
* cd frontend
* npm run dev

---

## 🔌 Socket Events

* setup → Initialize socket connection
* join chat → Join a chat room
* new message → Send message
* message received → Receive message

---


## 📌 Future Improvements

* 👥 Group Chat
* 🖼️ Image/File Sharing
* 🔔 Push Notifications
* 🌙 Dark Mode
* 📞 Video Calling
* 🎤 Voice Messages

---

## 👨‍💻 Author

Bikash Dalapati
GitHub: https://github.com/biashdalapati-09
LinkedIn: https://www.linkedin.com/in/bikashdalapati09/

---

## ⭐ Contributing

Feel free to fork this repository and submit a pull request.


---

## 💡 Project Purpose

This project demonstrates:

* Real-time communication using WebSockets
* Global state management using Redux Toolkit
* REST API integration
* Scalable MERN architecture
