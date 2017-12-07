var string = "title=jaws&page=5";
var params = string.split(/\W/);
var hash = {};
var title = params[1]
var page = params[3]

hash[:title] = title;
hash[:page] = page;
// pairsString.forEach(function(pair)
// {
//    pairs.push(pair.split('='));
// });
// pairs.forEach(function(pair)
// {
//    params[pair[0]] = pair[1];
// });
