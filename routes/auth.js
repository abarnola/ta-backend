const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const { validateSignup, validateLogin } = require('../util/validation')

router.post('/signup', async (req, res) => {
  //Validate data
  const errors = validateSignup(req.body)

  //Check if email is taken, if so add to errors object
  const emailTaken = await User.findOne({ email: req.body.email })
  if (emailTaken) errors.email = 'email already exists'
  //Check if user is taken, if so add to errors object
  const userTaken = await User.findOne({ userName: req.body.userName })
  if (userTaken) errors.userName = 'user already exists'
  console.log(Object.keys(errors).length)
  //Return the errors, if any
  if (Object.keys(errors).length !== 0 && errors.constructor === Object)
    return res.status(400).send(errors)

  //Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(req.body.password, salt)

  //Create user object to be added
  const user = new User({
    userName: req.body.userName,
    email: req.body.email,
    password: hashedPassword,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    dateJoined: new Date().toISOString()
  })

  try {
    const savedUser = await user.save()
    res.send(savedUser)
  } catch (err) {
    return res.status(400).send(err)
  }
})

router.post('/login', async (req, res) => {
  //Validate data
  const errors = validateLogin(req.body)

  const userDoc = await User.findOne({ email: req.body.email })
  if (!userDoc) {
    errors.email = 'user does not exist'
    return res.status(400).send(errors)
  }

  const validPass = await bcrypt.compare(req.body.password, userDoc.password)
  if (!validPass) {
    errors.password = 'incorrect password'
    return res.status(400).send(errors)
  }
  res.send('login success')
})

module.exports = router
