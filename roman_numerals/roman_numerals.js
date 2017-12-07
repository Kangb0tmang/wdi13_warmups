// check if its a number && < 3000
// check if its less than 3000

var romanConverter = function(input)
{
  var regex = /^[1-9][0-9]?$|^2999$/;
  var initialValue = input;
  var romanOutput = '';
  var dataSet =
  {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  for (var pair in dataSet)
  {
    while (input >= dataSet[pair])
    {
      romanOutput += pair;
      input -= dataSet[pair];
    }
  }
  console.log(`${initialValue} to ${romanOutput}`);
};

romanConverter(0);
