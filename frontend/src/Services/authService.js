import axiosInstance from "./axiosInstance";
import { API_PATHS } from "./apiPaths";

// -------------------- AUTHENTICATED USER SERVICES --------------------

// Register user (with optional avatar)
export const registerService = async (formData) => {
  const { data } = await axiosInstance.post(API_PATHS.AUTH.REGISTER, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
};

// Login user
export const loginService = async (payload) => {
  const { data } = await axiosInstance.post(API_PATHS.AUTH.LOGIN, payload);
  return data;
};

// Get current user profile
export const getProfileService = async () => {
  const { data } = await axiosInstance.get(API_PATHS.AUTH.GET_PROFILE);
  return data;
};

// Update current user profile (with optional avatar)
export const updateProfileService = async (formData) => {
  const { data } = await axiosInstance.put(API_PATHS.AUTH.UPDATE_PROFILE, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
};

// ------------------------ ADMIN SERVICES ------------------------

// Get all users
export const getAllUsersService = async () => {
  const { data } = await axiosInstance.get(API_PATHS.ADMIN.GET_ALL_USERS);
  return data;
};


// Update any user by ID (admin)
export const updateUserByIdService = async (id, formData) => {
  const { data } = await axiosInstance.put(API_PATHS.ADMIN.UPDATE_USER_BY_ID(id), formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
};

// Delete user by ID (admin)
export const deleteUserByIdService = async (id) => {
  const { data } = await axiosInstance.delete(API_PATHS.ADMIN.DELETE_USER_BY_ID(id));
  return data;
};
