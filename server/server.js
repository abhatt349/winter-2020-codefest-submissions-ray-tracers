// import required dependencies
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

// import api and keys
const users = require("./api/users");
const keys = require('./config');

// init server
const app = express();

// Bodyparser middleware, has access to required functions to do work before reaching server
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to database
const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.connect(keys.MONGO_KEY, options).then(() => {
  console.log("MongoDB successfully connected")
}).catch((err) => {
  console.log(err)
});

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./passport")(passport);

// API routes
app.use("/api/users", users);
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port}!`));
