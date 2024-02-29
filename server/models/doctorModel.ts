// const mongoose = require('mongoose');

import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const doctorSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  availableTimes: [],
  bookings: [],
});

const Doctor = mongoose.model('Doctor', doctorSchema);

export default Doctor;
