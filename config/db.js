const mongoose = require('mongoose');

const connectDB = async () => {
  await mongoose.connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.PSW}@practicetypescriptreact.ir49uqv.mongodb.net/?retryWrites=true&w=majority&appName=PracticeTypeScriptReactExpressMongo`, {
    dbName: 'Goals'
  }).then(() => {
    console.log('MongoDB Connected');
  }).catch((err) => {
    console.error(err)
  });
};

mongoose.connection.on('error', (error) => {
  console.error('MongoDB connection Error: ', error)
});

mongoose.connection.on('disconnect', () => {
  console.warn('MongoDB disconnect.')
});

module.exports = connectDB;