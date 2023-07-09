
let timeLeft = 5;


/* State Variables */
let answeredCorrect = 0;
let answeredIncorrect = 0;
let timer = 0; /*object */

function showQuestions() {
let gameDisplay = document.getElementById('.display'); /* phind shows single quotes not double for selecting by ID */
let ulTag = document.createElement("ol"); /* create the ordered list element */
let liTag1 = document.createElement(li);
let liTag2 = document.createElement(li);
let liTag3 = document.createElement(li);
let liTag4 = document.createElement(li);

liTag1.textContent = /*Selections */
liTag2.textContent = /*Selections */
liTag3.textContent = /*Selections */
liTag4.textContent = /*Selections */

ulTag.appendChild(gameDisplay);
gameDisplay.appendChild(liTag1)
gameDisplay.appendChild(liTag1)
gameDisplay.appendChild(liTag3)
gameDisplay.appendChild(liTag4)

for (let i=0; i < questions.length; i++) {

}
    }

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

function countDown() {
   
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
startBtn.addEventListener("click", countDown); /* once the even 'click' button is heard then the countdown function is called. */ 


function endGame () {
    updateScore() /* once endGame function is triggered updateScore function is called */
console.log ("game over")
}
