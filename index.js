const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
global.__root   = __dirname + '/'; 

mongoose.connect("mongodb://localhost/bookstore-db", {useNewUrlParser: true, useUnifiedTopology: true,})
    .then(() => console.log('DB Connected!'))
        .catch(err => {
            console.log(Error, err.message);
});;

app.use(bodyParser.json());

app.get('/catalog', function (req, res) {
  res.status(200).send('API works.');
});

var BookController = require(__root + './controllers/BookController');
app.use('/catalog/book', BookController);

var AuthorController = require(__root + './controllers/AuthorController');
app.use('/catalog/author', AuthorController);

var OrderController = require(__root + './controllers/OrderController');
app.use('/catalog/order', OrderController);

var UserController = require(__root + './controllers/UserController');
app.use('/catalog/user', UserController);

var AuthController = require(__root + './auth/AuthController');
app.use('/catalog', AuthController);

// 404 Error handler
app.use((req, res, next) =>  res.status(404).send({error: 'Routing not found'}));

app.listen(3000,()=>{
    console.log("Server is listening");
});

module.exports = app;