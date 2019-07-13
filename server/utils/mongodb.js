const mongoose = require('mongoose');

const connectToMongo = () => {
  const options = { useCreateIndex: true, useNewUrlParser: true };
  mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/bigPanda', options).catch(e => console.log(e));
};

module.exports = {
  connectToMongo,
};
