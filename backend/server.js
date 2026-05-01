const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://mongo:27017/mydb')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Backend with MongoDB 🚀');
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
