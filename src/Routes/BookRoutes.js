import express from "express";
import BookController from "../Controller/BookController.js"

const router = express.Router()

router
    .get('/books', BookController.getAllBooks)
    .get('/books/:id', BookController.getBookById)

export default router