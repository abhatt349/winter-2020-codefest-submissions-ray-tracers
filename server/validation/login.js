const validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLoginInput(data) {  //exporting the function validateLoginInput
  let errors = {};

  //Convert any empty fields to an empty string so we can use validator
  functions
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";

  //Email checks
    if (validator.isEmpty(data.email)) {    //delievers the error message if user doesn't type anything
      errors.email = "Email field is required";
    } else if (!validator.isEmail(data.email)) { //the validator from the npm library checks to make sure it is a valid form of email
      errors.email = "Email is invalid";
    }

  //Password checks
    if (validator.isEmpty(data.password)) { //delievers the error message if user doesn't type anything
      errors.password = "Password field is required";
    }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
