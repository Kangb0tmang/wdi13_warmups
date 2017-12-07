var getSquares = function(arr) {
  var answer_arr = [];
  arr.forEach(function(num) {
    var root = Math.sqrt(num)
    if (root % 1 == 0) {
      if (answer_arr.indexOf(num) > 0) {
        return
      } else {
        answer_arr.push(num)
      }
    }
  });
  return answer_arr.sort();
}