const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
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

const server = app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .bold
  )
);

//unhandled promise rejection
process.on('unhandledRejection', (error, promise) => {
  console.log(`Error: ${error.message}`.red);
  //close and exit
  server.close(process.exit(1));
});
