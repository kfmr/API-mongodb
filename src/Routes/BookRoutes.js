import express from "express";
import BookController from "../Controller/BookController.js"

const router = express.Router()

router
    .get('/books', BookController.getAllBooks)
    .get('/books/genre', BookController.getBookByGenre)
    .get('/books/:id', BookController.getBookById)
    .post('/books', BookController.registerBook)
    .put('/books/:id', BookController.updateBook)
    .delete('/books/:id', BookController.deletebook)
export default router