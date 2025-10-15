const Goals = require('./../models/goals');

exports.allGoals = async (req, res) => {
  try {
    const Goal = await Goals.find({});
    res.status(200).json({ Goals: Goal });
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
    const goalAdded = await Goals.create({
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
  const { goalId } = req.body;
  console.log(goalId);
  try {
    const goalDeleted = await Goals.deleteOne({ _id: goalId  });
    res.status(201).json({ message: "Goal Deleted seccessfully", goalDeleted: goalDeleted });
   } catch (error) {
    res.status(400).json({ error: error });
  }
};