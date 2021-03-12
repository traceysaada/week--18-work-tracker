# Workout Tracker set up & Deploy

for this application I used the mongoose DB, also mongodb atlas & heroku for deploy. 

this was quite a fun but challenging application to do as I had not used any of these before & had some problems connecting with the mongodb atlas turned out to be something as simple as my password. 

First file covered was to set up the server.

Then Routes folder with the following files.

# views.js required the following

require in the path npm package
get require which is going to return the exercise.html when the user visits /exercise
get request which is going to return the stats.html when the user visits /stats

# api.js required the following

post request to create workouts
put request to update a workout
get request to get workouts out of database
get request to get a range of workouts out of the database

Then the Models

# Workout.js required the following

require in mongoose
initialise a schema
define a full schema object for the workout entries


## User Story

* A user, can create and track daily workouts. log multiple exercises for a a given day. Can also track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, they will be able to track their distance traveled.



## Application will do the following

load the application & create a new workout or continue with their last workout.

update or continue with the following:

  * Add exercises to the most recent workout plan.

  * Add new exercises to a new workout plan.

  * View the combined weight of multiple exercises from the past seven workouts.

  * View the total duration of each workout from the past seven workouts.

 

  The idea of this is to give the user control of their time on a given day to carry out an exercise regime & track a weekly workout plan to suit their busy life so can plan set routines to suit a a 7 day plan.


# Please use the following link for deployed application

 https://fitness-tracker-tracey.herokuapp.com/
