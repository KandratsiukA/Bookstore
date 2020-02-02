const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

const BookSchema = new Schema({
    title: {
        type: String,
        minLength: 1
    },
    author: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Author',
        required: true
    },
    ISBN: {
        type: String,
        minLength: 1
    },
    genre: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Genre',
        required: true
    },
    available: Boolean,
    pages: {
        type: Number,
        minLength: 1
    },
    summary: String,
    price: {
        type: Number,
        minLength: 1
    }
});

const Book = mongoose.model("Book", BookSchema);
module.exports = Book;