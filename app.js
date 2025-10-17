require('dotenv').config({path: './.config.env'});
const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./config/db');

const PORT = process.env.PORT;

connectDB();

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));
const goalRouter = require('./routes/goals.js');
app.use(express.json());
app.use(express.urlencoded({ extended: false }))


app.use('/api/goals', cors(), goalRouter);

app.get('/', (req, res) => {
  res.send({message: 'App up and running'});
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});