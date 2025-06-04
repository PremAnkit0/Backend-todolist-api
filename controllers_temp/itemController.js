const Item = require('../models/Item');

// Get one item
exports.getItem = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    res.json(item);
  } catch (err) {
    res.status(404).json({ error: 'Item not found' });
  }
};

// Get all items in a list
exports.getItemsInList = async (req, res) => {
  try {
    const items = await Item.find({ listId: req.params.listId });
    res.json(items);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all items in DB
exports.getAllItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

/* Update item
exports.updateItem = async (req, res) => {
  try {
    const updated = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};*/

// Create a new item in a list
exports.createItem = async (req, res) => {
  try {
    const {content, listId, status } = req.body;

    if (!content || !listId) {
      return res.status(400).json({ error: 'Name and listId are required' });
    }

    const newItem = new Item({ content, listId, status: status || 'pending' });
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update item by ID
exports.updateItem = async (req, res) => {
  try {
    const updated = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete item by ID
exports.deleteItem = async (req, res) => {
  try {
    const deleted = await Item.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.json({ message: 'Item deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
