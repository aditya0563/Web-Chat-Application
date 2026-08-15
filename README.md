<div align="center">
  <h1 align="center">Real-Time Chat Application</h1>
  <p align="center">
    A production-ready, full-stack real-time chat application built with the MERN stack and Socket.io.
    <br />
    <a href="https://github.com/aditya0563/Web-Chat-Application"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="#">View Demo</a>
    ·
    <a href="https://github.com/aditya0563/Web-Chat-Application/issues">Report Bug</a>
    ·
    <a href="https://github.com/aditya0563/Web-Chat-Application/issues">Request Feature</a>
  </p>
</div>

<!-- Badges -->
<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" alt="Redux" />
  <img src="https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white" alt="Socket.io" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
</p>

## 📖 Table of Contents

- [About the Project](#-about-the-project)
  - [Architecture](#architecture)
  - [Built With](#built-with)
- [Features](#-features)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#-usage)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

## 🚀 About The Project

This Real-Time Chat Application is a robust, scalable web platform designed to facilitate instant messaging and seamless communication. Built with modern software engineering practices, it features secure authentication, real-time data flow with WebSockets, and state-of-the-art state management.

This project was developed with a focus on clean code architecture, performance optimization, and responsive design, ensuring a smooth experience across all devices.

### Architecture

The application follows a standard Client-Server architecture utilizing the MERN stack and Socket.io:
- **Client:** React.js frontend tailored with Tailwind CSS for utility-first styling, and Redux Toolkit for global state management.
- **Server:** Node.js environment powered by Express.js, handling RESTful API endpoints and Socket.io for WebSocket connections.
- **Database:** MongoDB serving as a flexible NoSQL data store for user profiles and chat histories.

### Built With

* [![React][React.js]][React-url]
* [![Redux][Redux.js]][Redux-url]
* [![Node][Node.js]][Node-url]
* [![Express][Express.js]][Express-url]
* [![MongoDB][MongoDB]][MongoDB-url]
* [![Socket.io][Socket.io]][Socket-url]
* [![Tailwind][Tailwind CSS]][Tailwind-url]

## ✨ Features

- **🔐 Secure Authentication:** Robust user authentication and authorization using JWT (JSON Web Tokens).
- **💬 Real-time Messaging:** Instant message delivery and reception powered by Socket.io.
- **🟢 Online/Offline Status:** Real-time tracking of users' connection statuses.
- **📜 Persistent Chat History:** All conversations are securely stored in MongoDB and easily retrievable.
- **⚡ Advanced State Management:** Efficient client-side state handling utilizing Redux Toolkit.
- **📱 Responsive UI/UX:** A mobile-first design approach ensuring perfect rendering on viewports of all sizes.

## 🛠 Getting Started

Follow these instructions to set up the project locally on your machine for development and testing purposes.

### Prerequisites

Ensure you have the following installed on your local machine:
* [Node.js](https://nodejs.org/) (v16.x or later)
* [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
* [MongoDB](https://www.mongodb.com/) (Local instance or Atlas URI)

### Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/aditya0563/Web-Chat-Application.git
   cd Web-Chat-Application
   ```

2. **Setup the Backend**
   ```sh
   cd backend
   npm install
   # Create a .env file (add your MongoDB URI, Port, JWT Secret, etc.)
   ```

3. **Setup the Frontend**
   ```sh
   cd ../frontend
   npm install
   # Create a .env file if necessary (e.g., for API Base URL)
   ```

4. **Run the Application**
   Open two terminal windows:
   
   *Terminal 1 (Backend):*
   ```sh
   cd backend
   npm run dev
   ```
   
   *Terminal 2 (Frontend):*
   ```sh
   cd frontend
   npm run dev
   ```

## 💡 Usage

Once the application is running:
1. Navigate to the frontend URL (typically `http://localhost:3000` or `http://localhost:5173`).
2. Register a new account or log in with existing credentials.
3. Start chatting with other registered users in real-time.

## 🛣 Roadmap

- [ ] 👥 Group Chat Functionality
- [ ] 🖼️ Image and File Sharing
- [ ] 🔔 Push Notifications
- [ ] 🌙 Dark Mode Theme
- [ ] 📞 Video Calling Integration
- [ ] 🎤 Voice Messages

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📫 Contact

**Aditya Thakur**

- LinkedIn: [https://www.linkedin.com/in/aditya-thakur-1507091aa/](https://www.linkedin.com/in/aditya-thakur-1507091aa/)
- GitHub: [https://github.com/aditya0563](https://github.com/aditya0563)

---
<div align="center">
  <p>Built with ❤️ by Aditya Thakur</p>
</div>

<!-- MARKDOWN LINKS & IMAGES -->
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Redux.js]: https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white
[Redux-url]: https://redux.js.org/
[Node.js]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[Node-url]: https://nodejs.org/
[Express.js]: https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white
[Express-url]: https://expressjs.com/
[MongoDB]: https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB-url]: https://www.mongodb.com/
[Socket.io]: https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white
[Socket-url]: https://socket.io/
[Tailwind CSS]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[Tailwind-url]: https://tailwindcss.com/
