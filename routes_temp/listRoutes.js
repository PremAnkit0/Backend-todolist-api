const express = require('express');
const router = express.Router();
const listController = require('../controllers_temp/listController');

router.post('/', listController.createList);
router.put('/:id', listController.updateList);
router.delete('/:id', listController.deleteList);
router.get('/:id', listController.getList);

module.exports = router;
