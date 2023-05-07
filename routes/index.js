const express = require('express');

// controllers
const { index } = require('../controllers');

const router = express.Router();

/**
 * @name index (Index Route)
 * @method GET
 * @access Public
 * @route '/' or '/api' or '/api/v1'
 * @description Index Route
 */
router.get('/', index);

module.exports = router;
