import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const URI = process.env.DATABASE_URL;

console.log(URI);

function connect() {
  mongoose
    .connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connect successfully");
    })
    .catch((error) => {
      console.log({ error: error.message });
    });
}

export default { connect };
