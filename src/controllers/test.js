const express = require('express')
const Champ = require('../models/champ.js')
const router = express.Router(); // eslint-disable-line new-cap

// GET /api/champ
router.get('/', (req, res) => {
    return res.send('Received a GET HTTP method');
});
// POST /api/champ
router.post('/', (req, res) => {
  return res.send('Received a POST HTTP method');
});
// PUT
router.put('/', (req, res) => {
  return res.send('Received a PUT HTTP method');
});
// DELETE
router.delete('/', (req, res) => {
  return res.send('Received a DELETE HTTP method');
});

module.exports = router;
