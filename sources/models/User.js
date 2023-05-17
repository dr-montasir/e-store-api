const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      minLength: 2,
      maxLength: 64,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      private: true,
      required: true,
      minLength: 6,
      maxLength: 64,
    },
    about: {
      type: String,
      trim: true,
    },
    role: {
      type: String,
      trime: true,
      lowercase: true,
      default: 'user',
      enum: ['user', 'admin', 'superadmin'],
    },
    history: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = model('User', userSchema);
