function renderHomeView (req, res, next) {
   res.json({
        "message":"welcome to home"
    });
}

module.exports = {
    renderHomeView
}