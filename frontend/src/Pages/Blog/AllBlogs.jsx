import { useEffect, useState } from "react";
import { getPublicBlogsService, toggleLikeBlogService } from "../../Services/blogService";
import { addCommentService, getCommentsByPostService, deleteCommentService } from "../../Services/commenService";
import Layout from "../../layouts/Layout";
import { useAuth } from "../../context/AuthContext";

const AllBlogs = () => {
    const { user } = useAuth();
    const [blogs, setBlogs] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const [activeCommentBox, setActiveCommentBox] = useState(null);
    const [commentText, setCommentText] = useState("");
    const [comments, setComments] = useState({});

    // ✅ Fetch all blogs
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const data = await getPublicBlogsService(); // Returns commentCount now
                setBlogs(data);
            } catch (err) {
                setError(err?.response?.data?.message || "Failed to fetch blogs.");
            } finally {
                setLoading(false);
            }
        };
        fetchBlogs();
    }, []);

    // ✅ Fetch comments for a blog
    const fetchComments = async (blogId) => {
        try {
            const data = await getCommentsByPostService(blogId);
            setComments((prev) => ({ ...prev, [blogId]: data }));
        } catch (err) {
            console.error("Failed to fetch comments:", err.message);
        }
    };

    // ✅ Toggle like handler
    const handleToggleLike = async (blogId) => {
        try {
            const response = await toggleLikeBlogService(blogId);
            setBlogs((prevBlogs) =>
                prevBlogs.map((blog) =>
                    blog._id === blogId
                        ? { ...blog, likes: Array(response.totalLikes).fill("like") }
                        : blog
                )
            );
        } catch (err) {
            console.error("Failed to toggle like:", err.message);
        }
    };

    // ✅ Show/hide comment box
    const handleShowCommentBox = (blogId) => {
        if (activeCommentBox === blogId) {
            setActiveCommentBox(null);
        } else {
            setActiveCommentBox(blogId);
            fetchComments(blogId);
        }
    };

    // ✅ Add new comment
    const handleAddComment = async (blogId) => {
        if (!commentText.trim()) return;
        try {
            await addCommentService(blogId, { content: commentText });
            setCommentText("");

            // Refresh comments
            fetchComments(blogId);

            // Update count immediately
            setBlogs((prev) =>
                prev.map((b) =>
                    b._id === blogId
                        ? { ...b, commentCount: (b.commentCount || 0) + 1 }
                        : b
                )
            );
        } catch (err) {
            console.error("Failed to add comment:", err.message);
        }
    };

    // ✅ Delete comment
    const handleDeleteComment = async (blogId, commentId) => {
        try {
            await deleteCommentService(commentId);

            // Refresh comments
            fetchComments(blogId);

            // Update count immediately
            setBlogs((prev) =>
                prev.map((b) =>
                    b._id === blogId
                        ? { ...b, commentCount: Math.max((b.commentCount || 1) - 1, 0) }
                        : b
                )
            );
        } catch (err) {
            console.error("Failed to delete comment:", err.message);
        }
    };

    return (
        <Layout>
            <div className="max-w-3xl mx-auto p-4">
                <h2 className="text-4xl text-center font-bold text-gray-800 mb-6">
                    All Public Blogs
                </h2>

                {loading && <p>Loading...</p>}
                {error && <p className="text-red-500">{error}</p>}
                {!loading && blogs.length === 0 && <p>No blogs found.</p>}

                <div className="space-y-6">
                    {blogs.map((blog) => (
                        <div
                            key={blog._id}
                            className="bg-white rounded-lg shadow-md border border-gray-200"
                        >
                            {/* Author Info */}
                            <div className="flex items-center gap-3 p-4">
                                <img
                                    src={blog.author?.avatar}
                                    alt="author avatar"
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <div>
                                    <p className="font-semibold text-sm">
                                        {blog.author?.name || "Unknown Author"}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        {new Date(blog.createdAt).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>

                            {/* Blog Image */}
                            {blog.image && (
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-64 object-cover"
                                />
                            )}

                            {/* Blog Content */}
                            <div className="p-4 space-y-2">
                                <h3 className="text-lg font-semibold text-gray-800">
                                    {blog.title}
                                </h3>
                                <p className="text-gray-700 text-sm">{blog.content}</p>
                            </div>

                            {/* Blog Footer */}
                            <div className="px-4 py-2 border-t flex items-center justify-between text-sm text-gray-600">
                                <button
                                    onClick={() => handleToggleLike(blog._id)}
                                    className="cursor-pointer flex items-center gap-1 text-red-500 hover:text-red-700"
                                >
                                    ❤️ {blog.likes.length}
                                </button>
                                <button
                                    onClick={() => handleShowCommentBox(blog._id)}
                                    className="cursor-pointer flex items-center gap-1 text-blue-500 hover:text-blue-700"
                                >
                                    💬 {comments[blog._id]?.length ?? blog.commentCount ?? 0} Comments
                                </button>
                                <span className="capitalize">📢 {blog.status}</span>
                            </div>

                            {/* ✅ Comments Section */}
                            {activeCommentBox === blog._id && (
                                <div className="p-4 border-t bg-gray-50">
                                    {/* Show comments */}
                                    <div className="mb-3 max-h-40 overflow-y-auto">
                                        {comments[blog._id]?.length > 0 ? (
                                            comments[blog._id].map((cmt) => (
                                                <div
                                                    key={cmt._id}
                                                    className="flex items-start justify-between mb-2 bg-white p-2 rounded shadow"
                                                >
                                                    <div className="flex gap-2">
                                                        <img
                                                            src={cmt.user?.avatar}
                                                            alt="user"
                                                            className="w-8 h-8 rounded-full object-cover"
                                                        />
                                                        <div>
                                                            <p className="text-sm font-semibold">
                                                                {cmt.user?.name}
                                                            </p>
                                                            <p className="text-xs text-gray-700">
                                                                {cmt.content}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    {(user?.role === "admin" || user?._id === cmt.user?._id) && (
                                                        <button
                                                            onClick={() => handleDeleteComment(blog._id, cmt._id)}
                                                            className="text-red-500 hover:text-red-700 text-xs"
                                                        >
                                                            🗑️ Delete
                                                        </button>
                                                    )}
                                                </div>
                                            ))
                                        ) : (
                                            <p className="text-gray-500 text-sm">No comments yet.</p>
                                        )}
                                    </div>

                                    {/* Comment input */}
                                    <div className="flex">
                                        <input
                                            type="text"
                                            placeholder="Write a comment..."
                                            value={commentText}
                                            onChange={(e) => setCommentText(e.target.value)}
                                            className="border p-2 rounded w-3/4"
                                        />
                                        <button
                                            onClick={() => handleAddComment(blog._id)}
                                            className="bg-blue-500 text-white px-4 py-2 ml-2 rounded hover:bg-blue-600"
                                        >
                                            Comment
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default AllBlogs;
