// GET route wit url '/api/friends' >> JSON << all pobbile friends
// POST routes 'api/friends' >> incomingSurveyResults >> compatibility logic
var Friends = require('../data/friends.js');

module.exports = (app) => {
    // GET all friends
    app.get('/api/friends', (req,res) => {
        console.log(res);
    });
    // app.post("api/friends", (req,res) => {
    //     console.log(req.body)
    //     // res.json(req);
    // })
}
 