import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 min-h-screen bg-gray-100 p-4 shadow-md">
      <h2 className="text-xl font-bold mb-6 text-blue-600">Admin Panel</h2>
      <nav className="flex flex-col gap-3">
        <Link to="/admin/dashboard" className="text-gray-700 hover:text-blue-600">Dashboard</Link>
        <Link to="/admin/posts" className="text-gray-700 hover:text-blue-600">Manage Posts</Link>
        <Link to="/admin/users" className="text-gray-700 hover:text-blue-600">Manage Users</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
