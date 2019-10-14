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
//TODO: figure out how to make type value unique within the current itineraryItemSchema array
const itineraryItemSchema = new mongoose.Schema({
  /*
  TYPE: what kind of itineraryItem this is. example values: 'toDo' for a to-do item type.
  Front-End will use this field to know which field to access, like so
  const itemType = itineraryItem.type
  const itemData = itineraryItem.[itemType]
  */
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

const tripSchema = new mongoose.Schema({
  creatorId: {
    type: String,
    required: true
  },
  startDate: {
    type: String,
    required: false
  },
  endDate: {
    type: String,
    required: false
  },
  items: [itineraryItemSchema]
})

module.exports = mongoose.model('Trip', tripSchema)
