import blogsRouter from "./blogs.js";

function routes(app) {
  app.use("/blogs", blogsRouter);
}

export default routes;
