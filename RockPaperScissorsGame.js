/* Functions section */

function getComputerChoice() {

    const gameOptions = ["Rock", "Paper", "Scissors"];
    let randomNum = Math.round(2 * Math.random());

    return gameOptions[randomNum];
}

function getHumanChoice() {

    const gameOptions = ["Rock", "Paper", "Scissors"];
    let humanChoice = window.prompt("Write 0(Rock), 1(Paper) or 2(Scissors)",)

    return gameOptions[humanChoice];
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice == "Rock" && computerChoice == "Paper") {
        return "Computer wins"
    }
    else if (humanChoice == "Rock" && computerChoice == "Rock") {
        return "Draw"
    }
    else if (humanChoice == "Rock" && computerChoice == "Scissors") {
        return "Human wins"
    }

    else if (humanChoice == "Paper" && computerChoice == "Scissors") {
        return "Computer wins"
    }
    else if (humanChoice == "Paper" && computerChoice == "Paper") {
        return "Draw"
    }
    else if (humanChoice == "Paper" && computerChoice == "Rock") {
        return "Human wins"
    }

    else if (humanChoice == "Scissors" && computerChoice == "Rock") {
        return "Computer wins"
    }
    else if (humanChoice == "Scissors" && computerChoice == "Scissors") {
        return "Draw"
    }
    else if (humanChoice == "Scissors" && computerChoice == "Paper") {
        return "Human wins"
    }
    else {
        return "error"
    }

}

function getWinnerPoints(winner) {

    let addScore = [0, 0] /* First add to human score, second to computer score */

    if (winner == "Computer wins") {
        addScore[1] = 1;
    }
    else if (winner == "Human wins") {
        addScore[0] = 1;
    }
    else { }
    return addScore;

}

function playGame() {
    let rounds = 0;
    let scores = [0, 0]; /* First is human score, second is computer score */
    let addToScores = [0, 0];
    while (rounds < 5) {

        computerGameChoice = getComputerChoice();
        humanGameChoice = getHumanChoice();

        console.log(`Computer selects ${computerGameChoice} and Human selects ${humanGameChoice}`);

        winner = playRound(humanGameChoice, computerGameChoice);

        console.log(winner);

        addToScores = getWinnerPoints(winner);
        scores[0]=scores[0]+addToScores[0];
        scores[1]=scores[1]+addToScores[1];

        console.log(`The scores are: HUMAN ${scores[0]} points and COMPUTER ${scores[1]} points`)

        rounds++;

    }

    if (scores[0] > scores[1]){
        console.log("Human is the final winner!!!");
    }
    else if (scores[0] < scores[1]){
        console.log("Computer is the final winner!!!");
    }
    else{
        console.log("There is a draw");
    }
    return ;
}

/* Game Section */

playGame();
