const validator = require("validator");  //pulling in validator npm library
const isEmpty = require("is-empty");     //pulling in the isEmpty dependency

module.exports = function validateRegisterInput(data) {
  let errors = {};

  //Convert empty fields to an empty string so we can use validator
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2: "";

  //Name checks
  if (validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  //Email checks
  if (validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  //Password checks
  if (validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (validator.isEmpty(data.password2)) {
    errors.password = "Confirm password field is required";
  }

  if (!validator.isLength(data.password, { min: 6, max: 12})) {
    errors.password = "Password must be at least 6 characters and less than 12";
  }

  if (!validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }

  return { errors, isValid: isEmpty(errors) };
};
