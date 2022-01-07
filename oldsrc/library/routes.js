module.exports = function(app) {
    app.get('/', (req, res, next) => {
            res.json(["Hello, World"]);
        });
    
    app.get('/random/game', (req, res, next) => {
        var Game = require('./modules/game.js');
        res.json([Game.getRandomGame()]);
    });
}