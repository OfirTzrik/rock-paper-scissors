let computerScore = 0;
let playerScore = 0;

/*
    Return a random choice for the computer, rock, paper or scissors
*/
function getComputerChoice() {
    let randomChoice = Math.random();

    if(randomChoice < 0.34) {
        return "rock";
    } else if(randomChoice >= 0.34 && randomChoice < 0.67) {
        return "paper";
    } else {
        return "scissors";
    }
}

/*
    Get a choice from the player
*/
function getPlayerChoice() {
    return prompt("Choose: Rock, Paper or Scissors?").toLowerCase();
}

/*
    Play 5 rounds of Rock, Paper, Scissors
*/
function playGame() {
    let computerScore = 0;
    let playerScore = 0;

    /*
        Play a single round of Rock, Paper, Scissors
    */
    function playRound(computerChoice, playerChoice) {
        if(computerChoice === "rock") {
            if(playerChoice === "rock") {
                console.log("It's a draw!");
            } else if(playerChoice === "paper") {
                console.log("You win! Paper beats rock.");
                playerScore++;
            } else {
                console.log("You lose! Rock beats scissors.");
                computerScore++;
            }
        } else if(computerChoice === "paper") {
            if(playerChoice === "rock") {
                console.log("You lose! Paper beats rock.");
                computerScore++;
            } else if(playerChoice === "paper") {
                console.log("It's a draw!");
            } else {
                console.log("You win! Scissors beats paper.");
                playerScore++;
            }
        } else {
            if(playerChoice === "rock") {
                console.log("You win! Rock beats scissors.");
                playerScore++;
            } else if(playerChoice === "paper") {
                console.log("You lose! Scissors beats paper.");
                computerScore++;
            } else {
                console.log("It's a draw!");
            }
        }
    }

    for(let i = 0; i < 5; i++) {
        playRound(getComputerChoice(), getPlayerChoice());
    }

    if(computerScore > playerScore) {
        console.log(`You lose!\nComputer Score: ${computerScore}\nPlayer Score: ${playerScore}`);
    } else if (computerScore < playerScore) {
        console.log(`You win!\nComputer Score: ${computerScore}\nPlayer Score: ${playerScore}`);
    } else {
        console.log(`It's a draw! Computer Score = Player Score = ${computerScore}`);
    }
}

playGame(); // Play the game