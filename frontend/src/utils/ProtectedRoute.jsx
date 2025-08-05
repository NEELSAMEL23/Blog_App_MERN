// src/utils/ProtectedRoute.jsx
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ role }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <div className="p-6">Loading...</div>;

  // Not logged in
  if (!user) {
    return <Navigate to="/auth/login" replace state={{ from: location }} />;
  }

  // Role mismatch
  if (role && user.role !== role) {
    return <Navigate to="/not-found" replace />;
  }

  return <Outlet />;
}
  