const mongoose = require('mongoose');

// Define the MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/restorent';

// Setup mongoose connection
mongoose.connect(mongoURL)
  .then(() => {
    console.log('Connected to MongoDB server');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

const db = mongoose.connection;

// Define event listeners for the database connection
db.on('disconnected', () => {
  console.log('MongoDB server disconnected');
});

module.exports = db; // Fixed `module.export` to `module.exports`
