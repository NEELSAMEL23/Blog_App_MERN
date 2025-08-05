import { useEffect, useState } from "react";
import { getAllBlogsAdminService } from "../../Services/blogService";
import Layout from "../../layouts/Layout";
import { useNavigate } from "react-router-dom";

const GetAllBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAllBlogs = async () => {
            try {
                const data = await getAllBlogsAdminService();
                setBlogs(data);
            } catch (err) {
                setError(err?.response?.data?.message || "Failed to fetch blogs.");
            } finally {
                setLoading(false);
            }
        };

        fetchAllBlogs();
    }, []);

    // ✅ Handle Edit Button Click
    const handleEdit = (blogId) => {
        navigate(`/admin/editblog/${blogId}`);
    };

    return (
        <Layout>
            <div className="max-w-6xl mx-auto p-4">
                <h2 className="text-3xl text-center font-bold text-gray-800 mb-6">
                    All Blogs
                </h2>

                {loading && <p>Loading...</p>}
                {error && <p className="text-red-500">{error}</p>}
                {!loading && blogs.length === 0 && <p>No blogs found.</p>}

                {/* ✅ Grid of Blog Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {blogs.map((blog) => (
                        <div
                            key={blog._id}
                            className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                        >
                            {blog.image && (
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-48 object-cover"
                                />
                            )}
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                                    {blog.title}
                                </h3>
                                <p className="text-sm text-gray-500 mb-3">
                                    By {blog.author?.name || "Unknown Author"}
                                </p>

                                {/* ✅ Edit Button */}
                                <button
                                    onClick={() => handleEdit(blog._id)}
                                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm"
                                >
                                    ✏️ Edit Blog
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default GetAllBlogs;
