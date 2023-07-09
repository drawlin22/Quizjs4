
let timeLeft = 5;
let userQuestion = 0;

/* State Variables */
let answeredCorrect = 0;
let answeredIncorrect = 0;
let timer = 0; /*object */

let questions = [
    {
        question: "1. What does API Stand for?",
        selections: ["Application Programming Interface", "Accessory Programming Interface", "Application Programming index", "Accessory Programming Index", "Application Planning Interface"],
        correct: "Application Programming Interface",
    },

    {
        question: "2. Which of the following is not a primitive data type?",
        selections: ["Boolean", "Object", "String", "Number", "Symbol"],
        correct: "Object",
    },

    {
        question: "3. Which of the following is not and event in javascript?",
        selections: ["onclick", "Offline", "keydown", "onaround", "onabort"],
        correct: "onaround",
    },

    {
        question: "4. What does HTML stand for?",
        selections: ["Hyper Text Markup Location", "Hyper Text Markdown Language", "Hyper Text Markup Language", "Hyper Text Markup Location"],
        correct: "Hyper Text markup Language",
    },

    {
        question: "5. What does DOM stand for?",
        selections: ["Data Object Model ","Document Object Model"],
        correct: "Document Object Model",
    },

    
];

function showQuestions(question, selections) {

    let gameQuestion = document.createTextNode(question)
    document.getElementById('.display').appendChild(gameQuestion); /* phind shows single quotes not double for selecting by ID */
    
    for (let i=0; i < selections.length; i++) {
        const liTag = document.createElement('li');
        const textNode = document.createTextNode(selections[i])
        li.appendChild(textNode);
        li.addEventListener("click", userChoice);
        document.getElementById("userSelection").appendChild(li);
    }
    
    
    
    
    
    
    // let ulTag = document.createElement("ol"); /* create the ordered list element */
    // let liTag1 = document.createElement(li);
    // let liTag2 = document.createElement(li);
    // let liTag3 = document.createElement(li);
    // let liTag4 = document.createElement(li);
    
    // liTag1.textContent = questions[0].selections[0];
    // liTag2.textContent = questions[0].selections[1];
    // liTag3.textContent = questions[0].selections[2];
    // liTag4.textContent = questions[0].selections[3];
    
    // gameDisplay.appendChild(ulTag);
    // ulTag.appendChild(liTag1)
    // ulTag.appendChild(liTag1)
    // ulTag.appendChild(liTag3)
    // ulTag.appendChild(liTag4)
    

        }

function userChoice() {

}

function startTest() { /* called by the event handler click */
    // showQuestions(questions[currentQuestion].question, questions[currentQuestion.selections]);
    countDown(); /* calls the countdown function to start ticking */
    showQuestions(); /* calls the game questions to populate */
}


function countDown() { /* Called from the startTest function */
   
var timeInterval = setInterval (function () {
    let timerEl = document.getElementById('timer');
    if (timeLeft >= 0) { /* while time is greater than 0 it is decreased by 1 second*/
        timerEl.textContent = timeLeft 
        timeLeft--;
    } else { /* once the time runs outs, clock stops and endGame function is called */
        timerEl.textContent = '';
        clearInterval(timeInterval);
        endGame()
    }
}, 1000);

}


function updateScore () {
    let answeredCorrect = document.getElementById('answeredCorrectly');
    let answeredIncorrect = document.getElementById('answeredIncorrectly');

    answeredCorrect=0;
    answeredIncorrect=0;
}


let startBtn = document.querySelector(".btn");
startBtn.addEventListener("click", startTest); /* once the even 'click' button is heard then the startTest function is called. */ 


function endGame () {
    updateScore() /* once endGame function is triggered updateScore function is called */
console.log ("game over")
}
