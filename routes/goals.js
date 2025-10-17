const express = require('express');
const router = express.Router();

const { createGoal, allGoals, deleteGoal } = require('../controllers/goals.js');

router.route('/').get(allGoals);
router.route('/create-goal').post(createGoal);
router.route('/:id').delete(deleteGoal);

module.exports = router;