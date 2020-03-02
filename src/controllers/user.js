const jwt = require('jsonwebtoken')
const User = require('../models/user')
const checkAuth = require('../utils/checkUser')
require('dotenv').config();

const express = require('express')

const router = express.Router(); // eslint-disable-line new-cap


// SIGNUP
router.post("/signup", (req, res) => {
  console.log("test")
  console.log(req.body)
  const user = new User(req.body);
  user
    .save()
    .then(user => {
      console.log(user)
      const token = jwt.sign({_id: user._id}, process.env.PRIVATEKEY, {expiresIn: "60 days"})
      res.cookie('pToken', token, { maxAge: 900000, httpOnly: true });
      return res.status(200).send({status: 200, message:"Success: Signed up", token:token})
    })
    .catch(err => {
      return res.send({status: 401, message:"Error: Username taken?", err: err["errmsg"] });
    })
})

// LOGIN POST
router.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({ username }, "username password")
  .then(user => {
    if (!user ) {
      // User not found
      return res.status(401).json({ status: 401, message: "Error: Wrong Username or Password" });
    }
    // Check the password
    user.comparePassword(password, (err, isMatch) => {
      if (!isMatch) {
        // Password does not match
        return res.status(401).json({ status: 401, message: "Error: Wrong Username or Password" });
      }
      // Create a token
      const token = jwt.sign({ _id: user._id, username: user.username }, process.env.PRIVATEKEY, {
        expiresIn: "60 days"
      });
      // Set a cookie and redirect to root
      res.cookie("pToken", token, { maxAge: 900000, httpOnly: true });
      return res.status(200).send({status: 200, message: "Success: Logged in", token: token})
    });
  })
  .catch(err => {
    console.log(err);
    return res.status(401).json({status: 401, message: "Failed: Unauthorized login"})
  });
});

// LOGOUT
router.get('/logout', (req, res) => {
  res.clearCookie('pToken');
  return res.send({status: 200, message:"Success: Logged out"});
})

module.exports = router;
