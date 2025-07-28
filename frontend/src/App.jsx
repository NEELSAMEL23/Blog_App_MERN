// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import NotFound from "./pages/NotFound";

import ProtectedRoute from "./utils/ProtectedRoute";
import RoleRoute from "./utils/RoleRoute";
import AdminPosts from "./Pages/Admin/AdminPosts.jsx";
import AdminPostDetail from "./Pages/Admin/AdminPostDetail.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Navigate to="/auth/login" />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />

          {/* Authenticated Routes */}
          <Route element={<ProtectedRoute />}>
            {/* User Routes */}
            <Route element={<RoleRoute allowedRoles={["user", "admin"]} />}>
              {/* <Route path="/user/dashboard" element={<UserDashboard />} /> */}
            </Route>

            {/* Admin Routes */}
            <Route element={<RoleRoute allowedRoles={["admin"]} />}>
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/posts" element={<AdminPosts />} />
              <Route path="/admin/posts/:id" element={<AdminPostDetail />} />
            </Route>
          </Route>

          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
