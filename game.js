var level = 0,
  c = 0,
  j = 0,
  randomChosenColour;
var buttonColours = ["red", "blue", "green", "yellow"],
  gamePattern = [],
  userClickedPattern = [];

$("body").keydown(function(event) {
  if (c == 0) nextFunction();
  c++;
});

function checkAnswer() {
  if (gamePattern[j] != userClickedPattern[j]) {
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);
    c = 0,level = 0,gamePattern.length
    =0;
    $("h1").text("Game Over, Press Any Key to Start.");
    return false;
  }
  return true;
}

function nextFunction() {
  j = 0;
  var randomNumber = Math.floor(Math.random() * 4);
  userClickedPattern.length=0; //declaring userClickedPattern again doesn't work I don't know why....
  $("#level-title").text("Level " + level);
  randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeIn(400).fadeOut(400).fadeIn(400);
  playSound(randomChosenColour);
  level++;
}

function playSound(name) {
  switch (name) {
    case "blue":
      var audio = new Audio("sounds/" + name + ".mp3");
      audio.play();
      break;
    case "green":
      var audio = new Audio("sounds/" + name + ".mp3");
      audio.play();
      break
    case "red":
      var audio = new Audio("sounds/" + name + ".mp3");
      audio.play();
      break;
    case "yellow":
      var audio = new Audio("sounds/" + name + ".mp3");
      audio.play();
      break;
    default:
      var audio = new Audio("sounds/" + name + ".mp3");
      audio.play();
      break;
  }
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
  }, 400);
}

$(".btn").click(function() {
  var userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);
  animatePress(userChosenColour);
  playSound(userChosenColour);
  if (userClickedPattern.length == gamePattern.length && checkAnswer()) {
    setTimeout(function() {
      nextFunction();
    }, 1000);
  } else if (checkAnswer()) j++;
});
