var express = require('express');
var router = express.Router();
const bookController = require('../controllers/book.controller');

router.get('/', bookController.getAllBooks);
router.post('/create', bookController.createBook);

module.exports = router;