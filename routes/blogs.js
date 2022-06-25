import express from "express";
import blogController from "../controller/BlogsController.js";

const router = express.Router();

router.get("/search", blogController.searchBlog);
router.get("/:slug", blogController.getBlogDetail);
router.post("/update", blogController.updateBlog);
router.get("/", blogController.getBlogs);
router.post("/", blogController.createBlog);
router.delete("/:id", blogController.deleteBlog);

export default router;
