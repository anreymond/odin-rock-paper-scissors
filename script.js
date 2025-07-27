function getComputerChoice() {
    let rand = Math.floor(3 * Math.random());

    switch (rand) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            return "unexpected";
    }
}

function getHumanChoice() {
    return prompt("Make your next move!", "rock, paper or scissors");
}

function playRound(humanChoice, computerChoice) {
    switch (humanChoice) {
        case "rock":
            switch (computerChoice) {
                case "rock":
                    console.log("It's a tie!");
                    break;
                case "paper":
                    computerScore++;
                    console.log("You lose! Paper beats Rock");
                    break;
                case "scissors":
                    humanScore++;
                    console.log("You win! Rock beats Scissors");
                    break;
                default:
                    console.log("unexpected");
                    break;
            }
            break;
        case "paper":
            switch (computerChoice) {
                case "rock":
                    humanScore++;
                    console.log("You win! Paper beats Rock");
                    break;
                case "paper":
                    console.log("It's a tie!");
                    break;
                case "scissors":
                    computerScore++;
                    console.log("You lose! Scissors beat Paper");
                    break;
                default:
                    console.log("unexpected");
                    break;
            }
            break;
        case "scissors":
            switch (computerChoice) {
                case "rock":
                    computerScore++;
                    console.log("You lose! Rock beats Scissors");
                    break;
                case "paper":
                    humanScore++
                    console.log("You win! Scissors beat Paper");
                    break;
                case "scissors":
                    console.log("It's a tie!");
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
}


let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);




