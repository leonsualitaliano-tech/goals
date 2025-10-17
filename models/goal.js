const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
  goal: {
    type: String,
    require: true
  },
  summary: {
    type: String,
    require: true
  }
},
  {
    statics: {
      onCreateGoal(goal, summary) {
        return this.create({ goal, summary });
      },
      getAllGoals() {
        return this.find({});
      },
      deleteGoalById(id) {
        return this.findByIdAndDelete(id);
      }
    }
  }
);

const Goal = mongoose.model('Goal', goalSchema);

module.exports = Goal;