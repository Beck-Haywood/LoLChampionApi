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

// PUT by ID
router.put('/api/champ/:id', (req, res) => {
  const filter = { _id: req.params.id }
  const update = req.body 
  Champ.findOneAndUpdate(filter, update, {
    new: true
  })
  .then(function(champ) {
    return res.send(champ)
  })
});
//DELETE by ID
router.delete('/api/champ/:id', (req, res) => {
  Champ.findByIdAndRemove(req.params.id)
  .then(function(champ) {
    return res.send(champ)
  })
});

module.exports = router;
