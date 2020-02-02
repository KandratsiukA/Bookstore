var app = require('../index.js'),
request = require('supertest');
const Book = require("../models/book");

describe('GET /book', function() {
  it('it should GET all the books', function(done) {
    request(app)
    .get('/book')
    .expect(200).end(function(err,res){
      res.status.should.equal(200);
      res.body.success.should.equal(true);
    });
    done();
  });
});

describe('POST /book', function() {
  it('it should POST a book', function(done) {
    request(app)
    .post('/book')
    .send({"title": "Three Men333",
           "author": "5e078ed4ca9df2302c908cbc",
           "ISBN": "0-7653-4161-5",
           "genre": "5e078e97ca9df2302c908cbb",
           "available": true,
           "pages": 400,
           "summary": "to delete.",
           "price": 30
  }).set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200).end(function(err,res){
      res.status.should.equal(200);
      res.body.success.should.equal(true);
      res.body.should.have.property('_id');
      res.body.should.have.property('title');
      res.body.should.have.property('author');
      res.body.should.have.property('ISBN');
      res.body.should.have.property('genre');
      res.body.should.have.property('available');
      res.body.should.have.property('pages');
      res.body.should.have.property('summary');
      res.body.should.have.property('price');
    });
    done();
  });
});

describe('GET /book/:id', () => {
  it('it should GET a book by the given id', (done) => {
      let book = new Book({ title: "Three Men333",
      author: "5e078ed4ca9df2302c908cbc",
      ISBN: "0-7653-4161-5",
      genre: "5e078e97ca9df2302c908cbb",
      available: true,
      pages: 400,
      summary: "to delete.",
      price: 30
     });
      book.save((err, book) => {
        request(app)
        .get('/book/' + book.id)
        .send(book)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200).end(function(err,res){
          res.status.should.equal(200);
          res.body.success.should.equal(true);
          res.body.should.have.property('_id');
          res.body.should.have.property('title');
          res.body.should.have.property('author');
          res.body.should.have.property('ISBN');
          res.body.should.have.property('genre');
          res.body.should.have.property('available');
          res.body.should.have.property('pages');
          res.body.should.have.property('summary');
          res.body.should.have.property('price');
          })
        });
      done();
   });
});

describe('PUT /book/:id', () => {
  it('it should UPDATE a book given the id', (done) => {
      let book = new Book({ title: "Three Men333",
      author: "5e078ed4ca9df2302c908cbc",
      ISBN: "0-7653-4161-5",
      genre: "5e078e97ca9df2302c908cbb",
      available: true,
      pages: 400,
      summary: "to delete.",
      price: 30
     });
      book.save((err, book) => {
        request(app)
        .put('/book/' + book.id)
        .send(book)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200).end(function(err,res){
          res.status.should.equal(200);
          res.body.success.should.equal(true);
          res.body.should.have.property('_id');
          res.body.should.have.property('title');
          res.body.should.have.property('author');
          res.body.should.have.property('ISBN');
          res.body.should.have.property('genre');
          res.body.should.have.property('available');
          res.body.should.have.property('pages');
          res.body.should.have.property('summary');
          res.body.should.have.property('price');
          })
        });
      done();
   });
});

describe('DELETE /book/:id', () => {
  it('it should DELETE a book given the id', (done) => {
      let book = new Book({ title: "Three Men333",
      author: "5e078ed4ca9df2302c908cbc",
      ISBN: "0-7653-4161-5",
      genre: "5e078e97ca9df2302c908cbb",
      available: true,
      pages: 400,
      summary: "to delete.",
      price: 30
     });
      book.save((err, book) => {
        request(app)
        .delete('/book/' + book.id)
        .send(book)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200).end(function(err,res){
          res.status.should.equal(200);
          res.body.success.should.equal(true);
          res.body.should.have.property('_id');
          res.body.should.have.property('title');
          res.body.should.have.property('author');
          res.body.should.have.property('ISBN');
          res.body.should.have.property('genre');
          res.body.should.have.property('available');
          res.body.should.have.property('pages');
          res.body.should.have.property('summary');
          res.body.should.have.property('price');
          })
        });
      done();
   });
});