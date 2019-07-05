var count = 10;
var countDownInterval;

function start() {
  count = 10;
  countDownInterval = setInterval(countdown, 1000);
  countdown();
  $("#gameInstructions").css("display", 
  "none");
  $("#gameCounter").css("display", "block")
}

$(".timer").html(count);
function countdown() {
  count = count - 1;
  $(".timer").html(count);
  if (count <= 0) {
    checkResponses();
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
  switch (correct) {
    case 0:
      $("#results").html(
        "Oh no you got " + correct + " questions correct! YOU SUCK"
      );
      break;
    case 2:
      $("#results").html("You answered " + correct + " questions correctly.");
      break;
    case 3:
      $("#results").html(
        "PERFECTENSCHLAG! You answered all " + correct + " questions correctly!"
      );
  }

  console.log("Correct Responses: " + correct);
}

function checkResponses() {
  checkCorrect();
  checkIncorrect();
}
$("#start").click(() => {
  console.log("TESTING");
  
  start();
});

$("#submit").click(() => {
  console.log("submitted!");
  checkResponses();
});
