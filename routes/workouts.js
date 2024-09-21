const express = require('express');
const {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWork
} = require('../controllers/workoutController')


const router = express.Router();

// All workouts
router.get('/' , getWorkouts)

// Single workout
router.get('/:id' , getWorkout)

// Post a single workout
router.post('/' , createWorkout)

// Delete a single workout
router.delete('/:id' , deleteWorkout)

// UPDATE a workout
router.patch('/:id' , updateWork)



module.exports = router