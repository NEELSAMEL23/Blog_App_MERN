import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import NotFound from "./Pages/NotFound";
import ProtectedRoute from "./utils/ProtectedRoute";


import GetAllUsers from "./Pages/Admin/GetUsers";
import ManageProfiles from "./Pages/Admin/ManageProfiles";
import UserDashboard from "./Pages/Users/UserDashboard";
import ManageMyProfile from "./Pages/Users/ManageMyProfile";
import CreateBlog from "./Pages/Blog/CreateBlog";
import MyBlogs from "./Pages/Blog/MyBlogs";
import GetAllBlocks from "./Pages/Admin/GetAllBlocks";
import AllBlogs from "./Pages/Blog/AllBlogs";
import ManageBlock from "./Pages/Blog/ManageBlock";


export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<AllBlogs />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />


          <Route element={<ProtectedRoute role="admin" />}>
            <Route path="/admin/users" element={<GetAllUsers />} />
            <Route path="/admin/users/:id" element={<ManageProfiles />} />
            <Route path="/admin/createBlog" element={<CreateBlog />} />
            <Route path="/admin/myBlogs" element={<MyBlogs />} />
            <Route path="/admin/AllBlogs" element={<GetAllBlocks />} />
            <Route path="/admin/editblog/:id" element={<ManageBlock />} />

          </Route>

          <Route element={<ProtectedRoute role="user" />}>
            <Route path="/user/dashboard" element={<UserDashboard />} />
            <Route path="/user/profile" element={<ManageMyProfile />} />
            <Route path="/user/createBlog" element={<CreateBlog />} />
            <Route path="/user/myBlogs" element={<MyBlogs />} />
            <Route path="/user/editblog/:id" element={<ManageBlock />} />
          </Route>



          {/* 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
