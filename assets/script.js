//Define constant variables 
const startButton = document.getElementById('start-btn');
const questionEl = document.getElementById('quiz-question-container');
const questionActual = document.getElementById('question'); 
const clockEl = document.getElementById('clock-counter'); 
var currentQuestionIndex = 0; 
var clock = 60; 


//Add event listener for Start Button 
startButton.addEventListener('click', startQuiz);


//Function for beginning quiz 
function startQuiz() {
var intervalClock = setInterval(timerCountdown, 1000); 
startButton.className = "hidden"; 
questionEl.classList.remove("hidden");
nextQuestion(); 
}

//function for each consecutive question 
function nextQuestion() {
 questionActual.innerText = questionsObject.question; 

}

function timerCountdown() {
  if (clock <= 0){
    clearInterval(intervalClock); 
    return; 
  } else{
      clock--; 
      clockEl.innerText = clock; 
      return clock; 
    }
  }


const questionsObject = [
  {
    question: 'Which part of the html is the correct place to insert the JavaScript source file?', 
    answers: [
      {text: '1. The head', correct: false}, 
      {text: '2. The title', correct: false}, 
      {text: '3. The begining of the body', correct: false}, 
      {text: '4. The end of the body', correct: true}
    ]
  }, 
  {
    question: 'Key-value pairs can be stored in localStorage as: ', 
    answers: [
      {text: '1. Objects ', correct: false}, 
      {text: '2. Strings', correct: true}, 
      {text: '3. Numbers', correct: false}, 
      {text: '4. Objects or Strings', correct: false}
    ]
  },
  {
    question: 'If you type 3 > 2 > 1 === false; into the console window, you get: ', 
     answers: [
     {text: '1. true', correct: true}, 
     {text: '2. false', correct: false}, 
     {text: '3. undefined', correct: false}, 
     {text: '4. null', correct: false}
     ]
  },
  {
    question: 'Which of the following options is an incorrect variable name?', 
     answers: [
      {text: '1. javascript', correct: false}, 
      {text: '2. _javascript', correct: false}, 
      {text: '3. $javascript', correct: false}, 
      {text: '4. -javascript', correct: true}
     ]
  }
]
