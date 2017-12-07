// Solution 1
var string = "title=jaws&page=5"
string = string.split(/\W/)
var book_js = {}
var title = string[0]
var page = string[2]
book_js[title] = string[1]
book_js[page] = Number(string[3])
console.log(book_js)

// Solution 2
var string = "title=jaws&page=5";

var params = {};

var createObject = function(string) {
  var pairsString = string.split('&');
  var pairs = [];
  pairsString.forEach(function(pair){
    pairs.push(pair.split('='));

  })
  console.log(pairs);
  // params[pairs[0][0]] = pairs[0][1];
  // params[pairs[1][0]] = pairs[1][1];
  pairs.forEach(function(pair){
    params[pair[0]] = pair[1]
  })
};