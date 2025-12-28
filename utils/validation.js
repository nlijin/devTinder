const validator = require("validator");

const validateSignupData = (req) => {
  const { firstName, lastName, emailId, password, age } = req.body;

  if (!firstName || !lastName) {
    throw new Error("First name and last name are required");
  } else if (!emailId || !validator.isEmail(emailId)) {
    throw new Error("A valid emailId is required");
  } else if (!validator.isStrongPassword(password)) {
    throw new Error("Password is not strong enough");
  } else if (age && (isNaN(age) || age < 18)) {
    throw new Error("Age must be a number and at least 18");
  }
};
module.exports = { validateSignupData };
