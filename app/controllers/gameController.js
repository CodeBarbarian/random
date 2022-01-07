// Requiring the gameModel
const gameModel = require('../models/gameModel');

/**
 * renders the game view
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const renderGameView = (req, res, next) => {
    res.json(["Welcome to the Game Controller"]);
}

/**
 * Sends json response with the a random game from game model
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const renderRandomGame = (req, res, next) => {
    res.json([gameModel.getRandomGameFromFile()]);
}


/**
 * Exports modules
 */
module.exports = {
    renderGameView,
    renderRandomGame
}