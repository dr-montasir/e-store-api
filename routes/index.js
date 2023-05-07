const express = require('express');

const router = express.Router();

/**
 * @name index (Index Route)
 * @method GET
 * @access Public
 * @route '/' or '/api' or '/api/v1'
 * @description Index Route
 */
router.get('/', (req, res) => {
  res.send({
    message: '👋',
  });
});

module.exports = router;
