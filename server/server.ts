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

  // Testing
  Doctor.create({
    name: 'Test Doctor',
    location: 'NY',
  }).then(
    (doctor) => {
      console.log('doctor saved:', doctor);
    },
    (err) => console.error(err)
  );

  return res.status(200).sendFile(index);
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
