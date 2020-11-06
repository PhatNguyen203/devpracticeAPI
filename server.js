const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');

//load bootcamps routes file
const bootcamps = require('./routes/bootcamps');

//load env config variables
dotenv.config({ path: './config/config.env' });

//connect to MongoDB - always below config
connectDB();
const app = express();

//mount routers
app.use('/api/v1/bootcamps', bootcamps);

//logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('combined'));
}

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
