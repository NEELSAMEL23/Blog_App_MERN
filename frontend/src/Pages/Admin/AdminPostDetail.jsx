// src/pages/Admin/AdminPostDetail.jsx
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AdminLayout from "../../layouts/AdminLayout";
import Loader from "../../components/Loader";
import { getPostByIdService, deletePostService } from "../../Services/PostService";
import toast from "react-hot-toast";

const AdminPostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await getPostByIdService(id);
        setPost(data);
      } catch (err) {
        console.error("Error fetching post:", err);
        toast.error("Failed to fetch post");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  const handleDelete = async () => {
    const confirm = window.confirm("Are you sure you want to delete this post?");
    if (!confirm) return;

    try {
      await deletePostService(id);
      toast.success("Post deleted successfully!");
      navigate("/admin/posts");
    } catch (err) {
      console.error("Error deleting post:", err);
      toast.error("Failed to delete post");
    }
  };

  const handleEdit = () => {
    navigate(`/admin/posts/edit/${id}`);
  };

  return (
    <AdminLayout>
      <div className="p-6">
        {loading ? (
          <Loader />
        ) : post ? (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold">{post.title}</h1>
              <div className="space-x-2">
                <button
                  onClick={handleEdit}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={handleDelete}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>
              </div>
            </div>

            <p className="text-gray-600 mb-2">
              <strong>Author:</strong> {post.author?.name || "Unknown"}
            </p>
            <p className="text-gray-500 mb-4">{new Date(post.createdAt).toLocaleString()}</p>

            {post.image && (
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-auto mb-6 rounded shadow"
              />
            )}

            <div className="text-gray-800 leading-relaxed whitespace-pre-line">
              {post.content}
            </div>

            {/* Future: Comments section (optional) */}
            <div className="mt-10">
              <h2 className="text-xl font-semibold mb-4">Comments</h2>
              {post.comments?.length ? (
                post.comments.map((comment, i) => (
                  <div key={i} className="border p-3 mb-2 rounded">
                    <p className="font-semibold">{comment.user.name}</p>
                    <p className="text-gray-600">{comment.content}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No comments yet.</p>
              )}
            </div>
          </div>
        ) : (
          <p className="text-red-500">Post not found.</p>
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminPostDetail;
