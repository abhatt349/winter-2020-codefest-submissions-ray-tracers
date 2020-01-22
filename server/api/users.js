//pulling in the required dependencies
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");     //pulling in the npm library
const jwt = require("jsonwebtoken");    //pulling in the npm library
const keys = require("../config.js");   //pulling in the keys from config file

//Load input validation
const validateRegisterInput = require("../validation/register.js");   //loading the input validation from register file
const validateLoginInput = require("../validation/login.js");         //loading the input validation from the login file

//Load User model
const User = require("../database/User.js") ;   //loading the model from the user file in the database directory


// @route POST register/../api/users
// @desc Register users//
// @access Public

router.post("../validation/register", (req, res) => {
  //form validation

const { errors, isValid } = validateRegisterInput(Req.body); //pull the errors and isValid vars from the validateRegisterInput func and checks input validation

//Check validation
  if (!isValid) {
    return res.status(400).json(errors); //throws the "bad request" error
  }

User.findOne({ email: req.body.email }).then(user => {  //a method of MongoDB that checks to see if the user already exists
    if (user) {
      return res.status(400).json({ email: "Email already exists noob" }); //throws "bad request" error and lets user know that email is taken
    } else {
      const newUser = new User({                 //otherwise create a new user profile
        name: req.body.name,                     //new name
        email: req.body.email,                   //new email
        password: req.body.password              //new password
      });

    // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {  //hashes the password or transforms it into another string
        if (err) throw err;
        newUser.password = hash;
        newUser
          .save()
          .then(user => res.json(user))
          .catch(err => console.log(err));
        });
      });
    }
  });
});
