// src/pages/admin/GetAllUsers.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllUsersService } from "../../Services/authService";
import Layout from "../../layouts/Layout";

export default function GetAllUsers() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const data = await getAllUsersService();
                setUsers(data);
            } catch (error) {
                setErr(error?.response?.data?.message || "Failed to load users");
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    return (
        <Layout className="p-4">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">All Users</h1>

            {loading ? (
                <p className="text-gray-600">Loading users...</p>
            ) : err ? (
                <p className="text-red-500">{err}</p>
            ) : users.length === 0 ? (
                <p className="text-gray-500">No users found.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {users.map((user) => (
                        <div
                            key={user._id}
                            onClick={() => navigate(`/admin/users/${user._id}`)}
                            className="bg-white shadow rounded-lg p-4 flex flex-col items-center text-center border hover:shadow-lg transition cursor-pointer"
                        >
                            <img
                                src={user.avatar || "/default-avatar.png"}
                                alt={user.name}
                                className="w-20 h-20 rounded-full object-cover border mb-3"
                            />
                            <h2 className="text-lg font-semibold text-gray-800">{user.name}</h2>
                            <p className="text-sm text-gray-500">{user.email}</p>
                            <span
                                className={`mt-2 px-3 py-1 text-xs rounded-full font-medium ${user.role === "admin"
                                        ? "bg-red-100 text-red-600"
                                        : "bg-blue-100 text-blue-600"
                                    }`}
                            >
                                {user.role}
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </Layout>
    );
}
