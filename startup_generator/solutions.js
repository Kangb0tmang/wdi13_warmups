// Solution 1
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

count = 0
var outputArr =[]
var temp1, temp2
while (count < 5) {
  temp1 = thisArray[getRandom(0,thisArray.length-1)];
  temp2 = thatArray[getRandom(0,thatArray.length-1)];
  outputArr.push(temp1 + ' ' + temp2);
  count++
}

outputArr.forEach(function(str, index){
  console.log(index + 1 + '. ' + str);
})

// Solution 2
var answer = [];

function gen() {
  var firstPart = thisArray[Math.floor(Math.random() * thisArray.length)];
  var secondPart = thatArray[Math.floor(Math.random() * thatArray.length)];
  answer.push(firstPart + ' for ' + secondPart);
  if (answer.length < 5) {
    gen();
  }
};
gen();

// Solution 3
var randomItemFromArray = function(theArray) {
  return theArray[Math.floor(Math.random() * theArray.length)];
};

var startupIdea = function(){
  return randomItemFromArray(thisArray) + " for " + randomItemFromArray(thatArray);
};

console.log("Startup Idea Generator");

for (var i = 1; i <= 5; i++){
  console.log(i + ". " + startupIdea());
}

// Solution 4
var ideaPack = [];
function ideas(part1, part2) {
  for (var count = 1; count <= 5; count++) {

    var firstHalf = part1[Math.floor(Math.random() * part1.length)];
    var secondHalf = part2[Math.floor(Math.random() * part2.length)];

    ideaPack.push(count + ". " + firstHalf + " for " + secondHalf);
  }
  console.log(ideaPack.join("\n"));
}
ideas(arrayOne, arrayTwo);

// Solution 5
var thisArrayRandom; //contains random array # for thisArray
var thatArrayRandom; //contains random array # for thatArray
var i = 0; //variable for while loop
//function to generate one idea
function generateAnIdea(){
  thisArrayRandom = Math.floor(Math.random() * thisArray.length) + 1;
  thatArrayRandom = Math.floor(Math.random() * thatArray.length) + 1;
  console.log("Idea "+(i + 1) +": "+thisArray[thisArrayRandom] + " for "+ thatArray[thatArrayRandom]);
}
//function to generate multiple ideas with input noOfIdeas
function generateIdeas(noOfIdeas){
  while(i != noOfIdeas){
    generateAnIdea();
    i++;
  }
}
var noOfIdeas = prompt("Enter no. of ideas:"); // get input from user
generateIdeas(noOfIdeas);//execute results

// Solution 6
var thisRand;
var thatRand;
var newArray = [];

for (var i = 1; i <= 5; i++) {
  thisRand = thisArray[Math.floor(Math.random() * thisArray.length)];

  thatRand = thatArray[Math.floor(Math.random() * thatArray.length)];

  newArray.push(thisRand + " for " + thatRand);
}

for (var j = 0; j < newArray.length; j++) {
  console.log((j + 1) + ". " + newArray[j]);
}