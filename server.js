// Import Dependencies
const bodyParser = require('body-parser');
const express = require('express');
const logger = require('logger');
const mongoose = require('mongoose');
const path = require('path');

// Configure Express
const app = express();

// Configure PORT
const PORT = process.env.PORT || 3001;

// Create connection to DB using Mongoose
mongoose.connect("mongodb://localhost/nytreact");

// Configure Body-Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve Static Pages
app.use(express.static(path.join(__dirname, 'public')));

// Setup Morgan for CLI Logging
app.use(logger('dev'));

// Start Server...
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}...`));