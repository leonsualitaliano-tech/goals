const mongoose = require('mongoose');

const GoalSchema = new mongoose.Schema({
  goal: {
    type: String,
    require: true
  },
  summary: {
    type: String,
    require: true
  }
});

const Goals = mongoose.model('Goals', GoalSchema);

module.exports = Goals;