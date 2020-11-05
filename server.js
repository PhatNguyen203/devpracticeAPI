const express = require('express');
const dotenv = require('dotenv');

//load bootcamps routes file
const bootcamps = require('./routes/bootcamps');

//load env config variables
dotenv.config({ path: './config/config.env' });

const app = express();

//mount routers
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
