const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../index");
const should = chai.should();

chai.use(chaiHttp);

const agent = chai.request.agent(server);

const User = require("../models/user");

describe("User", function() {
  it("should not be able to login if they have not registered", function(done) {
    agent
      .post("/login")
      .send({ username: "username", password: "password" })
      .end(function(err, res) {
        res.should.have.status(401);
        agent.should.not.have.cookie("pToken");
        done();
      });
  });

  // Sign up
  it("Should be able to signup using post", function(done) {
    User.findOneAndRemove({ username: "testone" }, function() {
      agent
        .post("/signup")
        .send({ username: "testone", password: "password" })
        .end(function(err, res) {
          res.should.have.status(200);
          agent.should.have.cookie("pToken");
          done();
        });
    });
  });

  // Login
  it("Should be able to login using post", function(done) {
    agent
      .post("/login")
      .send({ username: "testone", password: "password" })
      .end(function(err, res) {
        res.should.have.status(200);
        agent.should.have.cookie("pToken");
        done();
      });
  });

  // Logout
  it("Should be able to logut using get", function(done) {
    agent.get('/logout').end(function(err, res) {
      res.should.have.status(200);
      agent.should.not.have.cookie("nToken");
      done();
    })
  })

  after(function () {
    agent.close()
  });
})