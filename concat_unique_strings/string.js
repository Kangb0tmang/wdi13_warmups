var _ = require('underscore');

var str1 = "xyaabbbccccdefww";
var str2 = "xxxxyyyyabklmopq";

var longest = function(s1, s2)
{
  var joinString = str1.concat(str2);
  var uniqueArr = _.uniq(joinString);
  var clean = uniqueArr.sort().join('');
  console.log(clean);
};
longest(str1, str2);

// Another solution
var longest = (s1, s2) => _.uniq(s1 + s2).sort().join('')