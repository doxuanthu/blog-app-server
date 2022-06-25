import BlogModel from "../models/blogPost.js";

class BlogsController {
  //   [GET], path: /blogs
  async getBlogs(req, res) {
    try {
      const blogs = await BlogModel.find();
      res.status(200).json(blogs);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  //   [POST], path: /blogs
  async createBlog(req, res) {
    try {
      const newBlog = req.body;
      const post = new BlogModel(newBlog);
      await post.save();

      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  //   [POST], path: /blogs/update
  async updateBlog(req, res) {
    try {
      const updateBlog = req.body;
      const post = await BlogModel.findOneAndUpdate(
        { _id: updateBlog._id },
        updateBlog,
        { new: true }
      );
      await post.save();

      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  async getBlogDetail(req, res) {
    try {
      const post = await BlogModel.findOne({ slug: req.params.slug });
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  //   [GET] path: /blogs/:slug
  async searchBlog(req, res) {
    try {
      const query = req.query.q.toLowerCase();
      const posts = await BlogModel.find();

      if (posts && query) {
        const result = posts.filter((post) => {
          if (post.title.toLowerCase().includes(query)) {
            return post;
          } else {
            return;
          }
        });
        res.status(200).json(result);
        return;
      }
      res.status(200).json([]);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  //   [DELETE], path: /blogs/:id
  async deleteBlog(req, res) {
    try {
      const post = await BlogModel.deleteOne({ _id: req.params.id });
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
}

export default new BlogsController();
