function getComputerChoice() {
  const randomNum = Math.random();

  if (randomNum < 1/3) {
    return "rock";
  } else if (randomNum < 2/3) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Test
console.log("Computer chose:", getComputerChoice());
function getHumanChoice() {
  const choice = prompt("Enter your choice: rock, paper, or scissors");
  return choice;
}

// Test
// console.log("You chose:", getHumanChoice());
let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice, computerChoice) {
  const human = humanChoice.toLowerCase();
  const computer = computerChoice;

  if (human === computer) {
    console.log("It's a tie!");
  } else if (
    (human === "rock" && computer === "scissors") ||
    (human === "paper" && computer === "rock") ||
    (human === "scissors" && computer === "paper")
  ) {
    console.log(`You win! ${human} beats ${computer}`);
    humanScore++;
  } else {
    console.log(`You lose! ${computer} beats ${human}`);
    computerScore++;
  }
}
