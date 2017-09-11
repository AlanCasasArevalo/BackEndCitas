'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema

const ClientSchema = new Schema({
  firstName: {
      type: String,
      index:true,
      lowercase:true,
      required: true
  },
  lastName: {
      type: String,
      index:true,
      lowercase:true,
      required: true
  },
  email: {
      type: String,
      index:true,
      unique: true,
      required: true
  },
  address: {
      type: String,
      index:true,
      unique: true,
      required: true
  },
  phone: {
      type: String,
      index:true,
      unique: true,
      required: true
  },
  birthDate: {
      type: Date,
      index:true,
      unique: true,
      required: true
  },
  nationalId: {
      type: String,
      index:true,
      unique: true,
      required: true
  },
  password: {
      type: String,
      required: true
  }
})

module.exports = mongoose.model('Client', ClientSchema)






