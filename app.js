require('dotenv').config({path: './.config.env'});
const express = require('express');
const app = express();

const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.send({message: 'App up and running'});
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});