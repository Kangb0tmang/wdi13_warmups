// Solution 1
var players = [
    {
    name: "Bob",
    scores: [3, 2, 6, 11, 9, 2, 6, 9, 10]
    },
    {
    name: "Jimbo",
    scores: [5, 12, 9, 22, 13, 7, 16, 10, 11]
    },
    {
    name: "Fish",
    scores: [2, 2, 4, 5, 4, 3, 6, 4, 1]
    }
  ]

  players.forEach(function(players){
    console.log(players.name + "'s total score is: " + addScores(players.scores));
  });

// Solution 2
var players = [
    {name: "bob", scores: [3,2,6,11,9,2,6,9,10]},
    {name: "jimbo", scores: [5,12,9,22,13,7,16,10,11]},
    {name: "fish", scores: [2,2,4,5,4,3,6,4,1]}
]

var addScores = function(playerScores) {
    return playerScores.reduce(function(a,b){
        return a + b;
    }, 0);
}

players.forEach(function(player) {
    console.log(player.name);
    console.log(addScores(player.scores));
});