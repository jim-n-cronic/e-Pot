// GET route to '/survey' displays survey.html page
// DEFAULT: 'catch-all' route that leads to home.html
const path = require('path');

// ROUTES
module.exports = (app) => {
    app.get("/", (req,res) => {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    app.get("/survey", (req,res) => {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
}


