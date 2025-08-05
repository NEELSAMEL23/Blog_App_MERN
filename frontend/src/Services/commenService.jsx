import axiosInstance from "./axiosInstance";
import { API_PATHS } from "./apiPaths";


export const addCommentService = async (postId, payload) => {
    const { data } = await axiosInstance.post(API_PATHS.COMMENTS.ADD_COMMENT(postId), payload);
    return data;
};


export const getCommentsByPostService = async (postId) => {
    const { data } = await axiosInstance.get(API_PATHS.COMMENTS.GET_COMMENTS_BY_POST(postId));
    return data;
};


export const getSingleCommentService = async (id) => {
    const { data } = await axiosInstance.get(API_PATHS.COMMENTS.GET_SINGLE_COMMENT(id));
    return data;
};


export const updateCommentService = async (id, payload) => {
    const { data } = await axiosInstance.put(API_PATHS.COMMENTS.UPDATE_COMMENT(id), payload);
    return data;
};

export const deleteCommentService = async (id) => {
    const { data } = await axiosInstance.delete(API_PATHS.COMMENTS.DELETE_COMMENT(id));
    return data;
};
