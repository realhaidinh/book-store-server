const mongoose = require('mongoose');

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Database connect succesful');
  } catch (error) {
    console.log(error);
  }
}
module.exports = {connect};