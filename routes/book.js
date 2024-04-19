var express = require('express');
var router = express.Router();
const Book = require('../models/book');

router.get('/', async (req, res) => {
  const books = await Book.findAll();
  return res.status(200).send(books);
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const book = await Book.findById(id);
  if(book) {
    return res.status(200).send(book);
  }
  return res.status(404).send(`Book id ${id} not found`);
});

router.post('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const book = await Book.create(id, req.body);
    return res.status(200).send(`Book id ${id} create succesful`);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error.errorResponse.errmsg);
  }
});

router.delete('/delete/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Book.deleteById(id);
    if(result.deletedCount > 0)
      return res.status(200).send(`Book id ${id} delete succesful`);
    return res.status(404).send(`Book id ${id} not found`);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error.errorResponse.errmsg);
  }
});

router.patch('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Book.findByIdAndUpdate(id, req.body);
    if(result) 
      return res.status(200).send(`Book id ${id} update succesful`);
    return res.status(404).send(`Book id ${id} not found`);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error.errorResponse.errmsg);
  }
});

module.exports = router;