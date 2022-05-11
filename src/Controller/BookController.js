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

    static async registerBook(req, res) {
        try {

            const book = new bookSchema(req.body)
            book.save((err, book) => {
                if (err) {
                    res.status(400).send({
                        message: `${err.message}`
                    }).end()
                }
                res.status(201).json(book).end()
            })

        } catch (error) {
            res.status(500).end()
        }

    }

    static async updateBook(req, res) {
        try {
            const id = req.params.id
            await bookSchema.findByIdAndUpdate(id, {
                $set: req.body
            }, (err, book) => {
                if (!err) {
                    res.status(200).json(book)
                }

            })
        } catch (err) {
            res.status(500).send({
                "message": `${err.message}`
            }).end()
        }

    }
    static async deletebook(req, res) {
        try {
            const id = req.params.id
            await bookSchema.findByIdAndDelete(id, (err) => {
                if (err) {
                    res.status(400).send("Id não encontrado")
                }
                res.status(200).end()
            })

        } catch (error) {
            res.status(500).end()
        }
    }
}


export default BookController