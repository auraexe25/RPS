let userScore = 0;
let compScore = 0;

const choices= document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara= document.querySelector("#us");
const compScorePara= document.querySelector("#cs");


const genCompChoice=()=>{
    const options=["rock", "paper", "scissors"];
    const randidx=  Math.floor(Math.random()*3);
    return options[randidx];
}


const Drawgame=()=>{
    console.log("Game was Draw");
    msg.innerText="Game was Draw. Play Again!";
    msg.style.backgroundColor="blue";
}

const ShowWinner= (userWin) => {
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
      msg.innerText="You Win!";
      msg.style.backgroundColor="green";
    } else{
        compScore++;
        compScorePara.innerText=compScore;
       msg.innerText="You Lost!";
       msg.style.backgroundColor="red";
    }
}



const playGame=(userChoice) => {
    console.log("user choice = ", userChoice);
    const compChoice= genCompChoice();
    console.log("comp choice=", compChoice);

    if(userChoice===compChoice){
        Drawgame();
    } else {
        let userWin = true;
        if(userChoice==="rock"){
            //scissors, paper
            userWin = compChoice === "paper " ? false : true;
        }else if (userChoice==="paper"){
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else{
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        ShowWinner(userWin);
    }


};

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userchoice= choice.getAttribute("id");
        playGame(userchoice);
});
});