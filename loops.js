for ([initialization]; [condition]; [iteration]) {
  [loopBody]
}

//use {for} loop when you know how
//many times you need the event to execute
for (var i = 1; i < 100; i++){
  console.log("Hello World the " + i + "time");
}

function forLoop(array){
  for (let i = 0; i < 25; i++){
    array.unshift("I am" + `${i}` + "strange loop");
  }
}