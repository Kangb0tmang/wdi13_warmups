console.log('Thursday Warmup');

var spiner = function(string)
{
   lowercaseString = string.toLowerCase();
   stringSplit = lowercaseString.split(" ");
   console.log(stringSplit.join("-"));
   // string.toLowerCase();
}
spiner('The_Andy_Griffith_Show');
