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
        var userData = req.body;
        var total = 0;
        var friendObject = {
            name:"",
            photo:"",
            score:1000
        } 
        for (var i = 0; i < Friends.length-1; i++) {
            var total = 0;
            for (var j = 0; j < 10; j++) {
                total += Math.abs(parseInt(Friends[i].scores[j])-parseInt(userData.scores[j]));
                if (total <= friendObject.score) {
                    friendObject.name = Friends[i].name,
                    friendObject.photo = Friends[i].picture,
                    friendObject.score = total
                }
            }
        }
        Friends.push(friendObject);
        res.json(friendObject);
        console.log(friendObject);

        /*
        //console.log(res)
         console.log(req.body);
        // console.log(res);
         //res.json(req.body);
         //data = res.json(req.body);
         
         // MATCHING LOGIC \here/
         Friends.push(req.body);
         console.log(Friends);
         // req.body === results(userData)
         // WE want the scores << an array from the survey
         // loop thru total scores calc(difference) << lowest outcome is the "best match"
        */
     })
}
 