import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    id: {
        type: String
    },
    title: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author",
        required: true
    },
    editor: {
        type: String,
        required: true
    },
    pages: {
        type: Number,
        required: false
    },
    genre: {
        type: String,
        required: true
    }

})

const Books = mongoose.model('Books', BookSchema)
await Books.createCollection();
export default Books