//The format in which the server wants data (schema)

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // hashed
});

module.exports = mongoose.model('User', userSchema);
