require('dotenv').config({path: './.config.env'});
const express = require('express');
const app = express();
const connectDB = require('./config/db');

const PORT = process.env.PORT;
connectDB();

app.get('/', (req, res) => {
  res.send({message: 'App up and running'});
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});