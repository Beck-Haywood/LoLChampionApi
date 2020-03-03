const mongoose = require('mongoose');
const util = require('util');
const port = process.env.PORT

require('dotenv').config();

const app = require('./config/express');
const router = require('./controllers/champ.js');
const router2 = require('./controllers/user.js');
const checkUser = require('./utils/checkUser.js')


mongoose.Promise = Promise;


// connect to mongo db
const mongoUri = process.env.MONGO_HOST;
mongoose.connect(
  mongoUri,
  { server: { socketOptions: { keepAlive: 1 } } }
);
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${mongoUri}`);
});

// # TODO: Any additional config changes belong here.
app.use(checkUser)

// Routes
app.use(router);
app.use(router2);

// module.parent check is required to support mocha watch
// src: https://github.com/mochajs/mocha/issues/1912
if (!module.parent) {
  // listen on port config.port
  app.listen((process.env.PORT || port), () => {
    console.info(`server started on port ${process.env.PORT} (${process.env.NODE_ENV})`); // eslint-disable-line no-console
  });
}

module.exports = app;
