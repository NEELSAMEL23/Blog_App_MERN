// src/services/apiPaths.js

export const BASEURL = "http://localhost:8000";

export const API_PATHS = {
    AUTH: {
        REGISTER: "/api/auth/register",       // POST: Register user (multipart/form-data)
        LOGIN: "/api/auth/login",             // POST: Login
        GET_PROFILE: "/api/auth/profile",     // GET: Get logged-in user info
    },

    POSTS: {
        CREATE: "/api/posts",                 // POST: Create post
        GET_ALL: "/api/posts",                // GET: All posts (with ?search & ?page)
        GET_BY_ID: (id) => `/api/posts/${id}`, // GET: Single post
        UPDATE: (id) => `/api/posts/${id}`,    // PUT: Update post
        DELETE: (id) => `/api/posts/${id}`,    // DELETE: Delete post
        TOGGLE_LIKE: (id) => `/api/posts/${id}/like`, // PUT: Like/unlike
    },

    COMMENTS: {
        ADD: (postId) => `/api/comments/${postId}`,       // POST: Add comment to post
        GET_BY_POST: (postId) => `/api/comments/${postId}`, // GET: Comments for post
        DELETE: (commentId) => `/api/comments/${commentId}`, // DELETE: Delete comment
    },
};
