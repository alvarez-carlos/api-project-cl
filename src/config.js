import { config } from "dotenv";

config();

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/concepts";
const PORT = process.env.PORT || 7000;

export { MONGODB_URI, PORT };
