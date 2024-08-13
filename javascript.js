//Return rock, paper, or scissors depending on randomNum
function getComputerChoice(){
    //Obtain a random number between 1 and 3
    let randomNum = Math.floor(Math.random() * 3) + 1;

    if(randomNum === 1){
        return "rock";
    } else if (randomNum === 2){
        return "paper";
    } else {
        return "scissors";
    }
}

//Obtain user choice and return it
function getHumanChoice(){
    let input = prompt("Choose rock, paper, or scissors.");
    input = input.toLowerCase();
    console.log(input)
    return input;
}




function playGame(){
    let humanScore = 0, computerScore = 0;
    function playRound(humanChoice, computerChoice){
        if(humanChoice === computerChoice){
            console.log("It's a tie!");
        } else if(humanChoice === "rock" && computerChoice === "paper"){
            console.log("You lose! Paper beats Rock.");
            computerScore++;
        } else if (humanChoice === "rock" && computerChoice === "scissors"){
            console.log("You win! Rock beats Scissors.");
            humanScore++;
        } else if (humanChoice === "paper" && computerChoice === "scissors"){
            console.log("You lose! Scissors beats Paper.");
            computerScore++;
        } else if (humanChoice === "paper" && computerChoice === "rock"){
            console.log("You win! Paper beats Rock!");
            humanScore++;
        } else if (humanChoice === "scissors" && computerChoice === "rock"){
            console.log("You lose! Rock beats scissors.");
            computerScore++;
        } else if (humanChoice === "scissors" && computerChoice === "paper"){
            console.log("You win! Scissors beats paper.");
            humanScore++;
        } else{
            alert("Wrong input");
        }

    }

    let game = true;
    while(game){
        if(humanScore != 5 && computerScore != 5){
            playRound(getHumanChoice(), getComputerChoice());
            console.log("Computer score: " + computerScore);
            console.log("Human score: " + humanScore);
        } else if (humanScore === 5){
            console.log("You win!");
            game = false;
        } else {
            console.log("You lose!");
            game = false;
        }
    }
}


playGame();