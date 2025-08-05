import { useState } from "react";
import Layout from "../../layouts/Layout";
import { createBlogService } from "../../Services/blogService";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; // ✅ import

const CreateBlog = () => {
    const navigate = useNavigate();
    const { user } = useAuth(); // ✅ get user from context

    const [form, setForm] = useState({
        title: "",
        content: "",
        tags: "",
        status: "public",
        isFeatured: false,
        image: null,
    });

    const [preview, setPreview] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setForm((prev) => ({ ...prev, image: file }));
        if (file) setPreview(URL.createObjectURL(file));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        const formData = new FormData();
        formData.append("title", form.title);
        formData.append("content", form.content);
        formData.append("tags", form.tags); // comma-separated
        formData.append("status", form.status);
        formData.append("isFeatured", form.isFeatured);
        if (form.image) formData.append("image", form.image);

        try {
            const data = await createBlogService(formData);
            setSuccess("Blog created successfully!");

            // ✅ Navigate based on role
            if (user?.role === "admin") {
                navigate("/");
            } else {
                navigate("/");
            }

        } catch (err) {
            setError(err?.response?.data?.message || "Failed to create blog.");
        }
    };

    return (
        <Layout>
            <div className="max-w-2xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-4 text-gray-700">Create Blog</h2>

                {error && <p className="text-red-500 mb-3">{error}</p>}
                {success && <p className="text-green-600 mb-3">{success}</p>}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block mb-1 font-medium">Title</label>
                        <input
                            name="title"
                            value={form.title}
                            onChange={handleChange}
                            required
                            className="w-full border px-3 py-2 rounded"
                            placeholder="Enter blog title"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Content</label>
                        <textarea
                            name="content"
                            value={form.content}
                            onChange={handleChange}
                            required
                            rows={6}
                            className="w-full border px-3 py-2 rounded resize-none"
                            placeholder="Write your blog content..."
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Tags (comma separated)</label>
                        <input
                            name="tags"
                            value={form.tags}
                            onChange={handleChange}
                            className="w-full border px-3 py-2 rounded"
                            placeholder="e.g. javascript, react"
                        />
                    </div>

                    <div className="flex items-center justify-between gap-4">
                        <div className="w-full">
                            <label className="block mb-1 font-medium">Status</label>
                            <select
                                name="status"
                                value={form.status}
                                onChange={handleChange}
                                className="w-full border px-3 py-2 rounded"
                            >
                                <option value="public">Public</option>
                                <option value="private">Private</option>
                                <option value="draft">Draft</option>
                            </select>
                        </div>

                        <div className="mt-6">
                            <label className="inline-flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    name="isFeatured"
                                    checked={form.isFeatured}
                                    onChange={handleChange}
                                />
                                <span className="text-sm">Mark as Featured</span>
                            </label>
                        </div>
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Image</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="w-full"
                        />
                        {preview && (
                            <img
                                src={preview}
                                alt="Preview"
                                className="mt-2 w-full h-40 object-cover rounded border"
                            />
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                    >
                        Create Blog
                    </button>
                </form>
            </div>
        </Layout>
    );
};

export default CreateBlog;
