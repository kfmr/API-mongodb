import AuthorSchema from "../Models/Author.js"

class AuthorController {

    static async getAllAuthors(req, res) {
        try {
            const result = await AuthorSchema.find()
            res.status(200).json(result)
        } catch (err) {
            res.status(400).end()
        }
    }

    static async getAuthorById(req, res, id) {

        try {
            const id = req.params.id
            const result = await AuthorSchema.findById(id)
            res.status(200).json(result)

        } catch (err) {
            res.status(400).end()

        }
    }

    static async registerAuthor(req, res) {
        try {

            const author = new AuthorSchema(req.body)
            author.save((err, author) => {
                if (err) {
                    res.status(400).send({
                        message: `${err.message}`
                    }).end()
                }
                res.status(201).json(author).end()
            })

        } catch (error) {
            res.status(500).end()
        }

    }

    static async updateAuthor(req, res) {
        try {
            const id = req.params.id
            await AuthorSchema.findByIdAndUpdate(id, {
                $set: req.body
            }, (err, author) => {
                if (!err) {
                    res.status(200).json(author)
                }

            })
        } catch (err) {
            res.status(500).send({
                "message": `${err.message}`
            }).end()
        }

    }
    static async deleteAuthor(req, res) {
        try {
            const id = req.params.id
            await AuthorSchema.findByIdAndDelete(id, (err) => {
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


export default AuthorController