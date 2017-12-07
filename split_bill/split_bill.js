var group =
{
  A: 20,
  B: 15,
  C: 10
}

// find the average
// determine who is owed money
// determine who needs to pay
var splitGroup = {}
var sumArr = []
Object.keys(group).forEach(function(key)
{
  sumArr.push(group[key])
})

var nameArr = Object.keys(group)

var total = sumArr.reduce(function(acc, value)
{
  return acc + value
})
var average = total / sumArr.length

sumArr.forEach(function(value)
{
  console.log(value - average);
})
