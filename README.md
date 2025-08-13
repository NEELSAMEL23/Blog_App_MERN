# 📰 MERN Blog App – Full Stack

<p align="center">
A complete blog platform built using <b>MongoDB, Express.js, React, and Node.js</b>.<br>
Features <b>role-based access (Admin/User)</b>, blog CRUD, likes, comments, JWT authentication, and Cloudinary image uploads.
</p>

<p align="center">
  <a href="https://blog-app-mern-ten.vercel.app/">
    <img src="https://img.shields.io/badge/Frontend-Live%20Demo-0A66C2?style=for-the-badge&logo=react&logoColor=white" alt="Frontend Live Demo"/>
  </a>
  <a href="https://blog-app-mern-xzu7.onrender.com">
    <img src="https://img.shields.io/badge/Backend-Live%20API-4CAF50?style=for-the-badge&logo=node.js&logoColor=white" alt="Backend Live API"/>
  </a>
</p>

---

## 🚀 Features

### **Frontend**
- 🔐 **Authentication** — Register, Login, Logout
- 🖼 **Avatar Upload** (Cloudinary)
- ✏ **Blog Management** — Create, Edit, Delete blogs
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

```

---

## ⚙️ Environment Variables

## Frontend
```
VITE_API_BASE_URL=https://blog-app-mern-xzu7.onrender.com
```

Create a `.env` file inside the **backend** folder:

##
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

---

## 📦 Installation & Setup

1️⃣ **Clone the repository**

```bash
git clone https://github.com/NEELSAMEL23/Blog_App_MERN.git
cd Blog_App_MERN
```

2️⃣ **Install dependencies**

# Backend
cd backend
npm install

# Frontend
```
cd ../frontend
npm install
```

3️⃣ **Run the application**


# Backend
```
node server.js
```
# Frontend
```
npm run dev
```

---

## 📡 API Endpoints

### Auth

| Method | Endpoint           | Description         |
| ------ | ------------------ | ------------------- |
| POST   | /api/auth/register | Register new user   |
| POST   | /api/auth/login    | Login user          |
| GET    | /api/auth/profile  | Get current profile |
| PUT    | /api/auth/profile  | Update profile      |


### Blogs

| Method | Endpoint             | Description        |
| ------ | -------------------- | ------------------ |
| GET    | /api/blogs           | Get public blogs   |
| POST   | /api/blogs           | Create blog        |
| PUT    | /api/blogs/\:id      | Update blog        |
| DELETE | /api/blogs/\:id      | Delete blog        |
| PATCH  | /api/blogs/\:id/like | Like / Unlike blog |


### Comments

| Method | Endpoint               | Description    |
| ------ | ---------------------- | -------------- |
| POST   | /api/comments/\:postId | Add comment    |
| PUT    | /api/comments/\:id     | Update comment |
| DELETE | /api/comments/\:id     | Delete comment |

<p align="center">Made with ❤️ using the MERN Stack</p> ``
