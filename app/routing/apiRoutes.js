// GET route wit url '/api/friends' >> JSON << all pobbile friends
// POST routes 'api/friends' >> incomingSurveyResults >> compatibility logic
var Friends = require('../data/friends.js');

module.exports = (app) => {
    // GET all friends
    app.get('/api/friends', (req,res) => {
        //console.log(res);
        res.json(Friends);
    });
     app.post("/api/friends", (req,res) => {
         //console.log(res)
         console.log(req.body);
         //res.json(req.body);
         data = res.json(req.body);
         // MATCHING LOGIC \here/
         Friends.push(data);
         console.log(Friends);
         // req.body === results(userData)
         // WE want the scores << an array from the survey
         // loop thru total scores calc(difference) << lowest outcome is the "best match"

     })
}
 