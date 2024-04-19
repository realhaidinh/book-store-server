const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Book = mongoose.model('book', new Schema({
  id: { 
    type: Number,
    unique: true,
    require: true
  },
  title: String,
  author: [String],
  price: Number,
  description: String,
  quantity: Number,
  pages: Number,
  genres: [String],
  publisher: String,
  publication_date: Date,
}));

module.exports.findAll = () => {
  return Book.find({});
}

module.exports.findById = (id) => {
  return Book.findOne({id: id});
}

module.exports.create = (id, params) => { 
  const {title, author, price, description, quantity, pages, genres, publisher, publication_date} = params;
  return Book.create({
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
}

module.exports.deleteById = (id) => {
  return Book.deleteOne({id: id});
}

module.exports.findByIdAndUpdate = (id, params) => {
  const {title, author, price, description, quantity, pages, genres, publisher, publication_date} = params;
  return Book.findOneAndUpdate({
    id: id
  }, {
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
}