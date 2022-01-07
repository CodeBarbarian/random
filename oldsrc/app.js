/**
 * Include required libraries and modules
 */
const express = require('express');

/**
 * Initialize required libraries and modules
 */
var app = express();

/**
 * Retrieve configuration files
 */
var ApplicationConfig = require('./configs/config.json');
var ExpressConfig = require('./configs/express.json');

/**
 * Retrieve routes
 */
require('./library/routes.js')(app)

/**
 * Listen on the server
 */
app.listen(ExpressConfig.webport, () => {
    console.log(`Listening on ${ExpressConfig.webport}`);
});

