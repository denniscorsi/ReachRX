const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const PORT = 3002;

// mongoose.connect(process.env.MONGO_URI);

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  const index = path.join(__dirname, '../index.html');
  return res.status(200).sendFile(index);
});

app.get('/hi', (req, res) => {
  return res.status(200).send('hiiiii');
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
