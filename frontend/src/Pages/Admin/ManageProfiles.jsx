import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAllUsersService, updateUserByIdService } from "../../Services/authService";
import Layout from "../../layouts/Layout";

export default function UpdateUser() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "user",
    avatar: null,
  });
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // ✅ Fetch user data from existing service
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const allUsers = await getAllUsersService();
        const user = allUsers.find((u) => u._id === id);
        if (!user) {
          setError("User not found");
          return;
        }
        setFormData({
          name: user.name || "",
          email: user.email || "",
          role: user.role || "user",
          avatar: null,
        });
        setPreview(user.avatar || "");
      } catch (err) {
        setError("Failed to load user details");
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [id]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, avatar: files[0] });
      setPreview(URL.createObjectURL(files[0]));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Save updated user
  const handleSave = async () => {
    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("role", formData.role);
    if (formData.avatar) data.append("avatar", formData.avatar);

    try {
      await updateUserByIdService(id, data);
      setSuccess("User updated successfully ✅");
      setTimeout(() => navigate("/admin/users"), 1000);
    } catch (err) {
      setError(err?.response?.data?.message || "Failed to update user ❌");
    }
  };

  return (
    <Layout className="p-4">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Update User</h1>

      {loading ? (
        <p className="text-gray-600">Loading user details...</p>
      ) : (
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 border">
          {error && <div className="bg-red-100 text-red-600 p-2 mb-3 rounded">{error}</div>}
          {success && <div className="bg-green-100 text-green-600 p-2 mb-3 rounded">{success}</div>}

          {preview && (
            <div className="flex justify-center mb-4">
              <img
                src={preview}
                alt="Preview"
                className="w-24 h-24 rounded-full object-cover border"
              />
            </div>
          )}

          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 mb-3 w-full rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 mb-3 w-full rounded"
          />
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="border p-2 mb-3 w-full rounded"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <input
            type="file"
            name="avatar"
            onChange={handleChange}
            className="border p-2 mb-4 w-full rounded"
          />

          <div className="flex gap-3">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded"
              onClick={handleSave}
            >
              Save Changes
            </button>
            <button
              className="bg-gray-400 text-white px-4 py-2 rounded"
              onClick={() => navigate("/admin/users")}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
}
