var getWeight = function(letter) {
  var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  return letters.indexOf(letter) + 1
}

var calculateWeights = function() {
  var weightLeft = 0
  var weightRight = 0
  for (var letterIndex = 0; letterIndex < word.length; letterIndex++) {
    if (letterIndex < balIndex ) {
      weightLeft += getWeight(word[letterIndex]) * Math.abs(letterIndex - balIndex)
    } else if (letterIndex > balIndex )  {
      weightRight += getWeight(word[letterIndex]) * Math.abs(letterIndex - balIndex)
    }
  }
  return {left: weightLeft, right: weightRight}
}

var getBalancePosition = function(word) {
  word = word.split('')
  var result = [0,0]

  for (var balIndex = 0; balIndex < word.length; balIndex ++) {

    var weights = calculateWeights();

    if (weights.left === weights.right) {
      result[0] = balIndex
      result[1] = weights.left
      break
    }
  }
  return result
}

var getBalancePoint = function(word) {
  var result = getBalancePosition(word);
  var balancePoint = result[0]
  var weight = result[1]

  if (balancePoint === 0) {
    console.log( word + ' No balance Point ');
  } else {
    var wordLeft = word.slice(0, balancePoint)
    var wordRight = word.slice(balancePoint + 1)
    console.log(wordLeft + ' ' + word[balancePoint] + ' ' + wordRight + ' - ' + weight);
  }
}

getBalancePoint('STEAD')
getBalancePoint('CONSUBSTANTIATION')
getBalancePoint('WRONGHEADED')
getBalancePoint('UNINTELLIGIBILITY')
getBalancePoint('SUPERGLUE')