const express = require("express");       //pulling the reuired dependency express
const mongoose = require("mongoose");     //pulling the reuired dependency mongoose
const bodyParser = require("body-parser");//pulling the reuired dependency bodyparser

const app = express();           //setting up app to run

// Bodyparser middleware, has access to required functions to do work before reaching server
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

//DB Config
//Pulling in the MongoURI from keys.js and connecting to the database
const db = require("./config").MONGO_KEY;

//Connect to MongoDB
mongoose                    //library that was imported
  .connect(
    db,
    { useNewUrlParser: true,
      useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000; // process.env.port is Heroku's port that server will run on
                                       //allows files to be run on server

app.listen(port, () => console.log(`Server up and running on port ${port}!`)); //app will listen on this PORT
