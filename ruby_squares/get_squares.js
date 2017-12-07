var getSquares = function (arr) {
  var results = []
  arr.forEach(function (num) {
    results = results.push(Math.sqrt(num))
  })
  console.log(results)
}

getSquares([4, 1, 16, 1, 10, 35, 22])
