// RoleRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function RoleRoute({ allowedRoles = [] }) {
    const { user, loading } = useAuth();

    if (loading) return <div className="p-6">Loading...</div>;
    if (!user) return <Navigate to="/auth/login" replace />;

    if (!allowedRoles.includes(user.role)) {
        return <Navigate to={user.role === "admin" ? "/admin/dashboard" : "/user/dashboard"} replace />;
    }

    return <Outlet />;
}
