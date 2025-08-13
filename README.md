<!-- README.md -->

<div style="font-family: Arial, sans-serif; padding: 20px; border-radius: 10px; background: #f9f9f9;">

<h1 style="text-align:center; color: #2d89ef;">📰 MERN Blog App – Full Stack</h1>
<p style="text-align:center; font-size: 1.1rem;">
A full-featured <b>Blog Application</b> built with <b>MongoDB, Express.js, React, and Node.js</b>.<br>
Supports role-based access (<b>Admin/User</b>), blog management, comments, likes, and profile updates — with <b>JWT authentication</b> and <b>Cloudinary avatar uploads</b>.
</p>

<hr>

<h2 style="color:#2d89ef;">🚀 Features</h2>

<h3>Frontend</h3>
<ul>
  <li>🔐 <b>Authentication</b> — Register, Login, Logout</li>
  <li>🖼 Avatar Upload on Registration (Cloudinary)</li>
  <li>✏ Blog Management — Create, edit, delete blogs</li>
  <li>❤️ Like/unlike blogs</li>
  <li>🔍 Filter/search blogs</li>
  <li>🌐 Public & Private blog support</li>
  <li>💬 Comments — Add, edit, delete</li>
  <li>👤 Profile Management — View & update profile</li>
  <li>🛡 Protected Routes (Role-based access)</li>
  <li>📱 Responsive UI (Tailwind CSS)</li>
</ul>

<h3>Backend</h3>
<ul>
  <li>🔐 JWT Authentication</li>
  <li>🖼 Cloudinary Image Upload</li>
  <li>✏ Blog CRUD API</li>
  <li>💬 Comment API</li>
  <li>🛡 Role-based Access Control</li>
  <li>⚠ Error Handling Middleware</li>
  <li>🌐 CORS Enabled</li>
</ul>

<hr>


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


<hr>

<h2 style="color:#2d89ef;">📂 Folder Structure</h2>
<pre style="background: #eee; padding: 10px; border-radius: 5px;">
BLOG_APP_MERN/
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
│   ├── .env
│   └── main.jsx
</pre>

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
