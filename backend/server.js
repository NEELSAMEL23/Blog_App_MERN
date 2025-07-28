// server.js
import dotenv from "dotenv";
dotenv.config(); // 💥 FIRST LINE
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";

import authRoutes from "./routes/auth.routes.js";
import blogRoutes from "./routes/blogs.routes.js";
import commentRoutes from "./routes/comment.routes.js";

import { errorHandler, notFound } from "./middleware/error.middleware.js";


// Connect to MongoDB
connectDB();

// Initialize app
const app = express();

// Middleware
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/comments", commentRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Blog API is running...");
});

// Not Found & Error Handler (must come after routes)
app.use(notFound);
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

console.log("Loaded ENV:", {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
