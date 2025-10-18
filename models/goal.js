const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
  goal: {
    type: String,
    required: [true, 'Il campo goal è obbligatorio'], // Messaggio di errore personalizzato
    trim: true,
    minlength: [3, 'Il goal deve avere almeno 3 caratteri']
  },
  summary: {
    type: String,
    required: [true, 'Il campo summary è obbligatorio'],
    trim: true
  }
},
  {
    timestamps: true,
    statics: {
      onCreateGoal(goal, summary) {
        return this.create({ goal, summary });
      },
      getAllGoals() {
        return this.find({}).sort({ createdAt: -1 }); // Aggiunto: Ordina per data di creazione, la più recente prima
      },
      deleteGoalById(id) {
        return this.findByIdAndDelete(id);
      }
    }
  }
);

const Goal = mongoose.model('Goal', goalSchema);

module.exports = Goal;