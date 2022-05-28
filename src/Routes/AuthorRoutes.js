import express from "express";
import AuthorController from "../Controller/AuthorController.js"

const router = express.Router()

router
    .get('/authors', AuthorController.getAllAuthors)
    .get('/authors/:id', AuthorController.getAuthorById)
    .post('/authors', AuthorController.registerAuthor)
    .put('/authors/:id', AuthorController.updateAuthor)
    .delete('/authors/:id', AuthorController.deleteAuthor)
export default router