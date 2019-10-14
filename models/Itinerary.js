const mongoose = require('mongoose')

const itinerarySchema = new mongoose.Schema({
  tripId: {
    type: String,
    required: true
  },
  items: [itineraryItemSchema]
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

module.exports = mongoose.Model('Itinerary', itinerarySchema)
