// Solution 1
var honey = [];

for (var i=1; i<=100; i++) {
  var jar = {
    jarNum: 'jar' + i,
    state: 'closed'
  }
  honey.push(jar);
}

for (var visitNum=1; visitNum<=100; visitNum++) {
  honey.forEach(function(jar, jarIndex) {
    if ( (jarIndex+1) % visitNum === 0 && jar.state === 'closed') {
      jar.state = 'open'
    }
    else if ( (jarIndex+1) % visitNum === 0 && jar.state === 'open') {
      jar.state = 'closed'
    }
  })
}

honey.forEach(function(jar) {
  if (jar.state === 'open') {
    console.log(jar)
  }
})

// Solution 2
var getJarArr = function() {
  jars = ["start"];
  for (var i = 0; i < 100; i++) {
    jars.push("closed");
  }
  return jars;
};

var toggleState = function(index) {
  if (jars[index] === "closed") {
    jars[index] = "open"
  } else if (jars[index] === "open") {
    jars[index] = "closed"
  }
};

var honey = function() {
  jars = getJarArr();
  for (var pass = 1; pass <= 100; pass++) {
    for (var index = 1; index < jars.length; index++) {
      if (index % pass === 0) {
        toggleState(index);
      }
    }
  }
  console.log(jars);
};

honey();

// Solution 3
const MAX = 100

function Jar(){
  this.open = false;
  this.toggle = function(){
    if(this.open){
      this.open = false;
    } else {
      this.open = true;
    }
  }
}

function visitJars(jars, step){
  for (var jarIdx = step; jarIdx <= MAX; jarIdx += step){
    var jar = jars[jarIdx]
    jar.toggle()
  }
}

function listOpenJars(jars){
  let open = []
  jars.forEach(function(jar, index){
    if (jar.open == true)
      open.push(index)
  })
  console.log("Open Jars:", open.join())
}

var jars = ['']  // euuurrrgh
for (var indexOfTheJarWeAreMakingRightNow = 1; indexOfTheJarWeAreMakingRightNow <= MAX; indexOfTheJarWeAreMakingRightNow++){
  jars.push(new Jar())
}

for (var visit = 1; visit <= MAX; visit++){
  visitJars(jars, visit)
}

listOpenJars(jars)

// Solution 4
const numberOfVisits = 100;
const numberOfJars = 100;
let stateOfJars = (new Array(numberOfJars)).fill("closed");

var jarToCheck = (jarIndex, visit) => {
  return (jarIndex + 1) % visit === 0
}

var runAllVisits = () => {
  for (visit = 1; visit <= numberOfVisits; visit++) {
    stateOfJars = stateOfJars.map((jar, jarIndex) => {
      if (jarToCheck(jarIndex, visit)) {
        return jar === "open" ? "closed" : "open"
      } else {
        return jar
      }
    })
  }
}

var displayResults = () => {
  for (var jar = 1; jar <= numberOfJars; jar++) {
    console.log(`${jar}: ${stateOfJars[jar - 1]}`);
  }
}

runAllVisits();
displayResults();