const Book = require('../models/book.model');

const getAllBooks = async (req, res) => {
  const books = await Book.find({});
  res.status(200).send(books);
}
const createBook = async (req, res) => {
  const {title, author, price, description, quantity, pages, genres, publisher, publication_date} = req.body;
  try {
    const book = await Book.create({
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
    res.status(200).send("Book create succesful");
  } catch (error) {
    console.log(error);
    res.status(403).send(error);
  }
}
module.exports = { getAllBooks, createBook };