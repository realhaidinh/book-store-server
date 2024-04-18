const Book = require('../models/book.model');

const getAllBooks = async (req, res) => {
  const books = await Book.find({});
  res.status(200).send(books);
}
const createBook = async (req, res) => {
  const id = req.params.id;
  const {title, author, price, description, quantity, pages, genres, publisher, publication_date} = req.body;
  try {
    const book = await Book.create({
      id: id,
      author: author,
      title: title,
      price: price,
      description: description,
      genres: genres,
      publication_date: publication_date,
      publisher: publisher,
      quantity: quantity,
      pages: pages
    });
    return res.status(200).send('Book create succesful');
  } catch (error) {
    console.log(error);
    return res.status(403).send(error);
  }
}
const findBookById = async (req, res) => {
  const id = req.params.id;
  const book = await Book.findOne({id: id});
  if(book) {
    return res.status(200).send(book);
  }
  return res.status(404).send(`Book id ${id} not found`);
}

const deleteBookById = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Book.deleteOne({id: id});
    if(result.deletedCount > 0)
      return res.status(200).send(`Book id ${id} delete succesful`);
    return res.status(404).send(`Book id ${id} not found`);
    } catch (error) {
    return res.status(500).send(error);
  }
}

module.exports = { getAllBooks, createBook, findBookById, deleteBookById };