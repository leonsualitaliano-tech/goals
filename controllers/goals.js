const Goal = require('../models/goal.js');
const mongoose = require('mongoose');

exports.allGoals = async (req, res) => {
  try {
    const goals = await Goal.find({});
    res.status(200).json(goals);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.createGoal = async (req, res) => {
  const { goal, summary } = req.body;
  if (!goal || !summary) {
    res.json({ message: "All fields are required" });
    return
  }
  try {
    const goalAdded = await Goal.create({
      goal: goal,
      summary: summary
    });
    res.status(201).json({ message: "Goal created success", goal: goalAdded });
    return
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

exports.deleteGoal = async (req, res) => {
  const goalId = req.params.id;
  try {
    const deleted = await Goal.deleteById(goalId);
    if (!deleted) {
      return res.status(404).json({ message: 'Goal non trovato' });
    }
    console.log(`Goal ${goalId} eliminato con successo`);
    return res.status(200).json({ message: 'Goal eliminato', goal: deleted });
  } catch (err) {
    console.error('Errore durante la cancellazione:', err);
    return res.status(500).json({ message: 'Errore server', error: err.message });
  }
}
