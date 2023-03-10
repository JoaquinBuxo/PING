const mongoose = require("mongoose");
const URL = 'mongodb://127.0.0.1:27017/PING';

try {
  mongoose.connect(URL);
  console.log('💗 Connected to database 💗');
} catch (error) {
  console.error(error);
}

module.exports = mongoose;