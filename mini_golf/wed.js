console.log("Mini Golf");

// Scores for each player
var bob = [3, 2, 6, 11, 9, 2, 6, 9, 10]; //58
var jimbo = [5, 12, 9, 22, 13, 7, 16, 10, 11]; //105
var fish = [2, 2, 4, 5, 4, 3, 6, 4, 1]; //31
var parScore = [3, 4, 5, 5, 3, 3, 4, 3, 5]; //35

// Function to calculate total scores
var totalScores = function(score)
{
   // Total set to 0 to add scores to it
   var total = 0;
   // var parTotal = 0;
   // Getting each score
   for (var i = 0; i < score.length; i++)
   {
      // Adding each number in scorecard to total and parTotal
      total += score[i];
      // parTotal += Number(coursePar[i]);
   }

   return total;
   // Displaying score compared to par score
   // var scoreComparison = playerName + "'s score is: " + total + ". Course par score is: " + parTotal;
   // return scoreComparison;

   // Fish betting scores from Bob and Jimbo against par score
   // var punt = Number(total - parTotal);
   // var fishBet = "Fish earned $" + punt + " at the expense of " + playerName;
   // return fishBet;
}

console.log(totalScores(bob));

// Using the reduce() function
// var players = [bob, jimbo, fish];
// var players =
// {
//    bob: [3, 2, 6, 11, 9, 2, 6, 9, 10], //58
//    jimbo: [5, 12, 9, 22, 13, 7, 16, 10, 11], //105
//    fish: [2, 2, 4, 5, 4, 3, 6, 4, 1], //31
// }
// var players =
// {
//    {name: "bob", scores: [3, 2, 6, 11, 9, 2, 6, 9, 10]}, //58
//    {name: "jimbo", scores: [5, 12, 9, 22, 13, 7, 16, 10, 11]}, //105
//    {name: "fish", scores: [2, 2, 4, 5, 4, 3, 6, 4, 1]}, //31
// }
//
// var addScores = function(playerScores)
// {
//    return playerScores.reduce(function(a,b)
//    {
//       return a + b;
//    }, 0);
// }
//
// players.forEach(function(player)
// {
//    console.log(player.name);
//    console.log(addScores(player.scores));
// })

// var playersArr = Object.keys(players);
// playersArr.forEach(function(name)
// {
//    console.log(name);
//    var playerScores = players[name];
//    console.log(addScores(playerScores));
// });

// console.log(addScores(bob));
