/* Functions section */

function getComputerChoice () {

    const gameOptions = ["Rock","Paper","Scissors"];
    let randomNum = Math.round(2 * Math.random());

    return gameOptions[randomNum];
}

function getHumanChoice () {

    const gameOptions = ["Rock","Paper","Scissors"];
    let humanChoice = window.prompt("Write 0(Rock), 1(Paper) or 2(Scissors)",)

    return gameOptions[humanChoice];
}

/* Game Section */

console.log(getComputerChoice());
console.log(getHumanChoice());