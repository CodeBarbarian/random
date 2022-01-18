/**
 * Express to create the router
 */
const express = require('express');
const router = express.Router();

 /**
  * Including the Controller
  */
const homeController = require('../controllers/homeController');

 /**
  * Defining the routes
  */
 // This needs to be fixed. Unable to get the homeController.renderHOmeView to work
router.get('/home', homeController.renderHomeView);

 /**
  * Export the router module
  */
module.exports = router;