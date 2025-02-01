function getComputerChoice() {
    return ["Rock", "Paper", "Scissors"][Math.floor(Math.random() * 3 )];
  }

 let humanScore = 0, computerScore = 0;
 let roundResult = "";


function playGame() {
   
    let buttonRock = document.querySelector("#btnRock");
    let buttonPaper = document.querySelector("#btnPaper");
    let buttonScissors = document.querySelector("#btnScissors");

    buttonRock.addEventListener("click", () => playRound("Rock", getComputerChoice()));
    buttonPaper.addEventListener("click", () => playRound("Paper", getComputerChoice()));
    buttonScissors.addEventListener("click", () => playRound("Scissors", getComputerChoice()));}


 function playRound(humanChoice, computerChoice) {
      const winnerCases = [
        ["Rock", "Scissors"],
        ["Paper", "Rock"],
        ["Scissors", "Paper"],
      ];
      if (
        winnerCases.some(
          (pair) => pair[0] === humanChoice && pair[1] === computerChoice,
        )
      ) {
        roundResult = `You won! ${humanChoice} beats ${computerChoice}!`;
        humanScore++;
      } else if (
        winnerCases.some(
          (pair) => pair[0] === computerChoice && pair[1] === humanChoice,
        )
      ) {
        roundResult = `You lost! ${humanChoice} loses against ${computerChoice}!`;
        computerScore++;
      } else {
        roundResult = "It's a tie!";
      }
      displayScores();
      if(announceWinner()){
        document.querySelectorAll("button").forEach((button) => button.disabled = true);
      }
    }

function displayScores(){
  let scoreTable = document.querySelector("#scores");
  scoreTable.textContent = roundResult + `\nHuman: ${humanScore}, Computer: ${computerScore}`;
}

function announceWinner(){
  let result = document.querySelector("#result");
  let endthegame = false;
  if(humanScore === 5) {
    result.textContent = "You won the game!";
    endthegame = true;
  } else if(computerScore === 5){
    result.textContent = "You lost the game!";
    endthegame = true;
  }
  return endthegame;
}
 playGame();