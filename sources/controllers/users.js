// Models
const User = require('../models/User');

/**
 * @name register
 * @param {*} req
 * @param {*} res
 * @method POST
 * @access Public
 * @route '/users'
 * @description register a new user
 */
const register = async (req, res) => {
  const { name, email, password } = req.body;
  const existingUser = await User.findOne({ email });
  try {
    if (name.length < 2) {
      res.send({
        message: 'Your name must have at least two letters',
      });
    } else if (name.length > 64) {
      res.send({
        message: 'Your name cannot exceed 64 letters',
      });
    } else if (existingUser) {
      res.send({
        message: 'Email already exists',
      });
    } else if (password.length < 6) {
      res.send({
        message: 'Your password must be at least 6 characters',
      });
    } else if (password.length > 64) {
      res.send({
        message: 'Your password cannot exceed 64 characters',
      });
    } else {
      const users = await User.find({});
      const user = new User(
        users.length === 0
          ? { name, email, password, role: 'superadmin' }
          : req.body
      );
      await user.save();
      res.send({
        success: true,
        message: 'User registered successfully',
        data: null,
      });
    }
  } catch (error) {
    res.send({
      message: 'User registration failed',
      reason: error.message,
    });
  }
};

module.exports = { register };
