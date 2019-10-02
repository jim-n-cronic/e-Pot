// apps data should be saved HERE! AS AN ARRAY OF OBJECTS
/** SAVE APP DATA LIKE THIS \/
 * ```json
{
  "name":"Ahmed",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
}
``` * 
 */
// >>> path: 'app/data/friends.js' 
// \/ BEGIN JAVASCRIPT \/
//==========================

// store objects with JSON-notation results into 'appData'

const Friends = [
  {
    "name":"James",
    "snapchat":"@swagmente",
    "scores":[
      3,
      5,
      3,
      4,
      2,
      3,
      3,
      5,
      3,
      5
    ]
  }
];
module.exports = Friends;