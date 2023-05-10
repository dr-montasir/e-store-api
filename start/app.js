const { readdirSync } = require('fs');
const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const logger = require('morgan');

// config
const config = require('./config');

const app = express();

// middlewares
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, '../sources/routes')));

// routes
const apiPrefix = config.ApiPrefix || '/';

if (apiPrefix !== '/') {
  app.get('/', (req, res) => {
    res.json({
      message: `This message is from the main application route ('/'); to see the data, go to the '${apiPrefix}'`,
    });
  });
}

const routesDir = 'sources/routes';

readdirSync(routesDir).map((route) => {
  if (path.parse(route).name === 'index') {
    route = '';
  } else {
    route = path.parse(route).name;
  }

  app.use(`${apiPrefix}/${route}`, require(`../sources/routes/${route}`));
});

// Port
const port = config.Port || 1400;

app.listen(port, () => {
  console.log(`🟢 Server running on port ${port}`);
});
