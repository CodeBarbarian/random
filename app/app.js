/**
 * Include Libraries
 */
const express = require('express');

/**
 * Include configuration files
 */
const AppConfig = require('./config.json');

/**
 * Declare app = Express
 */
const app = express();

/**
 * Express middleware.
 */
// parses incoming requests with JSON payloads
app.use(express.json());
// parses incoming requests with urlencoded payloads
// extended: true - parsing the URL-encoded data with the querystring library
app.use(express.urlencoded({extended: true}));


/**
 * Using the routes provided in the routes folder
 */
app.use('/', require('./routes/gameRouter'));
app.use('/', require('./routes/homeRouter'));

//const model = require('./library/model');


/**
 * Function onStart
 */
function onStart() {
    console.log("===========================");
    console.log("Welcome to Random Rest API!");
    console.log("===========================");

    var serverURL = (AppConfig.weburl + ":" + AppConfig.webport)
    console.log(`Server is running! Visit ${serverURL}`);
}

/**
 * Start the server
 */
app.listen(AppConfig.webport, onStart);