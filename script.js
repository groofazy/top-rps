const results = document.getElementById("results");
const rock = document.getElementById("#rock");
const paper = document.getElementById("#paper");
const scissors = document.getElementById("#scissors");
let computerScore = 0, humanScore = 0, ties = 0;

rock.addEventListener('click', () => {
    game("Rock");
});

paper.addEventListener("click", () => {
    game("Paper");
});

scissors.addEventListener("click", () => {
    game("Scissors");
});

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 0) {
        computerChoice = "Rock";
    }
    else if (computerChoice == 1) {
        computerChoice = "Paper";
    }
    else if (computerChoice == 2) {
        computerChoice = "Scissors";
    }
    return computerChoice;
};

function playRound(computerChoice, humanChoice) {
    const hc = humanChoice;
    const cc = computerChoice;
    let outcome;

    if (hc === cc) {
        outcome = "Tie";
    }
    else if (hc === "Rock" && cc === "Paper") {
        outcome = "Computer";
    }
    else if (hc === "Paper" && cc === "Scissors") {
        outcome = "Computer";
    }
    else if (hc === "Scissors" && cc === "Rock") {
        outcome = "Computer";
    }
    else if (hc === "Paper" && cc === "Rock") {
        outcome = "Human";
    }
    else if (hc === "Rock" && cc === "Scissors") {
        outcome = "Human";
    }
    else if (hc === "Scissors" && cc === "Paper") {
        outcome = "Human";
    }

    displayGame(cc, hc, outcome);
    return outcome;
}

function displayGame(computerChoice, humanChoice, result) {
    let textContent = '';
    
    if (result == "Computer") {
        computerScore++;
    }
    else if (result == "Human") {
        humanScore++;
    }
    else {
        ++ties;
    }

    textContent = `
    Computer: ${computerChoice}
    Human: ${humanChoice}
    Winner: ${result}
    Human Wins: ${humanScore}
    Computer Wins: ${computerScore}
    Ties: ${ties}`;

    results.innerHTML = textContent;

    if( humanScore >= 5 || computerScore >= 5) {
        const winText = (humanScore > computerScore)? 'Won by human': 'Won by machine';
        humanCount = 0;
        machineCount = 0;
        ties = 0;
        alert(winText);
      }
}

function game(humanChoice) {
    const hc = humanChoice;
    const cc = getComputerChoice();

    const winner = playRound(cc, hc);
    if (winner === "Human") return "Human Won";
    else if (winner === "Computer") return "Computer Won";
    else return "Tie";
};