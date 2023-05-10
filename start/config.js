const dotenv = require('dotenv');
dotenv.config();

const env = process.env;

const config = {
  Port: env.PORT || 1400,
  ApiPrefix: env.API_PREFIX || '/',
};

module.exports = config;
