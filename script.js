
let timeLeft = 80;
let questionIndex = 0;
let timeInterval;


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

let input = document.getElementById("input")
let submit = document.getElementById("submit")
let h4 = document.getElementById('h4')
    input.style.display = 'none';
    submit.style.display = 'none';
    h4.style.display = 'none';

function showQuestions(currentQuestion) {
    // if (questionIndex === questions.length) {
    //     return;
    
    // }
    
    try { document.getElementById("display").innerHTML="";
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
   catch (e){
    console.log("")
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
    if (questionIndex === questions.length) {
        endGame()
    }
    showQuestions(questions[questionIndex]);
}

function startTest() { /* called by the event handler click */
    showQuestions(questions[questionIndex]);
    countDown(); /* calls the countdown function to start ticking */
//     showQuestions(); /* calls the game questions to populate */
}


function countDown() { /* Called from the startTest function */
   
    timeInterval = setInterval (function () {
    let timerEl = document.getElementById('timer');
    if (timeLeft >= 0) { /* while time is greater than 0 it is decreased by 1 second*/
        timerEl.textContent = "Time Remaining: " + timeLeft 
        timeLeft--;
    } else { /* once the time runs outs, clock stops and endGame function is called */
        // timerEl.textContent = ''; /*add alert for time out */
        clearInterval(timeInterval);
        endGame()
    }
}, 1000);

}

function updateScore () {
  clearInterval(timeInterval);
    let correct = document.getElementById('answeredCorrectly');
    let incorrect = document.getElementById('answeredIncorrectly');
    let highScore = document.querySelector(".highScore")
    // let winner = timeLeft + answeredCorrect
   

    correct.textContent = "correct: " + answeredCorrect
    incorrect.textContent = "incorrect: " + answeredIncorrect

    input.style.display = 'block';
    submit.style.display = 'block';
    h4.style.display = 'block';

    submit.addEventListener("click", highScorefunc)
    event.preventDefault()

    function highScorefunc(event) {
        event.preventDefault()
        let input = document.getElementById("input")
        let getStudent = JSON.parse(localStorage.getItem("scoreBoard")) || [] 
        let totalScore= answeredCorrect
        let scoreBoard = {
        student: input.value,
        score: totalScore
    }
getStudent.push(scoreBoard)


    let userJason = JSON.stringify(getStudent) /* new array */
    
        localStorage.setItem("scoreBoard", userJason);
       

    
    for (let i=0; i < getStudent.length; i++) {
        let score = document.createElement("li")
        score.textContent = "Student: "+ getStudent[i].student + "Score: " + getStudent[i].score
        highScore.appendChild(score) 
       
        
    }
    }
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


function endGame () {
    updateScore() /* once endGame function is triggered updateScore function is called */
}
    

    

    


