const nm = require('native_math');

/**
 * @name index (Index Route)
 * @param {*} req
 * @param {*} res
 * @method GET
 * @access Public
 * @route '/' or '/api' or '/api/v1'
 * @description Index Route
 */
const index = (req, res) => {
  let angle = nm.rib(0, 30);

  res.status(200).send({
    message: '👋',
    angle,
    sine_angle: nm.sin.deg(angle),
    array: nm.range(-5, angle, 5),
    sine_array: nm.sin.deg(nm.range(-5, angle, 5)),
    subt: `100 - 99.9 = ${nm.subt(100, 99.9)}`,
  });
};

module.exports = { index };
