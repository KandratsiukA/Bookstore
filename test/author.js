var app = require('../index.js');
request = require('supertest');
const Author = require("../models/author");

describe('GET /author', function() {
  it('it should GET all the authors', function(done) {
    request(app)
    .get('/author')
    .expect(200).end(function(err,res){
      res.status.should.equal(200);
      res.body.success.should.equal(true);
    });
    done();
  });
});

describe('POST /author', function() {
  it('it should POST an author', function(done) {
    request(app)
    .post('/author')
    .send({"firstName": "Joanne",
           "secondName": "Rowling"
  }).set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200).end(function(err,res){
      res.status.should.equal(200);
      res.body.success.should.equal(true);
      res.body.should.have.property('_id');
      res.body.should.have.property('firstName');
      res.body.should.have.property('secondName');
    });
    done();
  });
});

describe('GET /author/:id', () => {
  it('it should GET an author by the given id', (done) => {
      let author = new Author({ firstName: "Joanne",
      secondName: "Rowling"
     });
      author.save((err, author) => {
        request(app)
        .get('/author/' + author.id)
        .send(author)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200).end(function(err,res){
          res.status.should.equal(200);
          res.body.success.should.equal(true);
          res.body.should.have.property('_id');
          res.body.should.have.property('firstName');
          res.body.should.have.property('secondName');
          })
        });
      done();
   });
});

describe('PUT /author/:id', () => {
  it('it should UPDATE an author given the id', (done) => {
      let author = new Author({ firstName: "Joanne",
      secondName: "Rowling"
      });
      author.save((err, author) => {
        request(app)
        .put('/author/' + author.id)
        .send(author)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200).end(function(err,res){
          res.status.should.equal(200);
          res.body.success.should.equal(true);
          res.body.should.have.property('_id');
          res.body.should.have.property('firstName');
          res.body.should.have.property('secondName');
          })
        });
      done();
   });
});

describe('DELETE /author/:id', () => {
  it('it should DELETE an author given the id', (done) => {
      let author = new Author({ firstName: "Joanne",
      secondName: "Rowling"
      });
      author.save((err, author) => {
        request(app)
        .delete('/author/' + author.id)
        .send(author)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200).end(function(err,res){
          res.status.should.equal(200);
          res.body.success.should.equal(true);
          res.body.should.have.property('_id');
          res.body.should.have.property('firstName');
          res.body.should.have.property('secondName');
          })
        });
      done();
   });
});