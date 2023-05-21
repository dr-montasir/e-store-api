// node_modules
const express = require('express');

// Express Router
const router = express.Router();

// controllers
const { register, login } = require('../controllers/users');

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

module.exports = router;
