// Chess board (Alternating black and white squares)
// Alternating spaces and '#'
// Do 1 line first
// For loop characters
// Output as a string, then line break
// After 1 line successful, then do multiple lines
// Chess board doesn't have to be a square
// User input number of columns
// User input number of rows

var white = ' ';
var black = '#';
// var startWhite = [];
// var startBlack = [];
var columns = prompt('How many columns do you want?');
var line = [];

// Line
for (var counter = 0; counter < columns; counter++)
{
   startBlack.push(black);
   blackLine = startBlack.join("");
}

// // White Line
// for (var i = 0; i < columns; i++)
// {
//    startWhite.push(white, black);
//    whiteLine = startWhite.join("");
// }
//
// // Number of lines
// var lines = prompt('How many lines do you want?');
// var board = (blackLine + "\n" + whiteLine + "\n");
// for (var numOfLines = 1; numOfLines <= lines; numOfLines++)
// {
//    console.log(board);
// }
