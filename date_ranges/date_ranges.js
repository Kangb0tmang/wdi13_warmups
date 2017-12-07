// 2 date values
// if year is same, don't display year
// if month is same, don't display month
var dateFormat = require('dateformat')

var convertToOrdinal = function(input)
{
  var daysOfMonth = 31
  if (input < daysOfMonth)
  {
    if ((parseFloat(input) == parseInt(input)) && !isNaN(input))
    {
      var ordinals = ['th', 'st', 'nd', 'rd'],
      number = input % 100;
      return input + (ordinals[(number - 20) % 10] || ordinals[number] || ordinals[0]);
    }
    return input
  }
  return input
}

var makeFriendlyDates = function(dates)
{
  dates.forEach(function(date)
  {
    var getDate = new Date(date)
    var formattedDate = dateFormat(getDate, "mmmm-d-yyyy")
    var convertDates = formattedDate.split('-')
    var ordinalConverted = []
    convertDates.forEach(function(convertDate)
    {
      ordinalConverted.push(convertToOrdinal(convertDate))
    })
    console.log(ordinalConverted.join());
  })
}

makeFriendlyDates(["2016-07-01", "2018-07-04"])

// makeFriendlyDates(["2016-07-01", "2016-07-04"]) should return ["July 1st","4th"]
// makeFriendlyDates(["2016-07-01", "2018-07-04"]) should return ["July 1st, 2016", "July 4th, 2018"].