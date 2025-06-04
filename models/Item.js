const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  content: { type: String, required: true },
  completed: { type: Boolean, default: false },
  listId: { type: mongoose.Schema.Types.ObjectId, ref: 'List', required: true }
});

module.exports = mongoose.model('Item', itemSchema);
