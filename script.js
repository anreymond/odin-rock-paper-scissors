function getComputerChoice() {
    let rand = Math.floor(3 * Math.random());
    let moves = ["rock", "paper", "scissors"];
    return moves[rand];
}

let scores = [0, 0];

let buttons = document.querySelectorAll("button");

buttons.forEach(button => button.addEventListener("click", playRound));

function playRound(e) {
    let humanChoice = e.target.id;
    let computerChoice = getComputerChoice();
    let resDiv = document.querySelector("#results");
    switch (humanChoice) {
        case "rock":
            switch (computerChoice) {
                case "rock":
                    resDiv.textContent = "It's a tie!";
                    break;
                case "paper":
                    scores[1]++;
                    resDiv.textContent = "You lose! Paper beats Rock";
                    break;
                case "scissors":
                    scores[0]++;
                    resDiv.textContent = "You win! Rock beats Scissors";
                    break;
                default:
                    console.log("unexpected");
                    break;
            }
            break;
        case "paper":
            switch (computerChoice) {
                case "rock":
                    scores[0]++;
                    resDiv.textContent = "You win! Paper beats Rock";
                    break;
                case "paper":
                    resDiv.textContent = "It's a tie!";
                    break;
                case "scissors":
                    scores[1]++;
                    resDiv.textContent = "You lose! Scissors beat Paper";
                    break;
                default:
                    console.log("unexpected");
                    break;
            }
            break;
        case "scissors":
            switch (computerChoice) {
                case "rock":
                    scores[1]++;
                    resDiv.textContent = "You lose! Rock beats Scissors";
                    break;
                case "paper":
                    scores[0]++;
                    resDiv.textContent = "You win! Scissors beat Paper";
                    break;
                case "scissors":
                    resDiv.textContent = "It's a tie!";
                    break;
                default:
                    console.log("unexpected");
                    break;
            }
            break;
        default:
            console.log("Please make a valid move.");
            break;
    }
    let playerScore = document.querySelector("#player-score");
    let computerScore = document.querySelector("#computer-score");
    playerScore.textContent = scores[0];
    computerScore.textContent = scores[1];
    if (scores[0] >= 5 || scores[1] >= 5) {
        buttons.forEach(button => button.remove());
        let body = document.querySelector("body");
        let finalRes = document.createElement("div");
        finalRes.textContent = scores[0] >= 5 ? "You won the game!" : "You lost the game...";
        body.appendChild(finalRes);
    }
}

