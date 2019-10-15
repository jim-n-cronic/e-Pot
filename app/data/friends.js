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
    "snapchat":"HARD CODED",
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
  },
  {
    "name":"Joe Mama",
    "picture":"UGLY AZZZZZZ MOFUCKAA!",
    "scores":[
      3,
      5,
      2,
      4,
      1,
      3,
      2,
      5,
      2,
      4
    ]
  },
  {
    "name":"Buck Chuck",
    "picture":"UGLY AZZZZZZ MOFUCKAA!",
    "scores":[
      3,
      2,
      4,
      1,
      4,
      3,
      2,
      2,
      2,
      5
    ]
  },
  {
    "name":"M.C.Wiener",
    "picture":"UGLY AZZZZZZ MOFUCKAA!",
    "scores":[
      1,
      5,
      2,
      4,
      1,
      3,
      5,
      2,
      5,
      2
    ]
  },
  {
    "name":"Rickie Ricardo",
    "picture":"UGLY AZZZZZZ MOFUCKAA!",
    "scores":[
      5,
      2,
      3,
      1,
      1,
      3,
      4,
      2,
      3,
      5
    ]
  }
];
module.exports = Friends;