import mongoose from "mongoose";
import slug from "mongoose-slug-generator";

mongoose.plugin(slug);
const schema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    description: {
      type: String,
      required: true,
      default: "",
    },
    author: { type: String, required: true, default: "Anonymous" },
    likeCount: { type: Number, default: 0 },
    slug: { type: String, slug: "title", unique: true },
  },
  { timestamps: true }
);

const blogModel = mongoose.model("Post", schema);

export default blogModel;
