require('dotenv').config({path: './.config.env'});
const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./config/db');

const PORT = process.env.PORT;

const goalRouter = require('./routes/goals.js');
connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', cors(), goalRouter);

app.get('/', (req, res) => {
  res.send({message: 'App up and running'});
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});