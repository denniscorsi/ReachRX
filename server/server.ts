import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import dotenv from 'dotenv';
import Doctor from './models/doctorModel.js';
dotenv.config();

const PORT = 3002;

mongoose.connect(process.env.MONGO_URI);

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  const index = path.join(__dirname, '../index.html');
  return res.status(200).sendFile(index);
});

app.get('/doctors', (req, res) => {
  console.log('entered get doctors');

  Doctor.find({}).then((doctors) => {
    res.status(200).json(doctors);
  });
});

// Remove this later. This is to add to database
app.get('/doctors/add', (req, res) => {
  Doctor.create({
    name: 'Dr. .......',
    location: 'Jersey City, NJ',
    imgSrc: 'img',
    availableTimes: [
      {
        date: new Date('2024-03-10'),
        time: 11,
      },
      {
        date: new Date('2024-03-10'),
        time: 11.5,
      },
      {
        date: new Date('2024-03-11'),
        time: 14.5,
      },
    ],
    bookings: [
      {
        date: new Date('2024-03-10'),
        time: 12,
      },
    ],
  });
});

// serve static assetts
app.use('/dist', express.static(path.join(__dirname, '..')));

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'an error occured' },
  };
  const errObj = Object.assign({}, defaultErr, err);
  console.log(errObj.log);
  res.status(errObj.status).json(errObj.message);
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
