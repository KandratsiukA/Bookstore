const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

const GenreSchema = new Schema({
    name: {
        type: String,
        minlength: 1
    }
});

const Genre = mongoose.model("Genre", GenreSchema);
module.exports = Genre;