/* Functions section */

function getComputerChoice () {

    const gameOptions = ["Rock","Paper","Scissors"];
    let randomNum = Math.round(3 * Math.random());

    return gameOptions[randomNum];
}

/* Game Section */

console.log(getComputerChoice());