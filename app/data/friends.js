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
//==========================
// \/ BEGIN JAVASCRIPT \/

// store objects with JSON-notation results into 'appData'
const appData = [];

// logic for recursive compatability goes here too
// fibonacci recursion
const fibRecursion = (n) => {

    // blank array to hold result
    var answer = [];

    // loop << pass desired place into the recursion function to determine the FibNumber at that position
    for (var i = 1; i < n+1; i++) {
        answer.push(recursive(i));
    }
    return answer;
}
// funct that takes in an integer as arg (i) which is a place in the FibSequence
const recursive = (i) => {
    /**
     * triggered when calculating the 1st and 0th place
     * simply returns 1 for the 1st position
     * and 0 for the 0th.
     */
    if (i < 2) {
        return i;
    } else {
        // runs recursuve on the the two places before the current one.
        return recursive(i - 1)+recursive(i - 2);
    }
}