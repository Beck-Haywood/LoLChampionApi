const express = require('express')

const Champ = require('../models/champ.js')

const router = express.Router(); // eslint-disable-line new-cap

// GET /api/champ
router.get('/api/champ', (req, res) => {
  Champ.find().then(champs => {
    res.send({ champs })
  })
})

router.post('/api/champ', (req, res) => {
  Champ.create(req.body)
    .then(function(champ) {
      res.send(champ)
    })
})

module.exports = router;
