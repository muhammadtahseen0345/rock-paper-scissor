var user;
let positivescore = 0;
let negativescore = 0;
let matchtied = 0;

function rock(e) {
  var choices = ["rock", "paper", "scissor"];
  computerchoice = choices[Math.floor(Math.random() * choices.length)];

  user = e.target.id;

  let userchoice = user;

  if (userchoice === "rock") {
    if (userchoice === computerchoice) {
      matchtied++;
    } else if (userchoice === "rock" && computerchoice === "scissor") {
      positivescore++;
    } else if (userchoice === "rock" && computerchoice === "paper") {
      negativescore++;
    }
  } else if (userchoice === "paper") {
    if (userchoice === computerchoice) {
      matchtied++;
    } else if (userchoice === "paper" && computerchoice === "rock") {
      positivescore++;
    } else if (userchoice === "paper" && computerchoice === "scissor") {
      negativescore++;
    }
  } else if (userchoice === "scissor") {
    if (userchoice === computerchoice) {
      matchtied++;
    } else if (userchoice === "scissor" && computerchoice === "rock") {
      negativescore++;
    } else if (userchoice === "scissor" && computerchoice === "paper") {
      positivescore++;
    }
  }
  document.getElementById("computerchoice").innerHTML = computerchoice;
  document.getElementById("matchtied").innerHTML = matchtied;
  document.getElementById("positivescore").innerHTML = positivescore;
  document.getElementById("negativescore").innerHTML = negativescore;
  console.log(positivescore);
  console.log(negativescore);
  console.log(matchtied);
}
