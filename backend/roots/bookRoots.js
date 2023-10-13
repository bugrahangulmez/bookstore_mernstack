import express from "express";
import { Book } from "../models/Book.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const books = await Book.find();
  if (!books) return res.status(404).json({ message: "No books found!" });
  res.status(200).json(books);
});

router.get("/:id", async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) return res.status(404).json({ message: "No book is found!" });
  res.json(book);
});

router.post("/create", async (req, res) => {
  const newBook = {
    title: req.body.title,
    author: req.body.author,
    publishYear: req.body.publishYear,
  };
  const result = await Book.create(newBook);
  if (!result)
    return res.status(404).json({ message: "Failed to create book!" });
  res.status(200).json(result);
});

router.put("/edit/:id", async (req, res) => {
  const { id } = req.params;
  const update = req.body;
  const result = await Book.findByIdAndUpdate(id, update);
  if (!result) return res.status(404).json({ message: "Failed to edit book!" });
  res.status(200).json(result);
});

router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  const result = await Book.findByIdAndDelete(id);
  if (!result)
    return res.status(404).json({ message: "Failed to delete book!" });
  res.status(200).json(result);
});

export default router;
