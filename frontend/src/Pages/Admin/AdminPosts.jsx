// src/pages/Admin/AdminPosts.jsx

import { useEffect, useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import PostCard from "../../components/PostCard";
import Loader from "../../components/Loader";
import { getAllPostsService } from "../../Services/PostService";

const AdminPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getAllPostsService();
        setPosts(data?.posts || []); // assuming response is { posts: [...] }
      } catch (err) {
        console.error("Failed to load posts:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <AdminLayout>
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-6">All Blog Posts</h2>

        {loading ? (
          <Loader />
        ) : posts.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post._id} post={post} adminView />
            ))}
          </div>
        ) : (
          <div className="text-center py-10 text-gray-600">
            No posts found.
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminPosts;
