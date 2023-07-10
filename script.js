
let timeLeft = 50;
let questionIndex = 0;

/* State Variables */
let answeredCorrect = 0;
let answeredIncorrect = 0;

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
        selections: ["Data Object Model ","Document Object Model", "Dell Object Model", "Delta Object Model"],
        correct: "Document Object Model",
    },

];

function showQuestions(currentQuestion) {
    document.getElementById("display").innerHTML="";
    document.getElementById("userSelection").innerHTML="";
    let gameQuestion = document.createTextNode(currentQuestion.question)
    document.getElementById("display").appendChild(gameQuestion); 
    
    for (let i=0; i < currentQuestion.selections.length; i++) {
        const liTag = document.createElement('button');
        const textNode = document.createTextNode(currentQuestion.selections[i])
        liTag.appendChild(textNode);
        liTag.addEventListener("click", userChoice);
        document.getElementById("userSelection").appendChild(liTag);
        
    }
}    
     
function userCorrect() { /*called by the userChoice event */
answeredCorrect++ /* Correct tally is increased by 1 for correct answer */

}

function userIncorrect() { /*called by the userChoice event */
answeredIncorrect++ /* Incorrect tally is increased by 1 for incorrect answer */
timeLeft -= 15; /* time is decremented by 5 seconds for incorrect choice */
}

function userChoice(event) {
   let userChoice = event.target.textContent /* user choice is the target of the click */
    let correctChoice = questions[questionIndex].correct;
    if (userChoice === correctChoice) {
        userCorrect() /* if the correct choice is made them the userCorrect function is called */
    }else {
        userIncorrect() /* if the incorrect choice is made them the userIncorrect function is called */
    }
    // updateScore()
    questionIndex++
    showQuestions(questions[questionIndex]);
}

function startTest() { /* called by the event handler click */
    showQuestions(questions[questionIndex]);
    countDown(); /* calls the countdown function to start ticking */
//     showQuestions(); /* calls the game questions to populate */
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
    let correct = document.getElementById('answeredCorrectly');
    let incorrect = document.getElementById('answeredIncorrectly');

    correct.textContent = "correct: " + answeredCorrect
    incorrect.textContent = "incorrect: " + answeredIncorrect
}


let startBtn = document.querySelector(".btn");
let h3 = document.querySelector(".h3")
let l1 = document.querySelector(".l1")
let l2 = document.querySelector(".l2")
let l3 = document.querySelector(".l3")
startBtn.addEventListener("click", startTest) 
startBtn.addEventListener("click", () => {
    startBtn.style.display = 'none';
   });
 startBtn.addEventListener("click", () => {
    h3.style.display = 'none';
 })  ;
 startBtn.addEventListener("click", () => {
    l1.style.display = 'none';
 })  ;
 startBtn.addEventListener("click", () => {
    l2.style.display = 'none';
 })  ;
 startBtn.addEventListener("click", () => {
    l3.style.display = 'none';
 })  ;
   
   /* once the event 'click' button is heard then the startTest function is called. */ 

    const noHighScores = 10;
    const HIGHSCORES = 'highScores';
    const highScoreString = localStorage.getItem(HIGHSCORES);
    const highScores = JSON.parse(highScoreString)??[];
    const lowestScore = highScores[noHighScores-1]?.score ?? 0;

function endGame () {
    updateScore() /* once endGame function is triggered updateScore function is called */
    
    
    function highScorefunc() { /*michael-karen.medium.com */
        const highScore = JSON.parse(localStorage.getItem(HIGHSCORES)) ?? [];
        const lowestScore = highScore[highScores-1]?.score ?? 0;

        if (score > lowestScore) {
            saveHighScore(score, highScores);
        const name = prompt('You got a high score! Enter your name: ')    
}
    }
};

