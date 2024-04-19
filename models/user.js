const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = mongoose.model('user', new Schema({
  username: { 
    type: String,
    unique: true,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  createAt: {
    type: Date,
    default: Date.now
  }
}));

module.exports.login = (params) => {
  const {username, password} = params;
  return User.findOne({
    username: username,
    password: password
  });
}

module.exports.register = (params) => {
  const {username, password} = params;
  return User.create({
    username: username,
    password: password
  });
}