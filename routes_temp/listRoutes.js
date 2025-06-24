//listRoutes

const auth = require('../middleware/authMiddleware');

const express = require('express');
const router = express.Router();
const listController = require('../controllers_temp/listController');

router.get('/', auth, listController.getAllLists);
router.post('/', auth, listController.createList);
router.put('/:id', auth, listController.updateList);
router.delete('/:id', auth, listController.deleteList);
router.get('/:id', auth, listController.getList);

module.exports = router;
