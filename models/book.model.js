const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const book = new Schema({
  title: String,
  author: [String],
  price: Number,
  description: String,
  quantity: Number,
  pages: Number,
  genres: [String],
  publisher: String,
  publication_date: Date,
});
const Book =  mongoose.model('book', book);
module.exports = Book;