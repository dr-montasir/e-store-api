const { readdirSync } = require('fs');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');

// config
const config = require('./config');

// db
require('./db');

const app = express();

// middlewares
app.use(logger('dev'));
// for parsing application/json
app.use(bodyParser.json());
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

// server mode
const mode = config.Mode;

// Port
const port = config.Port || 1400;

app.listen(port, () => {
  console.log(
    `\n🔥${'='.repeat(33)}🔥\n${' '.repeat(
      3
    )}🟢 Server running on port :${port}`
  );
  switch (mode) {
    case 'development':
      console.log(`${' '.repeat(3)}📺 Watch: http://localhost:${port}`);
      break;

    default:
      console.log(`${' '.repeat(3)}🌐 Server Mode: ${mode}`);
      break;
  }
});
