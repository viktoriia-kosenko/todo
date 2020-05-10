const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const path = require('path');
const routes = require('./routes/api');

const app = express();
dotenv.config();
const PORT = process.env.PORT || 8080;

mongoose.connect(
  process.env.DB_CONNECT || 'mongodb://localhost/todo_app',
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('connected to DB'),
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', routes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.listen(PORT, () => console.log(`Server is starting at ${PORT}`));
