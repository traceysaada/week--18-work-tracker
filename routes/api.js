//require in the relevant model
const Workout = require("../models/workout.js");
//require in expressrouter
const router = require("express").Router()
//post request to create workouts
router.post("/api/workouts", (req, res) => {
 Workout.create({})
 .then(dbWorkout => {
     res.json(dbWorkout);
 })
 .catch(err => {
     res.status(400).json(err);
 })
});
//put request to update a workout
router.put("/api/workouts/:id", function(req, res){
    db.Workout.upDateOne({_id: req.params._id}, {rating: req.body.rating}).then(function(dbWorkout){
        res.json(dbWorkout);
    })
},

//get request to get workouts out of database
router.get("/api/workouts", (req, res) => {
    Workout.findOne().then(dbworkout => {
        res.json(dbworkout);
    })
    .catch(err => {
        res.status(400).json(err);
    })
}),
//get request to get a range of workouts out of the database
router.get("/api/workouts", (req, res) => 
Workout.findAll().then(dbworkout => {
    res.json(dbworkout);
})
.catch(err => {
    res.status(400).json(err);
})
)
//delete request to delete a workout
)
//exports the router
module.exports = router