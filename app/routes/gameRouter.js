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
    renderGameView, 
    renderRandomGame
} = require("../controllers/gameController");

/**
 * Defining the routes
 */
router.get('/game', renderGameView);
router.get('/game/random', renderRandomGame);

/**
 * Export the router module
 */
module.exports = router;