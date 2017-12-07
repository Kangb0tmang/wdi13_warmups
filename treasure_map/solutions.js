// Solution 1
var char = "A";
var map = [];
makeFakeMap(5,5); // call makeFakeMap to create map with lon and lat defined
function makeFakeMap (long,lat){
  var lon = char.repeat(long);//e.g. "55555"
  for(i=0;i<lat;i++){
    var lonArr = lon.split("");//e.g. "5","5","5","5","5"
    map[i] = lonArr; // create array in the map array
  }
  setTrap(long,lat); // call setTrap
  console.log(map); // print map
}
function setTrap(long,lat){
  var longTrap = Math.floor(Math.random() * long); // get random value for long
  var latTrap = Math.floor(Math.random() * lat); // get random value for lat
  map[longTrap][latTrap] = "X"; // place the "X" in the map
}

// Solution 2
var makeFakeMap = function(height, width) {
  var mapArr = [];
  for (var row = 1; row <= height; row++) {
    var line = [];
    for (var col = 1; col <= width; col++) {
      line.push("A");
    }
    mapArr.push(line);
  }
  // gets a random number from the height parameter, and the width parameter
  randomLine = [Math.floor(Math.random() * height)];
  randomCol = [Math.floor(Math.random() * width)];

// chooses the line, and column, then replaces that string with "X"
  mapArr[randomLine][randomCol] = "X";

  console.log(mapArr);
  console.log(randomLine, randomCol);
}

makeFakeMap(5, 5);

// Solution 3
var makeMap = function (rows,cols){
  var fullMap = [];
  var char = "A";
  var newRow = char.repeat(cols);
  for (i = 0; i < rows; i++){
    var newLine = newRow.split("");
    fullMap[i] = newLine;
  }
  return fullMap;
}
var presentMap = function(fullMap) {
  var display = '[\n';
  for (var i = 0; i < fullMap.length; i++) {
    display += '['
    for (var j = 0; j < fullMap[i].length; j++) {
      display += '"' + fullMap[i][j] + '"'
      if (j < fullMap[i].length - 1) {
        display += ','
      }
    }
    display += ']'
    if (i < fullMap.length - 1) {
      display += ',\n'
    }
  }
  display += '\n]'
  console.log(display);
}
var map = makeMap(5, 5);
presentMap(map);