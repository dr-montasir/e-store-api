const { Schema, model } = require('mongoose');

const userSchema = new Schema({}, { timestamps: true });

module.exports = model('User', userSchema);
