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
} = require("../controllers/movieController");

/**
 * Defining the routes
 */

/**
 * Export the router module
 */
 module.exports = router;