//Signup validation
const validateSignup = data => {
  const {
    userName,
    email,
    password,
    confirmPassword,
    firstName,
    lastName
  } = data
  let errors = {}
  let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  let nameRegex = /^[a-zA-Z]+$/

  //Check if username is at least 6 characters, and not empty
  if (userName.trim().length < 6)
    errors.userName = 'must be at least 6 characters'
  if (userName.trim() === '') errors.userName = 'cannot be empty'

  //Use regex to see if string is a valid email address
  if (!emailRegex.test(email)) errors.email = 'must be a valid email address'

  //Password must be between 6-32 characters
  if (password.length < 6) errors.password = 'must be at least 6 characters'
  if (password.length > 32)
    errors.password = 'must not be longer than 32 characters'

  //Password must match confirmPassword
  if (confirmPassword !== password)
    errors.confirmPassword = 'passwords must match'

  //First and last name cannot contain numbers or special characters
  if (firstName) {
    if (!nameRegex.test(firstName))
      errors.firstName = 'cannot contain numbers or special characters'
  }
  if (lastName) {
    if (!nameRegex.test(lastName))
      errors.lastName = 'cannot contain numbers or special characters'
  }

  return errors
}

const validateLogin = data => {
  const { email, password } = data
  let errors = {}
  let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  //Use regex to see if string is a valid email address
  if (!emailRegex.test(email)) errors.email = 'must be a valid email address'

  //Password must be between 6-32 characters
  if (password.length < 6) errors.password = 'must be at least 6 characters'
  if (password.length > 32)
    errors.password = 'must not be longer than 32 characters'

  return errors
}

module.exports = {
  validateSignup,
  validateLogin
}
