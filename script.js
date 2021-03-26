// Go back to your “Rock Paper Scissors” game from a previous lesson and give it a simple UI so that the player can play the game 
// by clicking on buttons rather than typing their answer in a prompt.

// Copy your original code into a new file so you don’t lose it.
// For now, remove the logic that plays exactly five rounds.
// Create three buttons, one for each selection. Add an event listener to the buttons that calls your playRound function with the correct 
// playerSelection every time a button is clicked. (you can keep the console.logs for this step)
// Add a div for displaying results and change all of your console.logs into DOM methods.
// Display the running score, and announce a winner of the game once one player reaches 5 points.
// You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of the programmer’s life.
// Don’t forget to go back and add your new version to the original Rock Paper Scissors Project!

const choiceBtns = document.querySelector("#choices");

choiceBtns.childNodes.forEach(element => {
    element.addEventListener('click', () => { 
        war(element.id);
    });
});

const score = {
    "user": 5,
    "robot": 5,
};

const wins = 0;


function war(userChoice) {
    const robotChoice = getRobotChoice();
    fight(userChoice, robotChoice);
    
    if (score["user"] == 0) {
        wins += 1;
        endScreen("robot");

        console.log("%cLOSE", "background-color: red; font-size: 20px;");
    }
    else if (score["robot"] == 0) {
        wins = 0;
        endScreen("user");

        console.log("%cWIN", "background-color: green; font-size: 20px;");
    }
}

function fight(userChoice, robotChoice) {
    const winTable = {
        "paper": "rock",
        "scissors": "paper",
        "rock": "scissors",
    };
    
    if (winTable[userChoice] === robotChoice) {
        score["robot"] -= 1;
        
        console.log("Win!")
        
        // win animation
    }
    else if (winTable[robotChoice] === userChoice) {
        score["user"] -= 1;
        
        console.log("Lose!")
        
        // lose animation
    }
    else {
        console.log("Draw!")
        
        // draw animation
    }
}

function getRobotChoice() {
    const choices = ["paper", "scissors", "rock"];

    return choices[Math.floor(Math.random() * 3)];
}

function endScreen(winner) {
    score["user"] = 5;
    score["robot"] = 5;
}