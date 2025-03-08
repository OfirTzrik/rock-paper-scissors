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
        switch(computerChoice) {
            // Computer chose rock
            case "rock":
                switch(playerChoice) {
                    case "rock":
                        console.log("It's a draw!");
                        break;
                    case "paper":
                        console.log("You win! Paper beats rock.");
                        playerScore++;
                        break;
                    case "scissors":
                        console.log("You lose! Rock beats scissors.");
                        computerScore;
                        break;
                }
                break;
            // Computer chose paper
            case "paper":
                switch(playerChoice) {
                    case "rock":
                        console.log("You lose! Paper beats rock.");
                        computerScore++;
                        break;
                    case "paper":
                        console.log("It's a draw!");
                        break;
                    case "scissors":
                        console.log("You win! Scissors beats paper.");
                        playerScore++;
                        break;
                }
                break;
            // Computer chose scissors
            case "scissors":
                switch(playerChoice) {
                    case "rock":
                        console.log("You win! Rock beats scissors.");
                        playerScore++;
                        break;
                    case "paper":
                        console.log("You lose! Scissors beats paper.");
                        computerScore++;
                        break;
                    case "scissors":
                        console.log("It's a draw!");
                        break;
                }
                break;
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