var fs = require('fs');
var http = require('http');
var file = 'cybersec.txt';

var convertFile = function(file)
{
  var lines = file.split('\n');
  var result = [];
  var headers = lines[0].split(',');

  for (var column = 1; column < lines.length; column++)
  {
    var obj = {};
    var currentLine = lines[column].split(',');

    for (var row = 0; row < headers.length; row++)
    {
      obj[headers[row]] = currentLine[row];
    }
    result.push(obj);
  }
  return JSON.stringify(result);
};

var app = function(request, response)
{
  var path = request.url;
  if (path === '/cybersec')
  {
    console.log('a request was made');
    fs.readFile(file, 'utf-8', function(err, data)
    {
      var suspects = response.write(convertFile(data));
      response.end();
    });
  }
  else
  {
    console.log('a request was made');
    response.write('Testing');
    response.end();
  }
};

var server = http.createServer(app);
server.listen(8888);
