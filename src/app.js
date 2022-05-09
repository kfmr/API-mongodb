import express from "express";
import db from "./config/dbConnect.js";

db.on("error", console.log.bind(console, "erro de conexão"))


db.once("open", () => console.log("conexão estabelecida"))

import bookSchema from "./Models/Book.js"

const app = express();
app.use(express.json())


app.get('/books', async (req, res) => {
    try {
        const result = await bookSchema.find()
        res.status(200).json(result)
    } catch (err) {
        res.status(400).end()
    }

})

app.get('/books/:id', async (req, res) => {
        try {
            const id = req.params.id
            const result = await bookSchema.findById(id)
            res.status(200).json(result)

        } catch (err) {
            res.status(400).end()

        }
    }

)

export default app