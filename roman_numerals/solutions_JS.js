// Solution 1
//what are the intervals that change the first letters?
// 1-4 all I
// 4 - IV 
// 5-8 all V + stuff
// 9 - IX
// 10 - 39 - all X + stuff
// 40 - 49 - all XL + stuff
// 50-89 - all L + stuff
// 90 - 99 - all XC + stuff
// 100 - C + stuff
letters = [
    [1000, 'M'],
    // -100
      [900, 'CM'], //special double letter
    [500, 'D'],
    // -100
      [400, 'CD'], //special double letter
    [100, 'C'],
    // -10
    [ 90, 'XC'], //special double letter
    [50, 'L'],
    // -10
      [40, 'XL'], //special double letter
    [10, 'X'],
    // -1
      [9, 'IX'], //special double letter
    [5, 'V'],
    // -1
      [4, 'IV'], //special double letter
    [1, 'I']
];
var romanNumeral = function(myNum){
  roman = '';
  if (myNum === 0){
    return roman
    // romans have nothing for zero
  }
  for (var i = 0; i <letters.length; i++){
    if(myNum >= letters[i][0]){
      // if greater than or equal to 1000 or letters[i][0]
      // if greater than or equal to 900
      // if greater than or equal to 500... etc
      // *37* is greater than or equal to 10 - returns (X)
      // sends number 27 (37-10) back into this function
      // 27 is >= 10, sends 17 back into function  (X)
      // 17 is >= 10, sends 7 back into function  (X)
      // 7 is >= 5 returns (V)
      // 7-5, sends 2 back into function
      // 2 is >= 1, returns (I), sends 1 back into function
      // 1 is >= 1, returns (I) 1-1 is zero which is not greater than anything in letters, stops
      return letters[i][1] + romanNumeral(myNum - letters[i][0]);
    }
  }
}

// Solution 2
var letters = 
{1: 'I', 5: 'V', 10: 'X', 50: 'L', 100: 'C', 500: 'D', 1000: 'M', 5000: '', 10000: '' };

// returns roman numeral for number between 0 and 3499
function toRoman(number){
  var roman = "";
  // add numerals for multiples of 1000, 100, 10 and then 1
  for(var divisor = 1000; divisor >= 1; divisor /= 10){
    roman += romanDigit(number, divisor);
  }
  return roman;
}

// returns roman numeral for number divided by 1,
// 10, 100 or 1000
function romanDigit(number, divisor){
  var result = ""
  var fives = divisor * 5;
  var tens = fives * 2;
  var output = "";
  var ones = Math.floor((number % tens) / divisor);
  if (ones <= 4) {
    result += romanFive(ones, divisor, fives);
  } else {
    result += romanFive(ones - 5, divisor, tens, letters[fives])
  }
  return result;
}

// returns roman numeral for number between 1 and 5,
// adds prefix (ie "V") if provided
function romanFive(number, single, five, prefix = ""){
  if (number <= 3) {
    return prefix + letters[single].repeat(number);
  } else if (number == 4){
    return letters[single] + letters[five];
  } 
  return ""
}

// Solution 3
var ones = {
  "1": "I",
  "2": "II",
  "3": "III",
  "4": "IV",
  "5": "V",
  "6": "VI",
  "7": "VII",
  "8": "VIII",
  "9": "IX"
};

var tens = {
  "1": "X",
  "2": "XX",
  "3": "XXX",
  "4": "XL",
  "5": "L",
  "6": "LX",
  "7": "LXX",
  "8": "LXXX",
  "9": "XC"
};

var hundreds = {
  "1": "C",
  "2": "CC",
  "3": "CCC",
  "4": "CD",
  "5": "D",
  "6": "DC",
  "7": "DCC",
  "8": "DCCC",
  "9": "CM"
}

var thousands = {
  "1": "M",
  "2": "MM",
  "3": "MMM"
}

var numArrayer = function(num) {
  var numString = num.toString();
  var numArr = numString.split("");
  return numArr;
}

var lengthFinder = function(numArr) {
  return var length = numArr.length;
}

var onesTranslate = function(numArr) {
  var one = numArr.pop();
  return var translatedOne = ones[one];
  return numArr;
}

var tensTranslate = function(numArr) {
  var ten = numArr.pop();
  return var translatedTen = tens[ten];
  return numArr;
}

var hundredsTranslate = function(numArr) {
  var hundred = numArr.pop();
  return var translatedHundred = hundreds[hundred];
  return numArr;
}

var thousandsTranslate = function(numArr) {
  var thousand = numArr.pop();
  return var translatedThousand = thousands[thousand];
  return numArr;
}

var translator = function(num) {
  numArrayer(num);
  lengthFinder(numArr);

  if (length = 1) {
    onesTranslate(numArr);
    console.log(translatedOne);
  } else if (length = 2) {
    onesTranslate(numArr);
    tensTranslate(numArr);
  }
}