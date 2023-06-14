const { Schema, model } = require('mongoose');

const categorySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      minLength: 2,
      maxLength: 128,
    },
    slug: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    description: {
      type: String,
      trim: true,
      maxLength: 512,
    },
  },
  { timestamps: true }
);

module.exports = model('Category', categorySchema);
