import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import booksRoute from "./roots/bookRoots.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT;
const API_URL = process.env.API_URL;

app.use(express.json());
app.use(cors());

app.use("/books", booksRoute);

mongoose
  .connect(API_URL)
  .then((res) => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
