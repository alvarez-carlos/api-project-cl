import express from "express";
import { PORT } from "./config"; //port
import cors from "cors";

import { collections, trends, about, stores } from "./routes"; //import collections routes

const app = express();

// settings
app.set("port", PORT || 7000);
app.use(cors());
app.use(express.json());

// routes
app.use(collections);
app.use(trends)
app.use(about)
app.use(stores)

// middleware guarde errores
app.use((error, req, res, next) => {
  return res.json({ message: error.message });
});

export default app;
