// pulling in the required dependencies
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// pulling in the keys from config file
const keys = require("../config.js");

// Load input validation
const validateRegisterInput = require("../validation/register.js");
const validateLoginInput = require("../validation/login.js");

// Load User model
const User = require("../database/User.js");

// @route POST /api/users/register
// @desc Register users
// @access Public
router.post("/register", (req, res) => {
  // form validation
  const { errors, isValid } = validateRegisterInput(req.body);

  //Check validation
  if (!isValid) {
     // throws the "bad request" error
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then((user) => {
    // check if user exists already
    if (user) {
      return res.status(400).json({ email: "Email already exists noob" });
    } else {
      // otherwise create a new user profile
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });

      // Generate a salt
      bcrypt.genSalt(10, (err, salt) => {
        // hash the pass before saving
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save().then((user) => {
            // Send OK response code and JSON user
            return res.status(200).json(user)
          }).catch((err) => {
            console.log(err)
          });
        });
      });
    }
  });
});


// @route POST /api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
  // form validation
  const { errors, isValid } = validateLoginInput(req.body);

  // Check validation
  if (!isValid) {
    // throws the "bad request" error
    return res.status(400).json(errors);
  }

  // get email and pass
  const { email, password } = req.body;

  // Find user by Email
  User.findOne({ email }).then((user) => {
    // Check if user exists
    if (!user) {
      // User DNE
      return res.status(404).json({ email: "Email not found, 404 dumbass" });
    }

    // Uses the bcrypt library functions to check if information matches what is in our data
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        // Create JWT payload
        const payload = { id: user.id, name: user.name };

        // Create token that expires in 1 day (seconds)
        const exp = { expiresIn: 86400 }

        // Sign token
        jwt.sign(payload, keys.SECRET_OR_KEY, exp, (err, token) => {
          // Check if err
          if (err)
            res.status(500).json(err);
          else
            res.json({ success: true, token: "Bearer " + token });
        });
      } else {
        return res.status(400).json({ password: "Password Incorrect. Smh no wonder you need a grade calculator" });
      }
    });
  });
});

module.exports = router;
