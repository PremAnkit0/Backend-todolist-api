const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String
});

module.exports = mongoose.model('List', listSchema);
