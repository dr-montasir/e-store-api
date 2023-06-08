// node_modules
const express = require('express');

// Express Router
const router = express.Router();

// controllers
const { register, login, getUserProfile } = require('../controllers/users');

// middlewares (sources => middlewares)
const { isAuthRole } = require('../middlewares/auth');

/**
 * @name register
 * @method POST
 * @access Public
 * @route '/users/register'
 * @description register a new user
 */
router.post('/register', register);

/**
 * @name login
 * @method POST
 * @access Public
 * @route '/users/login'
 * @description login user
 */
router.post('/login', login);

/**
 * @name getUserProfile
 * @method POST
 * @access Authorized
 * @roles ['user', 'admin', 'superadmin']
 * @route '/users/profile'
 * @description get user profile by id
 */
router.post(
  '/profile',
  isAuthRole('user', 'admin', 'superadmin'),
  getUserProfile
);

module.exports = router;
