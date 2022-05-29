import bookSchema from "../Models/Book.js"

class BookController {

    static async getAllBooks(req, res) {
        try {
            bookSchema.find()
                .populate('author', 'author_name')
                .exec((err, books) => {
                    if (err) {
                        res.status(400).send(err).end()
                    }
                    res.status(200).json(books).end()

                })

        } catch (err) {
            res.status(400).end()
        }
    }

    static async getBookById(req, res, id) {

        try {
            const id = req.params.id
            bookSchema.findById(id)
                .populate('author', 'author_name')
                .exec((err, books) => {
                    if (err || !books) {
                        res.status(400).send({
                            message: `Id do livro não localizado.`
                        })
                    } else {
                        res.status(200).send(books);
                    }
                })

        } catch (err) {
            res.status(500).end()
            console.log(err)

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
            const id = req.params.id;

            bookSchema.findByIdAndUpdate(id, {
                $set: req.body
            }, {
                new: true
            }, (err) => {
                if (!err) {
                    res.status(200).send({
                        message: 'Livro atualizado com sucesso'
                    })
                } else {
                    res.status(400).send({
                        message: err.message
                    })
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
            bookSchema.findByIdAndDelete(id, (err) => {
                if (err) {
                    res.status(400).send("Id não encontrado")
                }
                res.status(200).end()
            })

        } catch (error) {
            res.status(500).end()
        }
    }

    static async getBookByGenre(req, res) {
        const genre = req.query
        bookSchema.find(genre).exec((err, result) => {
                if (err) {
                    res.status(400).send(err)
                }
                res.status(200).json(result)
            }

        )

    }
}


export default BookController