const { readdirSync } = require('fs');
const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const logger = require('morgan');

// config
dotenv.config();

const app = express();

// middlewares
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'routes')));

// routes
const apiPrefix = process.env.API_PREFIX || '/';

if (apiPrefix !== '/') {
  app.get('/', (req, res) => {
    res.json({
      message: `This message is from the main application route ('/'); to see the data, go to the '${apiPrefix}'`,
    });
  });
}

const routesDir = './routes';

readdirSync(routesDir).map((route) => {
  if (path.parse(route).name === 'index') {
    route = '';
  } else {
    route = path.parse(route).name;
  }

  app.use(`${apiPrefix}/${route}`, require(`./routes/${route}`));
});

// Port
const port = process.env.PORT || 1400;

app.listen(port, () => {
  console.log(`🟢 Server running on port ${port}`);
});
