<!-- README.md -->

# 📰 MERN Blog App – Full Stack

> **A complete blog platform built using MongoDB, Express.js, React, and Node.js (MERN Stack)**  
> Features **role-based access (Admin/User)**, blog CRUD, likes, comments, JWT authentication, and Cloudinary image uploads.

---

## 🌐 Live Links
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


<hr>

<h2 style="color:#2d89ef;">⚙️ Environment Variables</h2>
<p><b>Frontend</b></p>
<pre style="background: #eee; padding: 10px; border-radius: 5px;">
VITE_API_BASE_URL=http://localhost:8000
</pre>
<p><b>Backend</b></p>
<pre style="background: #eee; padding: 10px; border-radius: 5px;">
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
</pre>

<hr>

<h2 style="color:#2d89ef;">📦 Installation & Setup</h2>
<ol>
<li><b>Clone Repository</b>
<pre>git clone https://github.com/yourusername/mern-blog-app.git
cd mern-blog-app</pre></li>
<li><b>Install Dependencies</b>
<pre># Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install</pre></li>
<li><b>Run Applications</b>
<pre># Backend
npm run dev

# Frontend
npm run dev</pre></li>
</ol>

<hr>

<h2 style="color:#2d89ef;">📡 API Endpoints</h2>
<h4>Auth</h4>
<pre>
POST /api/auth/register   → Register new user
POST /api/auth/login      → Login user
GET  /api/auth/profile    → Get current user profile
PUT  /api/auth/profile    → Update profile
</pre>

<h4>Blogs</h4>
<pre>
GET    /api/blogs              → Get public blogs
POST   /api/blogs              → Create blog
PUT    /api/blogs/:id          → Update blog
DELETE /api/blogs/:id          → Delete blog
PATCH  /api/blogs/:id/like     → Like/unlike blog
</pre>

<h4>Comments</h4>
<pre>
POST   /api/comments/:postId   → Add comment
PUT    /api/comments/:id       → Update comment
DELETE /api/comments/:id       → Delete comment
</pre>

<hr>

<p style="text-align:center; font-size: 0.9rem;">
Made with ❤️ using MERN Stack
</p>

</div>
