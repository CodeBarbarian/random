const getRandomGameFromFile = () => {
    // Including the game.json file
    var Games = require("../database/games.json");

    // Some simple math to fetch a random game
    var RandomGame = Games[Math.floor(Math.random() * Games.length)];

    // Return it
    return RandomGame
}

module.exports = {
    getRandomGameFromFile
}