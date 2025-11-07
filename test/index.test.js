const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');
const app = require('../index');

describe('GET /', function() {
  it('responds with JSON', function(done) {
    request(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        expect(res.body).to.have.property('message');
        done();
      });
  });
});
