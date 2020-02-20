const express = require('express')

const Champ = require('../models/champ.js')

const router = express.Router(); // eslint-disable-line new-cap

// GET /api/champ
router.get('/api/champ', (req, res) => {
  Champ.find().then(champs => {
    res.send({ champs })
  })
})
// GET by ID
router.get('/api/champ/:id', (req, res) => {
  Champ.findById(req.params.id, (err, champ) => {
    res.send({ champ })
  })  
})
// POST /api/champ
router.post('/api/champ/new', (req, res) => {
  Champ.create(req.body)
    .then(function(champ) {
      res.send(champ)
    })
})
// PUT
router.put('/api/champ/update', (req, res) => {
  return res.send(
  );
});

module.exports = router;
