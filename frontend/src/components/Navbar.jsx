import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar({ onToggle }) {
  const { user, logout } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-blue-600 text-white h-14 px-4 py-3 shadow flex items-center justify-between">
      {/* Left side: Toggle + Title (only visible when logged in) */}
      <div className="flex items-center space-x-4">
        {user && (
          <>
            <button onClick={onToggle} className="text-white focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <h1 className="text-lg font-semibold">Dashboard</h1>
          </>
        )}
      </div>

      {/* Right side */}
      <div className="flex items-center space-x-4">
        {user ? (


          <>

            <Link
              to="/"
              className="bg-green-500 hover:bg-cyan-600 px-3 py-1 text-sm rounded"
            >
              Home
            </Link>
            <button
              onClick={logout}
              className="bg-red-500 hover:bg-red-600 px-3 py-1 text-sm rounded cursor-pointer"
            >
              Logout
            </button>
            <span className="hidden sm:inline text-sm font-medium">{user.name}</span>
          </>
        ) : (
          <>
            <Link
              to="/auth/login"
              className="bg-green-500 hover:bg-green-600 px-3 py-1 text-sm rounded"
            >
              Login
            </Link>
            <Link
              to="/auth/register"
              className="bg-gray-100 text-blue-600 hover:bg-gray-200 px-3 py-1 text-sm rounded"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
