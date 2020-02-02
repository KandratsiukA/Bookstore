var app = require('../index.js'),
request = require('supertest');
const Order = require("../models/order");

describe('POST /order', function() {
    it('it should POST an order', function(done) {
      request(app)
      .post('/order')
      .send({
            "books": ["5e078f6dca9df2302c908cbd"],
            "userID": "5e2da3ee0315293fc883800a",
            "cost": "10",
            "shipDate": "04.02.2020",
            "status": "processing",
            "complete": false
      }).set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200).end(function(err,res){
        res.status.should.equal(200);
        res.body.success.should.equal(true);
        res.body.should.have.property('_id');
        res.body.should.have.property('books');
        res.body.should.have.property('userID');
        res.body.should.have.property('cost');
        res.body.should.have.property('shipDate');
        res.body.should.have.property('status');
        res.body.should.have.property('complete');
      });
      done();
    });
  });

  describe('GET /order/:id', () => {
    it('it should GET an order by the given id', (done) => {
        let order = new Order({
            "books": ["5e078f6dca9df2302c908cbd"],
            "userID": "5e2da3ee0315293fc883800a",
            "cost": "10",
            "shipDate": "04.02.2020",
            "status": "processing",
            "complete": false
       });
        order.save((err, order) => {
          request(app)
          .get('/order/' + order.id)
          .send(order)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200).end(function(err,res){
            res.status.should.equal(200);
            res.body.success.should.equal(true);
            res.body.should.have.property('_id');
            res.body.should.have.property('books');
            res.body.should.have.property('userID');
            res.body.should.have.property('cost');
            res.body.should.have.property('shipDate');
            res.body.should.have.property('status');
            res.body.should.have.property('complete');
            })
          });
        done();
     });
  });

  describe('DELETE /order/:id', () => {
    it('it should DELETE an order given the id', (done) => {
        let order = new Order({
            "books": ["5e078f6dca9df2302c908cbd"],
            "userID": "5e2da3ee0315293fc883800a",
            "cost": "10",
            "shipDate": "04.02.2020",
            "status": "processing",
            "complete": false
        });
        order.save((err, order) => {
          request(app)
          .delete('/order/' + order.id)
          .send(order)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200).end(function(err,res){
            res.status.should.equal(200);
            res.body.success.should.equal(true);
            res.body.should.have.property('_id');
            res.body.should.have.property('books');
            res.body.should.have.property('userID');
            res.body.should.have.property('cost');
            res.body.should.have.property('shipDate');
            res.body.should.have.property('status');
            res.body.should.have.property('complete');
            })
          });
        done();
     });
  });