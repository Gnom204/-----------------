import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import authRoute from "./routes/auth.js";
import clientRouter from "./routes/clients.js";

dotenv.config();

// Constants
const PORT = process.env.PORT;
const DB_NAME = process.env.DB_NAME;

const app = express();

//midleware
app.use(cors());
app.use(express.json());

//ROUTES
app.use("/api/auth", authRoute);
app.use("/api/clients", clientRouter);

async function start() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/" + DB_NAME);

    app.listen(PORT, () => {
      console.log("Приложение работает на порту " + PORT);
    });
  } catch (error) {
    console.log(error);
  }
}

start();
