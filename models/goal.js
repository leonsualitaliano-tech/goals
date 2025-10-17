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
});

goalSchema.statics.deleteById = async function (id) {
  return this.findByIdAndDelete(id);
};

const Goal = mongoose.model('Goal', goalSchema);

module.exports = Goal;