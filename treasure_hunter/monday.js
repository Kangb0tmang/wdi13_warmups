console.log('Treasure Map');
var map1 =
[
   ["A","A","A","A","A"],
   ["A","A","A","A","A"],
   ["A","A","X","A","A"],
   ["A","A","A","A","A"],
   ["A","A","A","A","A"]
];

var map2 =
[
   ["A","A","A","A","A"],
   ["A","A","A","A","A"],
   ["A","A","A","A","A"],
   ["A","A","A","A","A"],
   ["A","X","A","A","A"]
];

var map3 =
[
   ["A","A","A","A","A"],
   ["A","A","V","A","A"],
   ["A","A","A","V","A"],
   ["v","v","V","v","X"],
   ["A","V","A","A","A"]
];

var map4 =
[
   ["A","A","A","A","A"],
   ["A","A","V","A","A"],
   ["A","A","A","V","A"],
   ["v","v","V","v","A"],
   ["X","V","A","A","A"]
];

// Using indexOf -1 Condition
var treasureFinder = function(mapArray, symbol)
{
   var result = [];

   mapArray.forEach(function(row, indexRow)
   {
      var col = row.indexOf(symbol)
      if (col !== -1)
      {
         result.push([indexRow, col]);
      }
   });
}
treasureFinder(map1, "X");

// Using includes method
var treasureFinder = function(map, key)
{
   var coordinates = [];

   map.forEach(function(row, rowIndex)
   {
      if (map[row].includes(key))
      {
         coordinates.push([rowIndex], row.indexRow[key]);
      }
   });

   return coordinates;
}
treasureFinder(map1, "X");
