// Import Dependencies
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
// const path = require('path');
const routes = require('./routes');

// Configure Express
const app = express();

// Configure PORT
const PORT = process.env.PORT || 3001;

// Configure Body-Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve Static Pages on Heroku
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.use(routes);

// Create connection to DB using Mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytreact");


// Start Server...
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}...`));