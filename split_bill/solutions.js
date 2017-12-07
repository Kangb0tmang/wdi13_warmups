// ES6
var group = {
  A: 20,
  B: 15,
  C: 10,
  D: 30
}

var splitTheBill = function(group){
  var keyArray =  Object.keys(group);
  var amountArray = Object.keys(group).map(key => group[key]);
  var totalAmount = 0;
  amountArray.forEach(amount => totalAmount += amount)
  var splitGroup = {}
  keyArray.forEach(function(key,index){
    splitGroup[key] = amountArray[index] - ((totalAmount/keyArray.length).toFixed(2));
  })
  return splitGroup;

}

console.log(splitTheBill(group));

// Underscore
var splitTheBill = function(group) {
  var values = _.values(group)
  var total = 0
  values.forEach(function(amount) {
    total += amount
  })

  evenSplit = total / _.size(group)
  resultObj = {}
  _.map(group, function(num, key) {
    resultObj[key] = parseFloat((num - evenSplit).toFixed(2))
  })

  console.log(resultObj)
}