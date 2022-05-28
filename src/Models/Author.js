import mongoose from "mongoose";

const AuthorSchema = new mongoose.Schema({
    id: {
        type: String
    },
    author_name: {
        type: String,
        required: true
    },
    nacionality: {
        type: String,
        required: true
    }
})

const Author = mongoose.model('Author', AuthorSchema)
await Author.createCollection();
export default Author