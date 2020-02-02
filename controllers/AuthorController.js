const express=require("express");
const router=express.Router();
const Author = require("../models/author");
var VerifyToken = require(__root + 'auth/VerifyToken');

// RETURNS ALL THE AUTHORS IN THE DATABASE
router.get('/',(req,res)=>{
    Author.find({}, function (err, author) {
        if (err) return res.status(500).send("There was a problem finding the authors.");
        res.status(200).send(author);
    });
});

// CREATES A NEW AUTHOR
router.post('/', VerifyToken,(req,res)=>{
    Author.create(req.body,function (err, author) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(201).send(author);
        });
});

// GETS A SINGLE AUTHOR FROM THE DATABASE
router.get('/:id', VerifyToken, function(req, res){
    Author.findOne({_id: req.params.id}, function (err, author){
        if (err) return res.status(500).send("There was a problem finding the author.");
        if (!author) return res.status(404).send("No author found.");
    }).then(author=>{
        res.status(200).json(author);
    });
});

// UPDATES A SINGLE AUTHOR IN THE DATABASE
router.put('/:id', VerifyToken, function(req, res){
    Author.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, author) {
        if (err) return res.status(500).send("There was a problem updating the author.");
        if (!author) return res.status(404).send("No author found.");
        res.status(200).send(author);
    });
});

// DELETES AN AUTHOR FROM THE DATABASE
router.delete('/:id', VerifyToken, function(req, res){
    Author.findByIdAndRemove(req.params.id, function (err, author) {
        if (err) return res.status(500).send("There was a problem deleting the author.");
        if (!author) return res.status(404).send("No author found.");
        res.status(204).send("Author: "+ author.firstName +" was deleted.");
    });
});

module.exports=router;