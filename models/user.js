const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

const UserSchema = new Schema({
    _id: { 
        type: Schema.ObjectId, 
        auto: true 
    },
    username: String,
    password: {
        type: String,
        minlength: 8
    },
    token: String
});

const User = mongoose.model("User", UserSchema);
module.exports = User;