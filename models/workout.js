//require in mongoose
const mongoose = require("mongoose");
//create a schema variable using mongoose
const Schema = mongoose.Schema;
//create a workoutSchema
const workoutSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Enter Name of workout",
    },
    name: {
        type: String,
        trim: true,
        required: "Enter Name of workout",
    },
    date: {
       type: Date,
       default: Date.now 
    }
});
//define the model using the schema and mongoose
const Workout = mongoose.model("Workout")
//export the model
module.export = Workout;