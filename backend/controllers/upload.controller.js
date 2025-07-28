import cloudinary from "../config/cloudinary.js";
import fs from "fs";

export const uploadImage = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: "No image provided" });

    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "mern-blog",
    });

    // Delete local file after upload
    fs.unlinkSync(req.file.path);

    res.status(200).json({
      message: "Image uploaded successfully",
      url: result.secure_url,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Image upload failed", error: err.message });
  }
}
