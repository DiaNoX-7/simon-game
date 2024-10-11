// Color declaration
var colors = ["red", "blue", "green", "yellow"];

// Audio declaration
var redAudio = new Audio("sounds/red.mp3");
var greenAudio = new Audio("sounds/green.mp3");
var blueAudio = new Audio("sounds/blue.mp3");
var yellowAudio = new Audio("sounds/yellow.mp3");
var gameOverAudio = new Audio("sounds/wrong.mp3");

// Variables
var chosenColor;
var chosenColorsArray = [];
var playerChoiceArry = [];
var select;
var compt;
var level = 0;
// Game color choosing function
function gameColorChoosing() {
  console.log("gameColorChoosing");
  chosenColor = colors[Math.floor(Math.random() * 4)];
  chosenColorsArray.push(chosenColor);

  // Play the correct audio
  switch (chosenColor) {
    case "red":
      redAudio.play();
      break;
    case "green":
      greenAudio.play();
      break;
    case "blue":
      blueAudio.play();
      break;
    case "yellow":
      yellowAudio.play();
      break;
  }
  $("#" + chosenColor).fadeOut();

  setTimeout(function () {
    $("#" + chosenColor).fadeIn();
  }, 100);
}

// player choice fonction
for (let i = 0; i < 4; i++) {
  select = "#" + colors[i];
  $(select).click(function (ret) {
    console.log(ret);
    $("#" + ret.target.id).addClass("pressed");
    setTimeout(function () {
      $("#" + ret.target.id).removeClass("pressed");
    }, 100);

    switch (ret.target.id) {
      case "red":
        redAudio.play();
        break;
      case "green":
        greenAudio.play();
        break;
      case "blue":
        blueAudio.play();
        break;
      case "yellow":
        yellowAudio.play();
        break;
    }

    console.log("color" + ret.target.id + "clicked");
    playerChoiceArry.push(colors[i]);
    compt++;
    testing();
  });
}
$(document).keydown(function (event) {
  if (event.key === " ") {
    if (level === 0) {
      $('#level-title').html('Level #1');
      console.log("first attempt");
      playerChoiceArry = [0];
      chosenColorsArray = [0];
      level = 0;
      compt = 0;
      setTimeout(function () {
        gameColorChoosing();
      }, 1000);
      
      level++;
    }
  }
});
function testing() {
  console.log("testing");
  if (playerChoiceArry[compt] === chosenColorsArray[compt]) {
    console.log("the right choice");
    if (compt === level) {
      console.log("nest level");
      level++;
      nextLevel();
    }
  } else {
    gameOver();
  }
}
function nextLevel() {
  $('#level-title').html('Level #' + level);
  console.log("next level fonction");
  playerChoiceArry = [0];
  compt = 0;
  setTimeout(function () {
    gameColorChoosing();
  }, 1000);
}
function gameOver() {
  console.log("game over");
  $('#level-title').html('game over ' + level + ' pts press SPACE to restart');
  gameOverAudio.play();
  document.body.style.backgroundColor = "red";
  setTimeout(function () {
    document.body.style.backgroundColor = "#011F3F";
  }, 100);
  playerChoiceArry = [0];
  chosenColorsArray = [0];
  level = 0;
  compt = 0;
}
