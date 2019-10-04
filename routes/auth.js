const router = require('express').Router()
const User = require('../models/User')

router.post('/signup', (req, res) => {
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
