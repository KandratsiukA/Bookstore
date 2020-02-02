const express=require("express");
const router=express.Router();
const Book = require("../models/book");
var VerifyToken = require(__root + 'auth/VerifyToken');

// RETURNS ALL THE BOOKS IN THE DATABASE
router.get('/',(req,res)=>{
    Book.find({}, function (err, book) {
        if (err) return res.status(400).send("There was a problem finding the books.");
        res.status(200).send(book);
    });
});

// CREATES A NEW BOOK
router.post('/', VerifyToken,(req,res)=>{
    Book.create(req.body,function (err, book) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(201).send(book);
        });
});

// GETS A SINGLE BOOK FROM THE DATABASE
router.get('/:id', VerifyToken, function(req, res){
    Book.findOne({_id: req.params.id}, function (err, book){
        if (err) return res.status(500).send("There was a problem finding the book.");
        if (!book) return res.status(404).send("No book found.");
    }).then(book=>{
        res.status(200).json(book);
    });
});

// UPDATES A SINGLE BOOK IN THE DATABASE
router.put('/:id', VerifyToken, function(req, res){
    Book.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, book) {
        if (err) return res.status(500).send("There was a problem updating the book.");
        if (!book) return res.status(404).send("No book found.");
        res.status(200).send(book);
    });
});

// DELETES A BOOK FROM THE DATABASE
router.delete('/:id', VerifyToken, function(req, res){
    Book.findByIdAndRemove(req.params.id, function (err, book) {
        if (err) return res.status(500).send("There was a problem deleting the book.");
        if (!book) return res.status(404).send("No book found.");
        res.status(204).send("Book: "+ book.title +" was deleted.");
    });
});

module.exports=router;