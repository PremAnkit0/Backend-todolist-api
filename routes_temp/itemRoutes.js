//itemRoutes.

const auth = require('../middleware/authMiddleware');

const express = require('express');
const router = express.Router();
const itemController = require('../controllers_temp/itemController');

router.post('/', auth, itemController.createItem);             // New item in list
router.get('/:id', auth, itemController.getItem);              // Get one item
router.get('/', auth, itemController.getAllItems);             // All items
router.get('/list/:listId', auth, itemController.getItemsInList); // Items in a list
router.put('/:id', auth, itemController.updateItem);           // Update item
router.delete('/:id', auth, itemController.deleteItem);        // Delete item

module.exports = router;
