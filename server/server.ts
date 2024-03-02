import express, { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import path from 'path';
import dotenv from 'dotenv';
import Doctor from './models/doctorModel.js';
dotenv.config();

const PORT: number = 3002;

// Connect database
mongoose.connect(process.env.MONGO_URI);

const app = express();
app.use(express.json());

// Serve homepage
app.get('/', (req: Request, res: Response) => {
  const index = path.join(__dirname, '../index.html');
  return res.status(200).sendFile(index);
});

// Query database for all doctors and send to client
app.get('/doctors', (req: Request, res: Response) => {
  Doctor.find({}).then((doctors) => {
    res.status(200).json(doctors);
  });
});

// Serve static assetts
app.use('/dist', express.static(path.join(__dirname, '..')));

// Catch-all route handler for any requests to an unknown route
app.use('*', (req: Request, res: Response) => {
  res.status(404).send('Page not found');
});

// Global error handler
app.use((err, req: Request, res: Response, next: NextFunction) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'an error occured' },
  };
  const errObj = Object.assign({}, defaultErr, err);
  console.log(errObj.log);
  res.status(errObj.status).json(errObj.message);
});

// Start server
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
