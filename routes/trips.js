const router = require('express').Router()
const verify = require('../util/verifyToken')
const Trip = require('../models/Trip')
const ItineraryItem = require('../models/Itinerary')
const Transportation = require('../models/Itinerary')

router.get('/test', verify, async (req, res) => {
  return res.send(req.user)
})

router.post('/create', verify, async (req, res) => {
  const items = req.body.items
  const itemSchemas = items.forEach(item => {
    return ItineraryItem({
      type: item.type,
      toDo: item.todo,
      shoppingList: item.shoppingList,
      toPack: item.toPack,
      transportation: new Transportation({
        ...item.transportation
      })
    })
  })
  const newTrip = new Trip({
    creatorId: req.user,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    items: [itemSchemas]
  })

  try {
    const savedTrip = await newTrip.save()
    res.send(savedTrip)
  } catch (err) {
    return res.status(400).send(err)
  }
})

module.exports = router
