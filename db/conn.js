const mongoose = require('mongoose');

module.exports.connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Database connect succesful');
  } catch (error) {
    console.log(error);
  }
}