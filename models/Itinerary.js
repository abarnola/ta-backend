const mongoose = require('mongoose')

const transportationSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  departure: String,
  arrival: String,
  departureLocation: String,
  arrivalLocation: String
})

const itineraryItemSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  toDo: {
    type: [String],
    required: false
  },
  shoppingList: {
    type: [String],
    required: false
  },
  toPack: {
    type: [String],
    required: false
  },
  transportation: [transportationSchema]
})

module.exports = {
  ItineraryItem: mongoose.model('ItineraryItem', itineraryItemSchema),
  Transportation: mongoose.model('Transportation', transportationSchema)
}
