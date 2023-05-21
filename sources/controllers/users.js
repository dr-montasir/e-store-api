// node_modules
const bcrypt = require('bcryptjs');

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
      res.status(411).send({
        message: 'Your name must have at least two letters',
      });
    } else if (name.length > 64) {
      res.status(411).send({
        message: 'Your name cannot exceed 64 letters',
      });
    } else if (existingUser) {
      res.status(409).send({
        message: 'Email already exists',
      });
    } else if (password.length < 6) {
      res.status(411).send({
        message: 'Your password must be at least 6 characters',
      });
    } else if (password.length > 64) {
      res.status(411).send({
        message: 'Your password cannot exceed 64 characters',
      });
    } else {
      const users = await User.find({});

      const hashedPassword = await bcrypt.hash(password, 10);

      const user = new User(
        users.length === 0
          ? { name, email, password: hashedPassword, role: 'superadmin' }
          : ((req.body.password = hashedPassword), req.body)
      );
      await user.save();
      res.status(201).send({
        success: true,
        message: 'User registered successfully',
        data: null,
      });
    }
  } catch (error) {
    res.status(417).send({
      message: 'User registration failed',
      reason: error.message,
    });
  }
};

/**
 * @name login
 * @param {*} req
 * @param {*} res
 * @method POST
 * @access Public
 * @route '/users/login'
 * @description login user
 */
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExists = await User.findOne({ email });

    if (!userExists) {
      res.status(404).send({
        message: 'User does not exist',
      });
    } else {
      const passwordMatch = await bcrypt.compare(password, userExists.password);

      if (!passwordMatch) {
        res.status(406).send({
          message: 'Incorrect password',
        });
      } else {
        res.status(200).json({
          success: true,
          message: 'User logged successfully',
        });
      }
    }
  } catch (error) {
    res.status(417).send({
      message: 'Login failed',
      reason: error.message,
    });
  }
};

module.exports = { register, login };
