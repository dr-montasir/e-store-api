// node_modules
const express = require('express');

// Express Router
const router = express.Router();

// controllers
const { register } = require('../controllers/users');

/**
 * @name register
 * @method POST
 * @access Public
 * @route '/users/register'
 * @description register a new user
 */
router.post('/register', register);

module.exports = router;
