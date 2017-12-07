// Solution 1
var howFar = function(lat, long, myResults) {
  myResults.forEach(function(result) {
    // pythagoras' theorem is: a2 = b2 + c2
    var name = result.name;
    // Math.pow is getting the number to the power of 2 (so cubing the answer)
    var b2 = Math.pow((lat - result.location.lat),2);
    var c2 = Math.pow((long - result.location.long),2);
    // Math.sqrt is getting the square root
    var a2 = Math.sqrt(b2 + c2);
    console.log(name + " is " + a2 + " far away.");
  });
};
howFar(37.9, -122.41, myResults);

// Solution 2
var currentLocation = function(lat, long){
  myResults.forEach(function(result){
    latDistance = result.location.lat - lat;
    longDistance = result.location.long - long;
    distance = Math.pow(longDistance, 2) + Math.pow(latDistance, 2);
    result.distance = Math.sqrt(distance);
  });
  myResults.sort(function(a, b){return a.distance - b.distance})
  myResults.forEach(function(result){
    console.log(result.name + " "+ result.distance);
  });
}

// Solution 3
var degreesToKm = function(degrees){
  var earthRadius = 6371.0;
  var radians = degrees * (Math.PI / 180);
  return earthRadius * Math.sin(radians / 2) * 2;
  // distance in km
}