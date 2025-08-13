# 📰 MERN Blog App – Frontend

<p align="center">
  A full-featured <b>Blog Application</b> built with <b>MongoDB, Express.js, React, and Node.js</b>.<br>
  Supports role-based access (Admin/User), blog management, comments, likes, and profile updates — with JWT authentication and Cloudinary avatar uploads.
</p>

---

## 🚀 Features

### **Frontend**
* 🔐 **Authentication** — Register, Login, Logout
* 🖼 **Avatar Upload** on Registration (Cloudinary)
* ✏ **Blog Management**  
  - Create, edit, delete blogs  
  - Like/unlike blogs  
  - Filter/search blogs  
  - Public & private blog support
* 💬 **Comments** — Add, edit, delete comments
* 👤 **Profile Management** — View & update profile
* 🛡 **Protected Routes** with role-based access (Admin/User)
* 📱 **Responsive UI** with Tailwind CSS

### **Role Permissions**
**Admin**
- Manage all blogs
- Manage all users
- Moderate comments

**User**
- Manage own blogs
- Edit own profile
- Comment & like blogs

---

## 🛠 Tech Stack

| **Frontend**                               | **Backend**                |
| ------------------------------------------ | -------------------------- |
| React ^19.1.0                              | Node.js                    |
| React Router DOM ^7.8.0                    | Express.js                 |
| Tailwind CSS ^4.1.11 (+ @tailwindcss/vite) | MongoDB + Mongoose         |
| Axios ^1.11.0                              | JWT (jsonwebtoken)         |
| Lucide React ^0.536.0                      | bcryptjs                   |
| React Hot Toast ^2.5.2                     | dotenv                      |
|                                            | cors                        |
|                                            | multer                      |
|                                            | cloudinary                  |

---

## 📂 Folder Structure

BLOG_APP_MERN/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── blog.controller.js
│   │   ├── comment.controller.js
│   │   └── upload.controller.js
│   │
│   ├── middleware/
│   │   ├── auth.middleware.js
│   │   ├── error.middleware.js
│   │   ├── isAdmin.js
│   │   └── upload.js
│   │
│   ├── models/
│   │   ├── Blog.js
│   │   ├── Comment.js
│   │   └── User.js
│   │
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── blogs.routes.js
│   │   └── comment.routes.js
│   │
│   ├── utils/
│   │   ├── cloudinary.js
│   │   └── generateToken.js
│   │
│   ├── .env
│   ├── package-lock.json
│   ├── package.json
│   ├── Routes_API.js
│   └── server.js
│
├── frontend/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   │
│   │   ├── components/
│   │   │   ├── Footer.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── Sidebar.jsx
│   │   │
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   │
│   │   ├── layouts/
│   │   │   └── Layout.jsx
│   │   │
│   │   ├── Pages/
│   │   │   ├── Admin/
│   │   │   │   ├── AdminDashboard.jsx
│   │   │   │   ├── GetAllBlocks.jsx
│   │   │   │   ├── GetUsers.jsx
│   │   │   │   └── ManageProfiles.jsx
│   │   │   │
│   │   │   ├── Auth/
│   │   │   │   ├── Login.jsx
│   │   │   │   └── Register.jsx
│   │   │   │
│   │   │   ├── Blog/
│   │   │   │   ├── AllBlogs.jsx
│   │   │   │   ├── CreateBlog.jsx
│   │   │   │   ├── ManageBlock.jsx
│   │   │   │   └── MyBlogs.jsx
│   │   │   │
│   │   │   ├── Users/
│   │   │   │   ├── ManageMyProfile.jsx
│   │   │   │   └── UserDashboard.jsx
│   │   │   │
│   │   │   └── NotFound.jsx
│   │   │
│   │   ├── Services/
│   │   │   ├── apiPaths.js
│   │   │   ├── authService.js
│   │   │   ├── axiosInstance.jsx
│   │   │   ├── blogService.js
│   │   │   └── commenService.jsx
│   │   │
│   │   ├── utils/
│   │   │   └── ProtectedRoute.jsx
│   │   │
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   ├── main.jsx
│   │   └── index.html
│   │
│   ├── .env
│   ├── .gitignore
│   ├── bun.lockb
│   └── eslint.config.js



---

## ⚙️ Environment Variables
Create a `.env` file inside the **frontend** folder:

```env
VITE_API_BASE_URL=http://localhost:8000
📦 Installation & Setup

1️⃣ Clone the repository
git clone https://github.com/yourusername/mern-blog-frontend.git
cd mern-blog-frontend

2️⃣ Install dependencies
npm install

3️⃣ Run the application
npm run dev

📡 API Endpoints Used
Auth
Method	Endpoint	Description
POST	/api/auth/register	Register new user
POST	/api/auth/login	Login user
GET	/api/auth/profile	Get current user profile
PUT	/api/auth/profile	Update current user profile

Admin
Method	Endpoint	Description
GET	/api/auth/users	Get all users
PUT	/api/auth/users/:id	Update user by ID
DELETE	/api/auth/users/:id	Delete user by ID

Blogs
Method	Endpoint	Description
GET	/api/blogs	Get public blogs
GET	/api/blogs/user/me	Get logged-in user's blogs
POST	/api/blogs	Create blog
PUT	/api/blogs/:id	Update blog by ID
DELETE	/api/blogs/:id	Delete blog by ID
PATCH	/api/blogs/:id/like	Like/unlike blog
GET	/api/blogs/admin/all	Get all blogs (Admin)

Comments
Method	Endpoint	Description
POST	/api/comments/:postId	Add comment to blog
GET	/api/comments/:postId	Get all comments for blog
GET	/api/comments/single/:id	Get single comment
PUT	/api/comments/:id	Update comment by ID
DELETE	/api/comments/:id	Delete comment by ID
