const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

const OrderSchema = new Schema({
    _id: { 
        type: Schema.ObjectId, 
        auto: true 
    },
    books: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Book',
        required: true
    }],
    userID: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true
    },
    cost: {
        type: Number,
        minLength: 1
    },
    shipDate: {
        type: Date
    },
    status: {
        type: String,
        enum: ['processing', 'approved', 'delivered', 'completed']},
    complete: {
        type: Boolean,
        default: false
    }
});

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;