// node_modules
const jwt = require('jsonwebtoken');

// app config
const config = require('../../../start/config');

// Models
const User = require('../../models/User');

/**
 * @name isAuthRole
 * @param  {...any} roles
 * @returns Promise (function)
 */
const isAuthRole = (...roles) => {
  return async (req, res, next) => {
    try {
      // Get token from headers
      const token = req.headers.authorization.split(' ')[1];

      // Verify the token
      const decoded = jwt.verify(token, config.JWTSecretKey);

      // Add the user ID to the request object
      req.body.userId = decoded.userId;

      // Get user role from the database
      const user = await User.findById(decoded.userId);

      // Check if the user role is on the list of allowed roles
      if (roles.includes(user.role)) {
        next();
      } else {
        res.status(405).send({
          message: 'You are not authorized to access this route',
        });
      }
    } catch (error) {
      // If the token does not exist or there are errors
      res.status(417).send({
        message: 'Auth failed',
        reason: error.message,
      });
    }
  };
};

module.exports = { isAuthRole };
