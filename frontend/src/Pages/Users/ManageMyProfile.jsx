// src/pages/User/ManageProfile.jsx
import { useEffect, useState } from "react";
import { updateProfileService } from "../../Services/authService";
import { useAuth } from "../../context/AuthContext";

import Layout from "../../layouts/Layout";

export default function ManageProfile() {
    const { user, refreshProfile } = useAuth();

    const [form, setForm] = useState({
        name: "",
        email: "",
        avatar: null,
    });
    const [preview, setPreview] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    useEffect(() => {
        if (user) {
            setForm({
                name: user.name || "",
                email: user.email || "",
                avatar: null,
            });
            setPreview(user.avatar || "/default-avatar.png");
        }
    }, [user]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setForm({ ...form, avatar: file });
        if (file) {
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        const formData = new FormData();
        formData.append("name", form.name);
        formData.append("email", form.email);
        if (form.avatar) formData.append("avatar", form.avatar);

        try {
            await updateProfileService(formData);
            await refreshProfile(); // update context and sidebar
            setSuccess("Profile updated successfully.");
        } catch (err) {
            setError(err?.response?.data?.message || "Update failed.");
        }
    };

    return (
        <Layout>
            <div className="flex justify-center items-center min-h-[80vh]">
                <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
                    <h2 className="text-xl font-bold mb-6 text-center text-gray-700">Manage Profile</h2>

                    {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
                    {success && <p className="text-green-600 text-sm mb-4 text-center">{success}</p>}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Avatar Preview + Upload */}
                        <div className="flex flex-col items-center space-y-2">
                            <img
                                src={preview || "/default-avatar.png"}
                                alt="avatar preview"
                                className="w-20 h-20 rounded-full object-cover border-2"
                            />

                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="text-sm text-gray-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">Name</label>
                            <input
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
                            <input
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition duration-200"
                        >
                            Update
                        </button>
                    </form>
                </div>
            </div>
        </Layout>
    );
}
