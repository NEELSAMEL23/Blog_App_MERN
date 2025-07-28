import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // ✅ Updated import path

const Header = () => {
    const { user, logout } = useAuth();

    return (
        <header className="bg-white shadow-md px-4 py-3 flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">MERN Blog</Link>
            <nav className="flex items-center gap-4">
                {user ? (
                    <>
                        <Link
                            to={user.role === "admin" ? "/admin/dashboard" : "/user/dashboard"}
                            className="text-gray-700"
                        >
                            Dashboard
                        </Link>
                        <button onClick={logout} className="text-red-600">
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="text-blue-600">
                            Login
                        </Link>
                        <Link to="/register" className="text-blue-600">
                            Register
                        </Link>
                    </>
                )}
            </nav>
        </header>
    );
};

export default Header;
