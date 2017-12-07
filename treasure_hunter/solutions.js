// Solution 1
var treasureFinder = function (mapArray, symbol) {
  var result = []
  mapArray.forEach(function(row, indexRow){
    var col = row.indexOf(symbol)
    if ( col !== -1) {
      result.push([indexRow, col])
    }
  })

  return result;
}

// Solution 2
var treasureFinder3 = function(map, key){
  var results = [];
  map.forEach(function(row, rowIndex){
    if (row.includes(key)) {
      results.push([rowIndex, row.indexOf(key)]);
    }
  });
  return results;
}