const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/encuestas', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('DB is connected');
});
