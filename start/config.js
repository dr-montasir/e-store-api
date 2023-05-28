const dotenv = require('dotenv');
dotenv.config();

const env = process.env;

const config = {
  Port: env.PORT || 1400,
  Mode: env.MODE || 'Unable to set mode',
  ApiPrefix: env.API_PREFIX || '/',
  Db: {
    Uri: env.DB_URI || 'mongodb://localhost:27017/e-store-api',
  },
  JWTSecretKey: env.JWT_SECRET_KEY,
};

module.exports = config;
