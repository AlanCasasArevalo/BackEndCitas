'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema

const MeetingSchema = Schema({
    date: String,
    isOcuppied:Boolean,    
    description:String,
    price: Number
})

module.exports = mongoose.model('Meeting', MeetingSchema)








