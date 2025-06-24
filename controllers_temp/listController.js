//listController

const List = require('../models/List');

// Create list
exports.createList = async (req, res) => {
  try {
    const list = await List.create({ ...req.body, userId: req.user.id });
    res.status(201).json(list);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Edit list
exports.updateList = async (req, res) => {
  try {
    const updated = await List.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete list & items
exports.deleteList = async (req, res) => {
  try {
    await Item.deleteMany({ listId: req.params.id });
    await List.findByIdAndDelete(req.params.id);
    res.json({ message: 'List and items deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get a list
exports.getList = async (req, res) => {
  try {
    const list = await List.findById(req.params.id);
    res.json(list);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all lists
exports.getAllLists = async (req, res) => {
  try {
    const lists = await List.find({ userId: req.user.id });
    res.json(lists);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

