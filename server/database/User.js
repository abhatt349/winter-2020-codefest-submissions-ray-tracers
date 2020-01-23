const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  gpa: Number,
  scale: {},
  classes: [{}]
});

module.exports = User = new mongoose.model("users", UserSchema);
