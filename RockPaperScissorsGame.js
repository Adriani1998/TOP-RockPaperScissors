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

function playRound (humanChoice, computerChoice) {

    if (humanChoice=="Rock" && computerChoice=="Paper"){
        return "Computer wins"
    }
    else if (humanChoice=="Rock" && computerChoice=="Rock"){
        return "Draw"
    }
    else if (humanChoice=="Rock" && computerChoice=="Scissors"){
        return "Human wins"
    }

    else if (humanChoice=="Paper" && computerChoice=="Scissors"){
        return "Computer wins"
    }
    else if (humanChoice=="Paper" && computerChoice=="Paper"){
        return "Draw"
    }
    else if (humanChoice=="Paper" && computerChoice=="Rock"){
        return "Human wins"
    }

    else if (humanChoice=="Scissors" && computerChoice=="Rock"){
        return "Computer wins"
    }
    else if (humanChoice=="Scissors" && computerChoice=="Scissors"){
        return "Draw"
    }
    else if (humanChoice=="Scissors" && computerChoice=="Paper"){
        return "Human wins"
    }
    else {
        return "error"
    }

}

/* Game Section */

let scores = [0,0] /* First is human score, second is computer score */
