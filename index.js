"use strict";
// Rock pappers and sccisors game

// the computer have 3 choices
// I have 3 choices

// Computer choice///
// 0 1 2
function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return "rock";
  } else if (random === 1) {
    return "paper";
  } else {
    return "scissor";
  }
}
//let computerChoice = getComputerChoice();
//console.log(`Computer chooses ${computerChoice}`);
//console.log(`computerChoice is ${computerChoice}`);

//*********************** */ Human choice*************************/

function getHumansChoice() {
  let input = prompt("Rock,paper or sccisor");
  let userInput = input.toLowerCase();

  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissor"
  ) {
    return userInput;
  } else {
    alert("you entered wrong choice");
    return getHumansChoice();
  }
}

//let humanChoice = getHumansChoice();
//console.log(`Human chooses ${humanChoice}`);

/*****************Play Around */

function playRound(humanChose, computerChose) {
  if (
    (humanChose === "rock" && computerChose === "scissor") ||
    (humanChose === "scissor" && computerChose === "paper") ||
    (humanChose === "paper" && computerChose === "rock")
  ) {
    console.log(`Human wins because ${humanChose} beats ${computerChose}`);
    return "human";
  } else if (humanChose === computerChose) {
    console.log(
      `It is a tie because ${humanChose} doesn't beat ${computerChose}`
    );
    return "tie";
  } else if (
    (computerChose === "rock" && humanChose === "scissor") ||
    (computerChose === "scissor" && humanChose === "paper") ||
    (computerChose === "paper" && humanChose === "rock")
  ) {
    console.log(`Computer wins because ${computerChose} beats ${humanChose}`);
    return "computer";
  } else {
    return `wrong combination`;
  }
}

//const play1 = playRound(humanChoice, computerChoice);

// console.log(play1);

const playGame = function () {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 1; i <= 3; i++) {
    console.log(`🎮 Round ${i}`);
    const humanSelection = getHumansChoice();
    const computerSelection = getComputerChoice();
    // console.log(computerSelection);
    // console.log(humanSelection);
    let result = playRound(humanSelection, computerSelection);

    if (result === "human") {
      humanScore++;
    } else if (result === "computer") {
      computerScore++;
    }
    console.log(
      `Current Score → You: ${humanScore} | Computer: ${computerScore}`
    );
  }

  console.log("🏁 Final result");
  if (humanScore > computerScore) {
    console.log(
      `You are the champion you beat ${humanScore} by ${computerScore}`
    );
  } else if (computerScore > humanScore) {
    console.log(`Computer wins the game by ${computerScore} to ${humanScore} `);
  } else {
    console.log("It is an overall tie");
  }
};
playGame();
