function exerciseRoutine(postrunActivity){
  runFiveMiles();
  postrunActivity();
}

function runFiveMiles(){
  console.log('go for a five-mile run'); 
}

function liftWeights(){
  console.log('Pump iron');
}

function swimFortyLaps(){
  console.log('Swim 40 laps'); 
}



exerciseRoutine( function() {
  console.log("lets do yoga")
});



exerciseRoutine(() => { 

});

function receivesAFunction(callback){
  callback();
}

function returnsANamedFunction(){
  return swimFortyLaps;
}

function returnsAnAnonymousFunction(){
  return function(){console.log("hi")};
}