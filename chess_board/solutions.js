// Solution 1
var board = function (filled, gridSize) {
var piece = ' ' + filled;
var lineOdd = piece.repeat(gridSize);
var lineEven = lineOdd.split("").reverse().join("");
var boardGrid = lineOdd + "\n" + lineEven + "\n";
var fullBoard = boardGrid.repeat(gridSize / 2);

console.log(fullBoard);
}
board("%", 16);

// Solution 2
var line = ''
var displayChar;

var rows = Number(prompt('How many rows : '));
var col = Number(prompt('How many columns : '));
var symbol = prompt('What symbol to use : ');

for (var i = 1; i <= rows; i++) {
  displayChar = i % 2 === 0 ? ' ' + symbol : symbol + ' ';
  line += displayChar.repeat(col) + '\n';
}

console.log(line);

// Solution 3
var displayBoard = function(size, symbol){
  // draw the board with rows and columns according to size parameter
  for (var row = 0; row < size; row++){
    var displayString = "";
    // add space at start of string on odd rows
    if (row % 2 === 1) {
      displayString += " ";
    }
    for (var column = 0; column < size; column ++){
      displayString += symbol + " ";
    }
    console.log(displayString);
  }
};

displayBoard(8, '#');
displayBoard(5, "s");
displayBoard(16, ".");

// Solution 4
var grid;
// var rows = 10;
// var cols = 20;
var symbol;


var board = function(size, symbol){
  for (var row = 1; row <= size; row++) {
    grid = "";
    for (var col = 1; col <= size; col++) {
      if (row % 2 === 1) {
          grid += symbol + " ";
      } else {
        grid += " " + symbol;
      }
    }
    console.log(grid);
  }
}

board(10,"!");

// Solution 5
var horizontalLine = [];
drawBoard(4,"Y"); // call function drawBoard (size of grid, symbol on the board)
function drawBoard(gridSize, symbol){
  for (x=0; x<gridSize; x++){ // draw horizontal line
    horizontalLine.push(symbol); // push symbol into horizontal line to form line
  }
  for (i=0; i<gridSize; i++){ // draw vertical lines
    if(i%2==0){ // if line number is even, add extra space at the start of the line and print
      console.log(" "+horizontalLine.join(""));
    }else{
      console.log(horizontalLine.join("")); //if line number is odd, simply print out horizontal line
    }
  }
}

// Solution 6
var size = 8;

var board = "";
for (var row = 0; row < size; row++) {
 for (var col = 0; col < size*2; col++) {
    if ((col + row) % 2 ===- 0) {
     board += " ";
    } else {
     board += "#";
    }
 }
 board += "\n";
}
console.log(board);

// Solution 7
var gridGen = function(dims, sign) {
  var char = sign + ' ';
  var space = ' ' + sign;
  var boardLine = char.repeat(dims) + '\n';
  var boardLineOdd = space.repeat(dims) + '\n';
  var lineStack = boardLine + boardLineOdd;
  var complete = lineStack.repeat(dims/2);
  console.log(complete);
}

// Solution 8
var genGrid = function(char,numOfRow,numOfCol){
    var grid = '';
    for (row = 0; row < numOfRow; row++) {
        for (col = 0; col < numOfCol; col++) {
            if (row%2 === 0) {
                grid += char + ' ';
            } else {
                grid += ' ' + char;
            }
        }
        grid += '\n';
    }
    return grid;
}