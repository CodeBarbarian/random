/**
 * Express to create the router
 */
const express = require('express');
const router = express.Router();
 
 /**
  * Define exported modules from controller as well as 
  * requiring them
  */
const {
    renderHomeView, 
} = require("../controllers/homeController");
 
 /**
  * Defining the routes
  */
router.get('/', renderHomeView);
router.get('/home', renderHomeView);


 /**
  * Export the router module
  */
module.exports = router;