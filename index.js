import express, { urlencoded } from "express";
import cors from "cors";
import routes from "./routes/index.js";
import mongoose from "mongoose";
import db from "./config/db/index.js";
const app = express();
const PORT = process.env.PORT || 5000;

// middleWare
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Router
routes(app);

// Connect DB
db.connect();

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
