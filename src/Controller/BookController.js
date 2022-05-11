import bookSchema from "../Models/Book.js"

class BookController {

    static async getAllBooks(req, res) {
        try {
            const result = await bookSchema.find()
            res.status(200).json(result)
        } catch (err) {
            res.status(400).end()
        }
    }

    static async getBookById(req, res, id) {

        try {
            const id = req.params.id
            const result = await bookSchema.findById(id)
            res.status(200).json(result)

        } catch (err) {
            res.status(400).end()

        }
    }


}

export default BookController