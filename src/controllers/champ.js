const express = require('express')

const Champ = require('../models/champ.js')
const User = require('../models/user.js')


const router = express.Router(); // eslint-disable-line new-cap

// GET /api/champ
router.get('/api/champ', (req, res) => {
  Champ.find({}).then(champs => {
    let jsn = {}
    for (champ of champs) {
      jsn[champ.name] = {
        title: champ.title,
        icon: champ.icon,
        roles: champ.roles,
        resource_bar: champ.resource_bar,
        aa_type: champ.aa_type,
        adaptive_type: champ.adaptive_type,
        price_be: champ.price_be,
        price_rp: champ.price_rp,
        release_date: champ.release_date,
        last_changed: champ.last_changed,
        starting_health: champ.starting_health,
        starting_health_regen: champ.starting_health_regen,
        starting_armor: champ.starting_armor,
        starting_magic_resist: champ.starting_magic_resist,
        starting_attack_damage: champ.starting_attack_damage,
        movementspeed: champ.movementspeed,
        attack_range: champ.attack_range,
        base_attack_speed: champ.base_attack_speed,
        attack_speed_ratio: champ.attack_speed_ratio,
        attack_windup: champ.attack_windup,
        attack_speed_bonus: champ.attack_speed_bonus,
        gameplay_radius: champ.gameplay_radius,
        pathing_radius: champ.pathing_radius,
        selection_radius: champ.selection_radius,
        auto_attack_radius: champ.auto_attack_radius
      }
    }
    return res.send(jsn)
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
  if (req.user) {
    var champ = new Champ(req.body);
    User.findById(req.user._id)
      .then(user => {
        // champ.addedby = user.username
        champ
          .save()
          .then(champ=> {
            let jsn = {}
            jsn[champ.name] = {
              title: champ.title,
              icon: champ.icon,
              roles: champ.roles,
              resource_bar: champ.resource_bar,
              aa_type: champ.aa_type,
              adaptive_type: champ.adaptive_type,
              price_be: champ.price_be,
              price_rp: champ.price_rp,
              release_date: champ.release_date,
              last_changed: champ.last_changed,
              starting_health: champ.starting_health,
              starting_health_regen: champ.starting_health_regen,
              starting_armor: champ.starting_armor,
              starting_magic_resist: champ.starting_magic_resist,
              starting_attack_damage: champ.starting_attack_damage,
              movementspeed: champ.movementspeed,
              attack_range: champ.attack_range,
              base_attack_speed: champ.base_attack_speed,
              attack_speed_ratio: champ.attack_speed_ratio,
              attack_windup: champ.attack_windup,
              attack_speed_bonus: champ.attack_speed_bonus,
              gameplay_radius: champ.gameplay_radius,
              pathing_radius: champ.pathing_radius,
              selection_radius: champ.selection_radius,
              auto_attack_radius: champ.auto_attack_radius
            }
            return res.send(jsn)
          })
      })
      .catch(err => {
        return res.send(err)
      })
  } else {
      return res.status(401); // UNAUTHORIZED
  }
})

// PUT by ID
router.put('/api/champ/:id', (req, res) => {
  if (req.user) {
    const filter = { _id: req.params.id }
    const update = req.body 
    Champ.findOneAndUpdate(filter, update, {
      new: true
    })
    .then(function(champ) {
      return res.send(champ)
    })
  } else {
    return res.status(401); // UNAUTHORIZED
  }
});
//DELETE by ID
router.delete('/api/champ/:id', (req, res) => {
  if (req.user) {
    Champ.findByIdAndRemove(req.params.id)
    .then(function(champ) {
      return res.send(champ)
    })
  } else {
    return res.status(401); // UNAUTHORIZED
  } 
});

module.exports = router;
