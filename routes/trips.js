const router = require('express').Router()
const verify = require('../util/verifyToken')
const Trip = require('../models/Trip')

router.get('/test', verify, (req, res) => {
  return res.send(req.user)
})

router.post('/create', verify, (req, res) => {
  const items = req.body.items
  console.log(items)
  const newTrip = new Trip({
    creatorId: req.user,
    startDate: req.body.startDate,
    endDate: req.body.endDate
  })

  return res.send(newTrip)
})

module.exports = router
