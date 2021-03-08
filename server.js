// require in express and mongoose npm packages
const express = require("express");
const mongoose = require("mongoose");
// set up a PORT variables with the port 3000 
const PORT = process.env.PORT || 3000;

// initialise an express server
const app = express();
// set up express middlewar e.g app.use(.........)
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
// set up middleware for express.static to use the public folder
app.use(express.static("public"));
// set up the connection using mongoose.connect
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
useNewUrlParser: true,
useFindAndModify: false,
 useUnifiedTopology: true 
});
// set up the app to use your routes files on the server
app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));
// set up app.listen
app.listen(PORT, () => {
    console.log(`app running on port ${PORT}!`);
});