console.log('Caeser Cipher');

// Normal Alphabet
var normalAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var normalAlphabetArr = normalAlphabet.split("");
// Shifted Alphabet
var shiftAlphabet = "DEFGHIJKLMNOPQRSTUVWXYZABC";
var shiftAlphabetArr = shiftAlphabet.split("");
// Cipher
var cipher = "FRZDUGV GLH PDQB WLPHV EHIRUH WKHLU GHDWKV, WKH YDOLDQW QHYHU WDVWH RI GHDWK EXW RQFH";
var splitCipher = cipher.split("");
// var cipher = cipher.replace(/[^A-Z0-9]/ig, "");

// Use map() method


// ASCII method - use existing method, no need to create alphabet array
// Letters 65-90, if (index-3 < 90 || > 90)
