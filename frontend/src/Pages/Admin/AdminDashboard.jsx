// src/pages/Admin/AdminDashboard.jsx
import { useEffect, useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import { getAllPostsService } from "../../Services/postService";



const AdminDashboard = () => {
    const [stats, setStats] = useState({
        posts: 0,
        users: 0,
        comments: 0,
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const [postsRes, usersRes] = await Promise.all([
                    getAllPostsService(),
            
                ]);

                setStats({
                    posts: postsRes.posts.length,
                    users: usersRes.users.length,
                    comments: postsRes.posts.reduce((acc, post) => acc + post.comments.length, 0),
                });
            } catch (err) {
                console.error("Failed to fetch stats", err);
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    return (
        <AdminLayout>
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-6">Admin Dashboard 👨‍💼</h1>

                {loading ? (
                    <p className="text-gray-600">Loading statistics...</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div className="bg-blue-100 border border-blue-300 rounded-md p-4 shadow-sm">
                            <h2 className="text-xl font-semibold text-blue-700">Total Posts</h2>
                            <p className="text-3xl font-bold mt-2 text-blue-900">{stats.posts}</p>
                        </div>

                        <div className="bg-green-100 border border-green-300 rounded-md p-4 shadow-sm">
                            <h2 className="text-xl font-semibold text-green-700">Registered Users</h2>
                            <p className="text-3xl font-bold mt-2 text-green-900">{stats.users}</p>
                        </div>

                        <div className="bg-yellow-100 border border-yellow-300 rounded-md p-4 shadow-sm">
                            <h2 className="text-xl font-semibold text-yellow-700">Total Comments</h2>
                            <p className="text-3xl font-bold mt-2 text-yellow-900">{stats.comments}</p>
                        </div>
                    </div>
                )}
            </div>
        </AdminLayout>
    );
};

export default AdminDashboard;
