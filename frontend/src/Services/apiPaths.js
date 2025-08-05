export const BASEURL = "http://localhost:8000";

export const API_PATHS = {
    AUTH: {
        REGISTER: "/api/auth/register",
        LOGIN: "/api/auth/login",
        GET_PROFILE: "/api/auth/profile",        // GET current user
        UPDATE_PROFILE: "/api/auth/profile",     // PUT to update current user
    },

    ADMIN: {
        GET_ALL_USERS: "/api/auth/users",                    // GET all users
        UPDATE_USER_BY_ID: (id) => `/api/auth/users/${id}`,  // PUT with user ID
        DELETE_USER_BY_ID: (id) => `/api/auth/users/${id}`,  // DELETE with user ID
    },

    BLOG: {
        GET_PUBLIC_BLOGS: "/api/blogs",
        GET_BLOG_FILTER: "/api/blogs/filter",
        GET_MY_BLOGS: "/api/blogs/user/me",
        CREATE_BLOG: "/api/blogs",
        UPDATE_BLOG: (id) => `/api/blogs/${id}`,
        DELETE_BLOG: (id) => `/api/blogs/${id}`,
        TOGGLE_LIKE_BLOG: (id) => `/api/blogs/${id}/like`,
        GET_ALL_BLOGS_ADMIN: "/api/blogs/admin/all",
        GET_BLOG_BY_ID: (id) => `/api/blogs/${id}`,
    },

    COMMENTS: {
        ADD_COMMENT: (postId) => `/api/comments/${postId}`,   // POST → Add comment to blog
        GET_COMMENTS_BY_POST: (postId) => `/api/comments/${postId}`, // GET → Get all comments for a blog
        GET_SINGLE_COMMENT: (id) => `/api/comments/single/${id}`,    // GET → Get a single comment
        UPDATE_COMMENT: (id) => `/api/comments/${id}`,        // PUT → Update comment
        DELETE_COMMENT: (id) => `/api/comments/${id}`,        // DELETE → Delete comment
    }
};
