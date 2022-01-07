/**
 * Include Libraries
 */
const express = require('express');

/**
 * Declare app = Express
 */
const app = express();

/**
 * Using the routes provided in the routes folder
 */
app.use('/', require('./routes/gameRouter'));
app.use('/', require('./routes/homeRouter'));

/**
 * Start the server
 */
app.listen(8080, () => {
    console.log("Server has started!");
});