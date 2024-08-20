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


const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors");

let humanScore = 0;
let computerScore = 0;
let computerChoice;


rock.addEventListener("click", () => {
    let humanChoice = "rock"
    computerChoice = getComputerChoice()
    function playRound(humanChoice, computerChoice){
        console.log(humanChoice)
        console.log(computerChoice)
        if(humanChoice === computerChoice){
            console.log("It's a tie!");
        } else if(humanChoice === "rock" && computerChoice === "paper"){
            console.log("You lose! Paper beats Rock.");
            computerScore++;
            document.getElementById('computer').innerHTML = "CPU SCORE: " + computerScore;
            if(computerScore === 5){
                alert("You lose! Play again!")
                computerScore = 0
                humanScore = 0
                document.getElementById('computer').innerHTML = "CPU SCORE: " + computerScore;
                document.getElementById('user').innerHTML = "YOUR SCORE: " + humanScore;
            }
        } else if (humanChoice === "rock" && computerChoice === "scissors"){
            console.log("You win! Rock beats Scissors.");
            humanScore++;
            document.getElementById('user').innerHTML = "YOUR SCORE: " + humanScore;
            if(humanScore === 5){
                alert("You win! Play again!")
                computerScore = 0
                humanScore =0
                document.getElementById('computer').innerHTML = "CPU SCORE: " + computerScore;
                document.getElementById('user').innerHTML = "YOUR SCORE: " + humanScore;
            }
        } 
    }
    playRound(humanChoice, computerChoice)
})


paper.addEventListener("click", () => {
    let humanChoice = "paper"
    computerChoice = getComputerChoice()
    function playRound(humanChoice, computerChoice){
        console.log(humanChoice)
        console.log(computerChoice)
        if(humanChoice === computerChoice){
            console.log("It's a tie!");
        } else if(humanChoice === "paper" && computerChoice === "scissors"){
            console.log("You lose! Scissors beats paper.");
            computerScore++;
            document.getElementById('computer').innerHTML = "CPU SCORE: " + computerScore;
            if(computerScore === 5){
                alert("You lose! Play again!")
                computerScore = 0
                humanScore = 0
                document.getElementById('computer').innerHTML = "CPU SCORE: " + computerScore;
                document.getElementById('user').innerHTML = "YOUR SCORE: " + humanScore;
            }
        } else if (humanChoice === "paper" && computerChoice === "rock"){
            console.log("You win! Paper beats scissors.");
            humanScore++;
            document.getElementById('user').innerHTML = "YOUR SCORE: " + humanScore;
            if(humanScore === 5){
                alert("You win! Play again!")
                computerScore = 0
                humanScore =0
                document.getElementById('computer').innerHTML = "CPU SCORE: " + computerScore;
                document.getElementById('user').innerHTML = "YOUR SCORE: " + humanScore;
            }
        } 
    }
    playRound(humanChoice, computerChoice)
})


scissors.addEventListener("click", () => {
    let humanChoice = "scissors"
    computerChoice = getComputerChoice()
    function playRound(humanChoice, computerChoice){
        console.log(humanChoice)
        console.log(computerChoice)
        if(humanChoice === computerChoice){
            console.log("It's a tie!");
        } else if(humanChoice === "scissors" && computerChoice === "rock"){
            console.log("You lose! Rock beats scissors.");
            computerScore++;
            document.getElementById('computer').innerHTML = "CPU SCORE: " + computerScore;
            if(computerScore === 5){
                alert("You lose! Play again!")
                computerScore = 0
                humanScore = 0
                document.getElementById('computer').innerHTML = "CPU SCORE: " + computerScore;
                document.getElementById('user').innerHTML = "YOUR SCORE: " + humanScore;
            }
        } else if (humanChoice === "scissors" && computerChoice === "paper"){
            console.log("You win! Scissors beats paper.");
            humanScore++;
            document.getElementById('user').innerHTML = "YOUR SCORE: " + humanScore;
            if(humanScore === 5){
                alert("You win! Play again!")
                computerScore = 0
                humanScore =0
                document.getElementById('computer').innerHTML = "CPU SCORE: " + computerScore;
                document.getElementById('user').innerHTML = "YOUR SCORE: " + humanScore;
            }
        } 
    }
    playRound(humanChoice, computerChoice)
})

