const router = require('express').Router()
const User = require('../models/User')
const { validateSignup, validateLogin } = require('../util/validation')

router.post('/signup', (req, res) => {
  //Validate data using Joi
  const { error } = validateSignup(req.body)

  //Return the error, if any
  if (error) return res.status(400).send(error.details[0].message)

  const user = new User({
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    dateJoined: new Date().toISOString()
  })
  user
    .save()
    .then(data => {
      const savedUser = data
      res.send(savedUser)
    })
    .catch(err => res.status(400).send(err))
})

router.post('/login', (req, res) => {
  res.send('Login')
})

module.exports = router
