var app = require('../index.js'),
request = require('supertest');
const User = require("../models/user");

describe('GET /user', function() {
  it('it should GET all the users', function(done) {
    request(app)
    .get('/user')
    .expect(200).end(function(err,res){
      res.status.should.equal(200);
      res.body.success.should.equal(true);
    });
    done();
  });
});

describe('POST /user', function() {
  it('it should POST a user', function(done) {
    request(app)
    .post('/user')
    .send({"username": "yourusername",
           "password": "yourpassword"
    }).set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200).end(function(err,res){
      res.status.should.equal(200);
      res.body.success.should.equal(true);
      res.body.should.have.property('_id');
      res.body.should.have.property('username');
      res.body.should.have.property('password');
    });
    done();
  });
});

describe('GET /user/:id', () => {
  it('it should GET a user by the given id', (done) => {
      let user = new User({ username: "yourusername",
      password: "yourpassword"
      });
      user.save((err, user) => {
        request(app)
        .get('/user/' + user.id)
        .send(user)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200).end(function(err,res){
          res.status.should.equal(200);
          res.body.success.should.equal(true);
          res.body.should.have.property('_id');
          res.body.should.have.property('username');
          res.body.should.have.property('password');
          })
        });
      done();
   });
});

describe('PUT /user/:id', () => {
  it('it should UPDATE a user given the id', (done) => {
      let user = new User({ username: "yourusername",
      password: "yourpassword"
      });
      user.save((err, user) => {
        request(app)
        .put('/user/' + user.id)
        .send(user)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200).end(function(err,res){
          res.status.should.equal(200);
          res.body.success.should.equal(true);
          res.body.should.have.property('_id');
          res.body.should.have.property('username');
          res.body.should.have.property('password');
          })
        });
      done();
   });
});

describe('DELETE /user/:id', () => {
  it('it should DELETE a user given the id', (done) => {
      let user = new User({ username: "yourusername",
      password: "yourpassword"
      });
      user.save((err, user) => {
        request(app)
        .delete('/user/' + user.id)
        .send(user)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200).end(function(err,res){
          res.status.should.equal(200);
          res.body.success.should.equal(true);
          res.body.should.have.property('_id');
          res.body.should.have.property('username');
          res.body.should.have.property('password');
          })
        });
      done();
   });
});