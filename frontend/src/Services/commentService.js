// src/services/commentService.js
import axiosInstance from "../utils/axiosInstance";
import { API_PATHS } from "../utils/apiPaths";

export const addCommentService = async (postId, payload) => {
    const { data } = await axiosInstance.post(API_PATHS.COMMENTS.ADD(postId), payload);
    return data;
};

export const getCommentsByPostService = async (postId) => {
    const { data } = await axiosInstance.get(API_PATHS.COMMENTS.GET_BY_POST(postId));
    return data;
};

export const deleteCommentService = async (commentId) => {
    const { data } = await axiosInstance.delete(API_PATHS.COMMENTS.DELETE(commentId));
    return data;
};
