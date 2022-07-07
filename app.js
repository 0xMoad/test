const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if(userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === "bomb"){
      return userInput
    } else {
      console.log("Error, please type in rock, scissors or paper")
    }
  }
  
  const getComputerChoice = () => {
    let num = Math.floor(Math.random() * 3);
    switch(num){
      case 0:
      return "rock";
      break; 
      case 1:
      return "paper";
      break;
      case 2: 
      return "scissors";
      break;
    }
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === computerChoice){
      return "The game is a tie!"
    };
    if(userChoice === "rock"){
      if(computerChoice === "paper"){
        return "The computer won!"
      } else {
        return  "The user won!"
      }
    }
    if(userChoice === "paper"){
      if(computerChoice === "scissors"){
        return "The Computer won!"
      } else {
        return "The user won!";
      }
    };
    if(userChoice === "paper"){
      if(computerChoice === "rock"){
        return "The user won!";
      } else {
        return "The computer won!"
      }
    };
    if(userChoice === "scissors"){
      if(computerChoice === "rock"){
        return "The computer won!"
      } else {
        return "The user won!"
      }
    };
    if(userChoice === "scissors"){
      if(computerChoice === "paper"){
        return "The user won!"
      } else {
        return "The computer won!"
      }
    };
    if(userChoice === "bomb"){
      return "YOU WON BABY"
    }
  }
  
  
  const playGame = () => {
    let userChoice = getUserChoice("bomb");
    let computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame();
  
  
  