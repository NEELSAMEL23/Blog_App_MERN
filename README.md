<!-- README.md -->

<h1 align="center">📰 MERN Blog App – Full Stack</h1>

<p align="center">
A complete blog platform built using <b>MongoDB, Express.js, React, and Node.js</b>.<br>
Features <b>role-based access (Admin/User)</b>, blog CRUD, likes, comments, JWT authentication, and Cloudinary image uploads.
</p>

<h2 align="center">🌐 Live Links</h2>
<p align="center">
  <a href="https://blog-app-mern-ten.vercel.app/">
    <img src="https://img.shields.io/badge/Frontend-Live%20Demo-0A66C2?style=for-the-badge&logo=react&logoColor=white" />
  </a>
  <a href="https://blog-app-mern-xzu7.onrender.com">
    <img src="https://img.shields.io/badge/Backend-Live%20API-4CAF50?style=for-the-badge&logo=node.js&logoColor=white" />
  </a>
</p>


---

## 🚀 Features

### **Frontend**
- 🔐 **Authentication** — Register, Login, Logout
- 🖼 **Avatar Upload** (Cloudinary)
- ✏ **Blog Management** — Create, edit, delete blogs
- ❤️ Like / Unlike blogs
- 🔍 Filter & Search blogs
- 🌐 Public & Private blogs
- 💬 Comment system (Add, Edit, Delete)
- 👤 Profile management (View & Update)
- 🛡 Protected Routes (Role-based)
- 📱 Responsive UI (Tailwind CSS)

### **Backend**
- 🔐 JWT Authentication
- 🖼 Cloudinary Image Upload
- ✏ Blog CRUD API
- 💬 Comment API
- 🛡 Role-based Access Control
- ⚠ Error Handling Middleware
- 🌐 CORS Enabled

---

## 🛠 Tech Stack

| **Frontend**                               | **Backend**                |
| ------------------------------------------ | -------------------------- |
| React ^19.1.0                              | Node.js                    |
| React DOM ^19.1.0                          | Express.js ^5.1.0          |
| Tailwind CSS ^4.1.11 (+ @tailwindcss/vite) | MongoDB + Mongoose ^8.16.5 |
| Axios ^1.11.0                              | JWT (jsonwebtoken ^9.0.2)  |
| React Hot Toast ^2.5.2                     | bcryptjs ^3.0.2            |
| React Toastify ^11.0.5                     | dotenv ^17.2.1             |
| Lucide React ^0.536.0                      | cookie-parser ^1.4.7       |
|                                            | multer ^2.0.2              |
|                                            | express-fileupload ^1.5.2  |
|                                            | cloudinary ^2.7.0          |

---

## 📂 Folder Structure

```plaintext
BLOG_APP_MERN/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── layouts/
│   │   ├── Pages/
│   │   ├── Services/
│   │   ├── utils/
│   │   └── App.jsx
│   └── public/




