let timeEl = document.getElementById('time');
let MainEl = document.getElementById('main');






function countdown() { /* timer that counts down */
    let secondsLeft = 150;
    

    let timeInterval = setInterval (function() {
    
    if (secondsLeft > 0) { /* as long as more than 1 sec remainers timer is decremended */
      
    timeEl.textContent = secondsLeft + 'seconds left' 
       
    secondsLeft--;
    } else if (secondsLeft === 1) {

        timeEl.textContent = secondsLeft = "second left"
        secondsLeft--;
    } else { /* if timer hits 0 then timer is cleared and send message function is called */
      
    timeEl.textContent = ""
    
    clearInterval(timerInterval);
    
    sendMessage();
    }
}, 1000);
}


function sendMessage() {
    timeEl.textContent = "";
    let imgEl = document.createElement("img");
    imgEl.setAttribute("src", "images/image_1.jpg") /*insert image path "" */
    MainEl.apendChild(imgEl);

}

const questions= [
    {
        question: "1. What does API Stand for?"
        selections: "Application Programming Interface", "Accessory Programming Interface", "Application Programming index", "Accessory Programming Index", "Application Planning Interface"
        correct: "Application Programming Interface"
    },

    {
        question: "2. Which of the following is not a primitive data type?"
        selections: "Boolean", "Object", "String", "Number", "Symbol"
        correct: "Object"
    },

    {
        question: "3. Which of the following is not and event in javascript?"
        selections: "onclick", "Offline", "keydown", "onaround", "onabort"
        correct: "onaround"
    },

    {
        question: "4. What does HTML stand for?"
        selections:"Hyper Text Markup Location", "Hyper Text Markdown Language", "Hyper Text Markup Language", "Hyper Text Markup Location"
        correct: "Hyper Text markup Language"
    },

    {
        question: "5. What does DOM stand for?"
        selections: "Data Object Model ","Document Object Model"
        correct: "Document Object Model"
    },

    {
        question: "6. What is the status of a webpage or an object called?"
        selections: "Static", "Summary", "State", "Solid"
        correct: "State"
    },

    {
        question: "7."
        selections:
        correct:
    },

    {
        question: "8."
        selections:
        correct:
    },

    {
        question: "9."
        selections:
        correct:
    },

    {
        question: "10."
        selections:
        correct: 
    },

    

]


const quiz = document.querySelector("quiz")

questions.array.forEach(question, index => {
    
});