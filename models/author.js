const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

const AuthorSchema = new Schema({
    firstName: {
        type: String,
        minLength: 1
    },
    secondName: {
        type: String,
        minLength: 1
    }
});

const Author = mongoose.model("Author", AuthorSchema);
module.exports = Author;