const express = require('express');
const connectDB = require('./config/db');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

// Express
const app = express();

// Db
connectDB();

// Midlewwares
app.use(morgan('dev'));
app.use(express.json({ extended: true }));
app.use(cors());

// Add /api in routes here

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', index.html));
  });
}

const port = process.env.PORT || 8000;
