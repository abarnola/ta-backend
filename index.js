const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
dotenv.config()

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('Connected to DB')
)

// Middleware
app.use(express.json())

// Route imports
const authRoute = require('./routes/auth')
const tripsRoute = require('./routes/trips')
// Route Middlewares
app.use('/api/user', authRoute)
app.use('/api/trips', tripsRoute)

app.listen(5000, () => console.log('Server running on port 5000'))
