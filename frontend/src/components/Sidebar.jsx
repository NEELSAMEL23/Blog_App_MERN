import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FilePlus, Users, FileText, Newspaper  } from "lucide-react";

export default function Sidebar({ isOpen }) {
  const { user } = useAuth();

  if (!user) return null;

  const isAdmin = user?.role === "admin";

  const avatarSrc = user?.avatar
    ? user.avatar.startsWith("http")
      ? user.avatar
      : `${import.meta.env.VITE_API_BASE_URL}/${user.avatar}`
    : "/default-avatar.png";

  return (
    <aside
      className={`
        bg-gray-800 text-white fixed top-13 left-0 h-[calc(100vh-3.1rem)] z-40
        transition-all duration-300 ease-in-out transform
        ${isOpen ? "w-64" : "w-16"}
        animate-fadeIn
      `}
    >
      {/* User Info */}
      <div className="p-4 border-b border-gray-700 flex items-center gap-3">
        <img
          src={avatarSrc}
          alt="Avatar"
          className="w-10 h-10 rounded-full object-cover"
        />
        {isOpen && (
          <div className="text-sm">
            <p className="font-semibold">{user?.name}</p>
            <p className="text-gray-300">{user?.email}</p>
          </div>
        )}
      </div>

      {/* Menu Items */}
      <ul className="p-4 space-y-4 text-sm">
        {isAdmin ? (
          <>
            <SidebarItem to="/admin/createBlog" icon={<FilePlus />} label="Create Blog" isOpen={isOpen} />
            <SidebarItem to="/" icon={<Newspaper  />} label="All Posts" isOpen={isOpen} />
            <SidebarItem to="/admin/users" icon={<Users />} label="Manage Users" isOpen={isOpen} />
            <SidebarItem to="/admin/myBlogs" icon={<FileText />} label="My Blogs" isOpen={isOpen} />
            <SidebarItem to="/admin/allBlogs" icon={<FileText />} label="All Blogs" isOpen={isOpen} />
          </>
        ) : (
          <>
            <SidebarItem to="/user/createBlog" icon={<FilePlus />} label="Create Blog" isOpen={isOpen} />
            <SidebarItem to="/" icon={<Newspaper  />} label="All Posts" isOpen={isOpen} />
            <SidebarItem to="/user/profile" icon={<Users />} label="My Profile" isOpen={isOpen} />
            <SidebarItem to="/user/myBlogs" icon={<FileText />} label="My Blogs" isOpen={isOpen} />
          </>
        )}
      </ul>
    </aside>
  );
}

function SidebarItem({ to, icon, label, isOpen }) {
  return (
    <li>
      <Link to={to} className="flex items-center gap-3 hover:text-blue-300 transition">
        <span className="text-lg">{icon}</span>
        {isOpen && <span>{label}</span>}
      </Link>
    </li>
  );
}
