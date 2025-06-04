const express = require('express');
const router = express.Router();
const itemController = require('../controllers_temp/itemController');

router.post('/', itemController.createItem);             // New item in list
router.get('/:id', itemController.getItem);              // Get one item
router.get('/', itemController.getAllItems);             // All items
router.get('/list/:listId', itemController.getItemsInList); // Items in a list
router.put('/:id', itemController.updateItem);           // Update item
router.delete('/:id', itemController.deleteItem);        // Delete item

module.exports = router;
