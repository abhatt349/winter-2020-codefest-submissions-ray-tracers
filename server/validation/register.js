const validator = require("validator");  //pulling in validator npm library
const isEmpty = require("is-empty");     //pulling in the isEmpty dependency

module.exports = function validateRegisterInput(data) {  //exporting the function validateRegisterInput
  let errors = {};

  //Convert empty fields to an empty string so we can use validator
  functions
    data.name = !isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2: "";

  //Name checks
    if (validator.isEmpty(data.name)) {     //delievers the error message if user doesn't type anything
      errors.name = "Name field is required";
    }

  //Email checks
    if (validator.isEmpty(data.email)) {   //delivers the error message if user doesn't type anything
      errors.email = "Email field is required";
    } else if (!validator.isEmail(data.email)) {   //the validator from the npm library checks to make sure it is a valid form of email
      errors.email = "Email is invalid";
    }

  //Password checks
    if (validator.isEmpty(data.password)) {   //delivers the error message if user doesn't type anything
      errors.password = "Password field is required";
    }

  if (validator.isEmpty(data.password2)) {    //delivers the error message if user doesn't type anything
    errors.password = "Confirm password field is required";
  }

  if (!validator.isLength(data.password, { min: 6, max: 12})) {   //the validator from the npm library checks to make sure that the password is a certain length
    errors.password = "Password must be at least 6 characters and less than 12";
  }

  if (!validator.equals(data.password, data.password2)) {   //the validator from the npm library checks to make sure that the password and cofirm password fields match
    errors.password2 = "Passwords must match";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
