var app = require('../index.js'),
assert = require('assert'),
chai = require('chai'),
request = require('supertest');
const should = chai.should();

describe('POST /login', function() {
  it('logs user in', function(done) {
    request(app)
    .post('/catalog/login')
    .send({"username": "yourusername", "password": "yourpassword"})
    .set('Accept', 'application/json')
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

describe('POST /register', function() {
    it('register new user', function(done) {
      request(app)
      .post('/catalog/register')
      .send({"username": "yourusername", "password": "yourpassword"})
      .set('Accept', 'application/json')
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

  describe('GET /me', function() {
    it('it should GET me', function(done) {
      request(app)
      .get('/me')
      .expect(200).end(function(err,res){
        res.status.should.equal(200);
        res.body.success.should.equal(true);
      });
      done();
    });
  });