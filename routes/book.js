var express = require('express');
var router = express.Router();
const bookController = require('../controllers/book.controller');

router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.findBookById);
router.post('/create/:id', bookController.createBook);
router.delete('/delete/:id', bookController.deleteBookById);

module.exports = router;