const app = require("../index.js");
const mongoose = require('mongoose');
const chai = require('chai'); // eslint-disable-line import/newline-after-import
const chaiHttp = require("chai-http");
const expect = chai.expect;
var request = require('request');


const Champ = require('../models/champ');
const server = require('../index');
const User = require('../models/user')
chai.config.includeStack = true;

chai.use(chaiHttp);

/**
 * root level hooks
 */
after((done) => {
  // required because https://github.com/Automattic/mongoose/issues/1251#issuecomment-65793092
  mongoose.models = {};
  mongoose.modelSchemas = {};
  mongoose.connection.close();
  done();
});

describe('## Champ APIs', () => {
  // TODO: Implement more tests.
  it("checks equality", function() {
    expect(true).to.be.true;
  });

  it('should load homepage', () => {
    chai.request(app)
      .get('/api/champ/')
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        res.status.should.be.equal(200);
        return done();
      })
  })
});
// In this test it's expected a task list of two tasks
describe('GET /api/champ', function() {
  it('returns a list of champs', function(done) {
      request.get('/api/champ')
          .expect(200)
          .end(function(err, res) {
              expect(res.body).to.have.lengthOf(3);
              done(err);
          });
  });
});