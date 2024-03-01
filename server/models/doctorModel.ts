// const mongoose = require('mongoose');

import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const slotSchema = new Schema({
  date: { type: Date, required: true },
  time: { type: Number, required: true },
});

const doctorSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  imgSrc: { type: String, required: true },
  availableTimes: [slotSchema],
  bookings: [slotSchema],
});

const Doctor = mongoose.model('Doctor', doctorSchema);

export default Doctor;