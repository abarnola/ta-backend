const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    min: 6,
    max: 32
  },
  email: {
    type: String,
    required: true,
    max: 255,
    min: 6
  },
  password: {
    type: String,
    required: true,
    max: 1024
  },
  dateJoined: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: false,
    max: 255
  },
  lastName: {
    type: String,
    required: false,
    max: 255
  }
})

module.exports = mongoose.model('User', userSchema)
