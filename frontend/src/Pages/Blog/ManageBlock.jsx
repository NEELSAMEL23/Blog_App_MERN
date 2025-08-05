import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../../layouts/Layout";
import {
    getBlogByIdService,
    updateBlogService,
    deleteBlogService,
} from "../../Services/blogService";

const ManageBlog = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: "",
        content: "",
        tags: "",
        image: null,
    });
    const [preview, setPreview] = useState("");
    const [loading, setLoading] = useState(true);
    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    // ✅ Fetch blog details on mount
    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const blog = await getBlogByIdService(id);
                setFormData({
                    title: blog.title || "",
                    content: blog.content || "",
                    tags: blog.tags?.join(", ") || "",
                    image: null,
                });
                setPreview(blog.image || "");
            } catch (err) {
                console.error("Blog fetch error:", err.response?.data || err.message);
                if (err.response?.status === 403) {
                    setError("You are not authorized to edit this blog.");
                    setTimeout(() => navigate("/"), 2000);
                } else if (err.response?.status === 404) {
                    setError("Blog not found.");
                    setTimeout(() => navigate("/"), 2000);
                } else {
                    setError("Failed to load blog details. Please try again.");
                }
            } finally {
                setLoading(false);
            }
        };
        fetchBlog();
    }, [id, navigate]);

    // ✅ Cleanup preview URL on unmount
    useEffect(() => {
        return () => {
            if (preview) URL.revokeObjectURL(preview);
        };
    }, [preview]);

    // ✅ Handle input change
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (files) {
            const file = files[0];
            setFormData({ ...formData, image: file });
            setPreview(URL.createObjectURL(file));
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    // ✅ Update blog
    const handleUpdate = async () => {
        setProcessing(true);
        const data = new FormData();
        data.append("title", formData.title);
        data.append("content", formData.content);

        // Convert tags to array if backend expects array
        const tagArray = formData.tags
            .split(",")
            .map((tag) => tag.trim())
            .filter((tag) => tag);
        data.append("tags", JSON.stringify(tagArray));

        if (formData.image) data.append("image", formData.image);

        try {
            await updateBlogService(id, data);
            setSuccess("✅ Blog updated successfully");
            setError("");
            setTimeout(() => navigate("/"), 1500);
        } catch (err) {
            console.error("Update blog error:", err.response?.data || err.message);
            setSuccess("");
            setError(err?.response?.data?.message || "Failed to update blog ❌");
        } finally {
            setProcessing(false);
        }
    };

    // ✅ Delete blog
    const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delete this blog? This action cannot be undone.")) {
            setProcessing(true);
            try {
                await deleteBlogService(id);
                alert("Blog deleted successfully ✅");
                navigate("/");
            } catch (err) {
                console.error("Delete blog error:", err.response?.data || err.message);
                setError(err?.response?.data?.message || "Failed to delete blog ❌");
            } finally {
                setProcessing(false);
            }
        }
    };

    return (
        <Layout>
            <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Edit Blog</h2>

                {loading ? (
                    <p className="text-gray-500">Loading blog details...</p>
                ) : (
                    <>
                        {error && (
                            <div className="bg-red-100 text-red-600 p-2 mb-3 rounded">
                                {error}
                            </div>
                        )}
                        {success && (
                            <div className="bg-green-100 text-green-600 p-2 mb-3 rounded">
                                {success}
                            </div>
                        )}

                        {preview && (
                            <div className="flex justify-center mb-4">
                                <img
                                    src={preview}
                                    alt="Preview"
                                    className="w-40 h-40 object-cover rounded-lg border"
                                />
                            </div>
                        )}

                        <input
                            type="text"
                            name="title"
                            placeholder="Blog Title"
                            value={formData.title}
                            onChange={handleChange}
                            className="border p-2 mb-3 w-full rounded"
                        />
                        <textarea
                            name="content"
                            placeholder="Blog Content"
                            value={formData.content}
                            onChange={handleChange}
                            rows="5"
                            className="border p-2 mb-3 w-full rounded"
                        />
                        <input
                            type="text"
                            name="tags"
                            placeholder="Tags (comma separated)"
                            value={formData.tags}
                            onChange={handleChange}
                            className="border p-2 mb-3 w-full rounded"
                        />
                        <input
                            type="file"
                            name="image"
                            onChange={handleChange}
                            className="border p-2 mb-4 w-full rounded"
                        />

                        <div className="flex gap-3">
                            <button
                                disabled={processing}
                                onClick={handleUpdate}
                                className={`bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 ${processing && "opacity-50 cursor-not-allowed"
                                    }`}
                            >
                                {processing ? "Updating..." : "Update Blog"}
                            </button>
                            <button
                                disabled={processing}
                                onClick={handleDelete}
                                className={`bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 ${processing && "opacity-50 cursor-not-allowed"
                                    }`}
                            >
                                🗑️ Delete Blog
                            </button>
                            <button
                                onClick={() => navigate("/admin/blogs")}
                                className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
                            >
                                Cancel
                            </button>
                        </div>
                    </>
                )}
            </div>
        </Layout>
    );
};

export default ManageBlog;
