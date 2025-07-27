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

console.log(getComputerChoice());