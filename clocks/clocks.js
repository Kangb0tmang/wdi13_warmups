console.log('Clocks');
var startClock = function() {
  var time = new Date();
  var seconds = time.getSeconds();
  var minutes = time.getMinutes();
  var hours = time.getHours();
  minutes = checkTime(minutes);
  seconds = checkTime(seconds);
  displayTime = document.getElementById('display-time').innerHTML = hours + ":" + minutes + ":" + seconds;
}

var checkTime = function(value) {
  if (value < 10) {
    value = '0' + value
  };
  return value;
}

startClock(setInterval(startClock, 1000));
