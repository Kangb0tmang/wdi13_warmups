var getDate = function(dateInput) {
  var date = new Date(dateInput);
  var options = {  month: 'long', day: 'numeric', year: 'numeric'};
  return new Intl.DateTimeFormat('en-AU', options).format(date);
}

var ordTranslate = function(longDate) {
  var longDateArr = longDate.split(' ');
  var day = Number(longDateArr[0]);

  function ordinalTranslate (day) {
    var ones = day % 10
    if (ones == 1 && day != 11) {
        return day + "st";
    }
    if (ones == 2 && day != 12) {
        return day + "nd";
    }
    if (ones == 3 && day != 13) {
        return day + "rd";
    }
    return day + "th";
  }
  ordDay = ordinalTranslate(day);
  longDateArr[0] = ordDay;
  return longDateArr.join(' ');
}


var dateTranslate = function(dateInput) {
  var longDate = getDate(dateInput);
  var fullDate = ordTranslate(longDate);
  console.log(fullDate);
}

dateTranslate('2017-03-11');