const results = document.querySelector("#results")

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

function playRound(humanChoice, computerChoice) {
    const hc = humanChoice;
    const cc = computerChoice;
    const p = document.createElement('p');

    let humanScore = 0;
    let computerScore = 0;

    if (hc === cc) {
        p.textContent = "Tie";
        results.append(p);
    }
    else if (hc === "Rock" && cc === "Paper") {
        p.textContent = "Paper Beats Rock, You Lose";
        results.append(p);
        computerScore += 1;
    }
    else if (hc === "Paper" && cc === "Scissors") {
        p.textContent = "Scissors Beats Paper, You Lose";
        results.append(p);
        computerScore += 1;
    }
    else if (hc === "Scissors" && cc === "Rock") {
        p.textContent = "Rock Beats Scissors, You Lose";
        results.append(p);
        computerScore += 1;
    }
    else if (hc === "Paper" && cc === "Rock") {
        p.textContent = "Paper Beats Rock, You Win";
        results.append(p);
        humanScore += 1;
    }
    else if (hc === "Rock" && cc === "Scissors") {
        p.textContent = "Rock Beats Scissors, You Win";
        results.append(p);
        humanScore += 1;
    }
    else if (hc === "Scissors" && cc === "Paper") {
        p.textContent = "Scissors Beats Paper, You Win";
        results.append(p);
        humanScore += 1;
    }

    // hum_score.textContent = "Player Score = " + humanScore;
    // com_score.textContent = "Computer Score = " + computerScore;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    // for (i = 0; i < 5; i++) {
    //     let humanChoice = getHumanChoice();
    //     let computerChoice = getComputerChoice();
    //     playRound(humanChoice, computerChoice);
    // }

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

const rock = document.getElementById("#rock");
const paper = document.getElementById("#paper");
const scissors = document.getElementById("#scissors");

rock.addEventListener('click', () => {
    playRound(getComputerChoice(), "Rock");
});

paper.addEventListener("click", () => {
    playRound(getComputerChoice(), "Paper");
});

scissors.addEventListener("click", () => {
    playRound(getComputerChoice(), "Scissors");
});

playGame();