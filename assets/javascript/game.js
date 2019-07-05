
var count = 3;
var countDownInterval;

function start() {
    countDownInterval = setInterval(countdown, 1000);
}

$("#timer").html(count);
function countdown() {
    count = count - 1;
    $("#timer").html(count);
    if (count <= 0) {
        console.log("countdown over!!!");
        clearInterval(countDownInterval);
    }
}

function checkIncorrect() {
  var incorrect = 0;
  for (var i = 1; i <= 45; i++) {
    var radios = document.getElementsByName("group" + i);
    for (var j = 0; j < radios.length; j++) {
      var radio = radios[j];
      if (radio.value == "incorrect" && radio.checked) {
       incorrect++;
      }
    }
  }
  console.log("Incorrect Responses: " + incorrect);
}

function checkCorrect() {
    var correct = 0;
   for (var i = 1; i <= 45; i++) {
     var radios = document.getElementsByName("group" + i);
     for (var j = 0; j < radios.length; j++) {
       var radio = radios[j];
       if (radio.value == "correct" && radio.checked) {
         correct++;
       }
     }
   }
   console.log("Correct Responses: " + correct);
 }
 
function checkResponses(){
    checkCorrect();
    checkIncorrect();
}
$("#testButton").click(() => {
  console.log("TESTING");
  countdown();
  start();
});

$("#submit").click(() =>{
console.log("submitted!");
checkResponses();
});
