function getComputerChoice() {
    const num = Math.floor(Math.random() * 3);
    if (num == 0) {
        return ("Rock");
    }
    else if (num == 1) {
        return ("Paper");
    }
    else if (num == 2) {
        return ("Scissors");
    }
}

function getHumanChoice() {
    let choice = window.prompt("Rock Paper or Scissors?");
    return choice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        const hc = humanChoice;
        const cc = computerChoice;
    
        if (hc === cc) {
            console.log("Tie");
        }
        else if (hc === "Rock" && cc === "Paper") {
            console.log("Paper Beats Rock, You Lose");
            computerScore += 1;
        }
        else if (hc === "Paper" && cc === "Scissors") {
            console.log("Scissors Beats Paper, You Lose");
            computerScore += 1;
        }
        else if (hc === "Scissors" && cc === "Rock") {
            console.log("Rock Beats Scissors, You Lose");
            computerScore += 1;
        }
        else if (hc === "Paper" && cc === "Rock") {
            console.log("Paper Beats Rock, You Win");
            humanScore += 1;
        }
        else if (hc === "Rock" && cc === "Scissors") {
            console.log("Rock Beats Scissors, You Win");
            humanScore += 1;
        }
        else if (hc === "Scissors" && cc === "Paper") {
            console.log("Scissors Beats Paper, You Win");
            humanScore += 1;
        }
    
        console.log("Player Score = " + humanScore);
        console.log("Computer Score = " + computerScore);
    }

    for (i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    if (humanScore < computerScore) {
        console.log("You Lose");
    }
    else if (humanScore > computerScore) {
        console.log("You Win")
    }
    else {
        console.log("Tie Game")
    }
}

playGame();