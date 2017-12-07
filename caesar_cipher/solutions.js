// Solution 1
var codeString = 'FRZDUGV GLH PDQB WLPHV EHIRUH WKHLU GHDWKV, WKH YDOLDQW QHYHU WDVWH RI GHDWK EXW RQFH';

var alphaB = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var alphaCaesar = ['d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c'];

var CaesarCipher = function(string) {
  var codeArr = string.toLowerCase().split('');
  var decoded = codeArr.map(function(letter){
    if (letter === ' ') {
      return letter;
    } else {
      var index = alphaCaesar.indexOf(letter);
      var newLetter = alphaB[index];
      return newLetter;
    }
  });
  decoded = decoded.join('');
  return decoded;
}

// Solution 2
var cipherShift = function(message, shift){
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  var outputMessage = "";
  // cycle through letters in message
  for (var pos = 0; pos < message.length; pos++){
    var char = message[pos];
    // if in the alphabet, decrement its position by 3
    // and add to the new string
    if (char >= 'A' && char <= 'Z') {
      var charIndex = alphabet.indexOf(char);
      var newCharIndex = (charIndex + 26 + shift) % 26;
      outputMessage += alphabet[newCharIndex];
    }
    // if not in the alphabet, add it to the string
    else {
      outputMessage += char;
    }
  }
  return outputMessage;
}

var decode = function(message, shift){
  return cipherShift(message, 0 - shift);
}

var encode = function(message, shift){
  return cipherShift(message, shift);
}


//

var message = "FRZDUGV GLH PDQB WLPHV EHIRUH WKHLU GHDWKV, WKH YDOLDQW QHYHU WDVWH RI GHDWK EXW RQFH";
console.log(decode(message, 3));

// Solution 3
var message = "FRZDUGV GLH PDQB WLPHV EHIRUH WKHLU GHDWKV, WKH YDOLDQW QHYHU WDVWH RI GHDWK EXW RQFH.";
var shiftAmount = 3;

var decodeMessage = function(str){
  var characterNumber = 0;
  var newCharacter = "";
  var decoded = "";
  for (var i = 0; i < str.length; i++) {
    characterNumber = str.charCodeAt(i);
    newCharacter = String.fromCharCode(characterNumber - 3);
    decoded += newCharacter;
  }
  return decoded;
}

// Solution 4
var message = "FRZDUGV GLH PDQB WLPHV EHIRUH WKHLU GHDWKV, WKH YDOLDQW QHYHU WDVWH RI GHDWK EXW RQFH.";
var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var cipher = "DEFGHIJKLMNOPQRSTUVWXYZABC";
var alphaArr = alpha.split('');
var cipherArr = cipher.split('');
var shiftLetter = function(char) {
var index = cipherArr.indexOf(char);
if (char.match(/\W/g)) {
    var decodeLetter = char[0];
  } else {
    var decodeLetter = alphaArr[index];
  }
  return decodeLetter;
}
var messageArr = message.split('');
var decode = messageArr.map(shiftLetter);
decode = decode.join("");
console.log(decode);