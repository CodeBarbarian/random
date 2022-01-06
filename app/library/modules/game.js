function getRandomGame() {
    // Loading the games from a json file
    var Games = require('../lists/games.json');
 
    // Some simple math to fetch a random game
    var RandomGame = Games[Math.floor(Math.random() * Games.length)];
    
    // Return it
    return RandomGame

}

module.exports = {
    getRandomGame
};