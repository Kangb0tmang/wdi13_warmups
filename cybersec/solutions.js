// Solution 1
var fs = require('fs')

fs.readFile("info.csv", function(err, data) {
      bufferString = data.toString();
      dataArr = bufferString.split('\n');
      var mainObj = {};
      var headers = dataArr[0].split(',');
      for(var i = 1; i < dataArr.length; i++) {
        var data = dataArr[i].split(',');
        var dataObj = {};
        for(var j = 1; j < data.length; j++) {
          dataObj[headers[j]] = data[j];
        }
        if (!mainObj[data[0]]) {
          mainObj[data[0]] = [];
        }
        mainObj[data[0]].push(dataObj);
      }
      jsonData = JSON.stringify(mainObj, null, 2);
      console.log(jsonData)
    });

// Solution 2
var fs = require('fs');

var output = fs.readFileSync('data.txt', 'utf8')
    .split('\n')
    .map(line => line.split(','))
    .reduce( (criminals,line) => {
        criminals[line[0]] = criminals[line[0]] || [];
        criminals[line[0]].push({
            product: line[1],
            unitPrice: line[2],
            units: line[3],
            totalPrice: line[2] * line[3]
        })
        return criminals
    }, {} )

    delete output.customer

    console.log('output', JSON.stringify(output, null, 2))