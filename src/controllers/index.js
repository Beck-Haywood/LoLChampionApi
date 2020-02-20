const express = require('express');
const champRoutes = require('./champ.js');
const authRoutes = require('./auth.js');
const testRoutes = require('./test.js');

const router = express.Router(); // eslint-disable-line new-cap

router.use('/champ', champRoutes);

router.use('/auth', authRoutes);

router.use('/index', testRoutes);

module.exports = router;
