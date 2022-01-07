const renderHomeView = (req, res, next) => {
    res.json(["Welcome to the home page!"]);
}

module.exports = {
    renderHomeView
}