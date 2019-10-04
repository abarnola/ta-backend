//Validation
const Joi = require('@hapi/joi')

//Signup validation
const validateSignup = data => {
  const userSchema = {
    userName: Joi.string()
      .min(6)
      .required(),
    email: Joi.string()
      .min(6)
      .required()
      .email(),
    password: Joi.string()
      .min(6)
      .required(),
    firstName: Joi.string().max(255),
    lastName: Joi.string().max(255)
  }
  return Joi.validate(data, userSchema)
}

const validateLogin = data => {
  const loginSchema = {
    email: Joi.string()
      .min(6)
      .required(),
    password: Joi.string()
      .min(6)
      .required()
  }
  return Joi.validate(data, loginSchema)
}

module.exports = {
  validateSignup,
  validateLogin
}
