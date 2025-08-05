import axiosInstance from "./axiosInstance"; // assuming you have this setup
import { API_PATHS } from "./apiPaths";

export const getPublicBlogsService = async () => {
    const { data } = await axiosInstance.get(API_PATHS.BLOG.GET_PUBLIC_BLOGS);
    return data;
};

export const getBlogByIdService = async (id) => {
    const { data } = await axiosInstance.get(API_PATHS.BLOG.GET_BLOG_BY_ID(id));
    return data;
};

export const createBlogService = async (formData) => {
    const { data } = await axiosInstance.post(API_PATHS.BLOG.CREATE_BLOG, formData, {
        headers: { "Content-Type": "multipart/form-data" },
    });
    return data;
};

export const updateBlogService = async (id, formData) => {
    const { data } = await axiosInstance.put(API_PATHS.BLOG.UPDATE_BLOG(id), formData, {
        headers: { "Content-Type": "multipart/form-data" },
    });
    return data;
};

export const deleteBlogService = async (id) => {
    const { data } = await axiosInstance.delete(API_PATHS.BLOG.DELETE_BLOG(id));
    return data;
};

export const getMyBlogsService = async () => {
    const { data } = await axiosInstance.get(API_PATHS.BLOG.GET_MY_BLOGS);
    return data;
};

export const getAllBlogsAdminService = async () => {
    const { data } = await axiosInstance.get(API_PATHS.BLOG.GET_ALL_BLOGS_ADMIN);
    return data;
};

export const getBlogsByFilterService = async (params) => {
    // params should be an object like { tag: "xyz", category: "abc" }
    const { data } = await axiosInstance.get(API_PATHS.BLOG.GET_BLOGS_BY_FILTER, { params });
    return data;
};

export const toggleLikeBlogService = async (id) => {
    const { data } = await axiosInstance.patch(API_PATHS.BLOG.TOGGLE_LIKE_BLOG(id));
    return data;
};
