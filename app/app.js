// The ability to pull params from .env file
require('dotenv').config();

// Declare and initialize the ExpressJS framework
const express = require('express');
const app = express();

// Middleware allows us to access the request.body.<params>
app.use(express.json());

// Including the middleware of to always use the Validate Token
const validateToken = require('./models/tokenModel');
app.use(validateToken.validateToken);

// Including the routers
const homeRouter = require('./routes/homeRouter');

// Use the routers
app.use('/api/v1', homeRouter);

// Retrieve the port number from the configuration file
const PORT = process.env.PORT;

/**
 * On start function to prettyfy the code a bit
 */
function onStart() {
    console.log(`Server running on port ${PORT}`);
}

/**
 * Start the server
 */
app.listen(PORT, onStart);