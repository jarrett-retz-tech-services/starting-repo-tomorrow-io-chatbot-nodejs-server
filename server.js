const express = require('express');
require('dotenv').config();
const helmet = require('helmet');
const xss = require('xss-clean');
const compression = require('compression');
const routes = require('./routes');
const cors = require('cors');

const app = express();
// set port
const port = process.env.PORT || 3001
// parse json request body
app.use(express.json());
// set security HTTP headers
app.use(helmet());
// sanitize request data
app.use(xss());
// gzip compression
app.use(compression());

// enable cors
app.use(cors());
app.options('*', cors());

// routes
app.use(routes);

// start app
app.listen(port, () => {
  console.log(`App running on ${port}`)
})

module.exports = app;