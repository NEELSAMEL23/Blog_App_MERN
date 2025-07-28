// src/services/postService.js
import axiosInstance from "../utils/axiosInstance";
import { API_PATHS } from "../utils/apiPaths";

export const createPostService = async (payload) => {
    const { data } = await axiosInstance.post(API_PATHS.POSTS.CREATE, payload);
    return data;
};

export const getAllPostsService = async (params) => {
    const { data } = await axiosInstance.get(API_PATHS.POSTS.GET_ALL, { params });
    return data;
};

export const getPostByIdService = async (id) => {
    const { data } = await axiosInstance.get(API_PATHS.POSTS.GET_BY_ID(id));
    return data;
};

export const updatePostService = async (id, payload) => {
    const { data } = await axiosInstance.put(API_PATHS.POSTS.UPDATE(id), payload);
    return data;
};

export const deletePostService = async (id) => {
    const { data } = await axiosInstance.delete(API_PATHS.POSTS.DELETE(id));
    return data;
};

export const toggleLikePostService = async (id) => {
    const { data } = await axiosInstance.put(API_PATHS.POSTS.TOGGLE_LIKE(id));
    return data;
};
