const express=require("express");
const router=express.Router();
const Order = require("../models/order");
var VerifyToken = require(__root + 'auth/VerifyToken');

// CREATES A NEW ORDER
router.post('/', VerifyToken,(req,res)=>{
    Order.create(req.body,function (err, order) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(201).send(order);
        });
});

// GETS A SINGLE ORDER FROM THE DATABASE
router.get('/:id', VerifyToken, function(req, res){
    Order.findOne({_id: req.params.id}, function (err, order){
        if (err) return res.status(500).send("There was a problem finding the order.");
        if (!order) return res.status(404).send("No order found.");
    }).then(order=>{
        res.status(200).json(order);
    });
});

// DELETES AN ORDER FROM THE DATABASE
router.delete('/:id', VerifyToken, function(req, res){
    Order.findByIdAndRemove(req.params.id, function (err, order) {
        if (err) return res.status(500).send("There was a problem deleting the order.");
        if (!order) return res.status(404).send("No order found.");
        res.status(200).send("Order: "+ order._id +" was deleted.");
    });
});

module.exports = router;