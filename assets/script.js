//Define constant variables 
const startButton = document.getElementById('start-btn');
const questionEl = document.getElementById('quiz-question-container');
const questionActual = document.getElementById('question'); 
const clockEl = document.getElementById('clock-counter'); 
const answerButtonsElement = document.getElementById('answer-buttons')

var i = 0; 
var clock = 60; 


//Add event listener for Start Button 
startButton.addEventListener('click', startQuiz);


//Function for beginning quiz 
function startQuiz() {
//Start the countdown clock 
var intervalClock = setInterval(timerCountdown, 1000);
//Hide the start button
startButton.className = "hidden"; 
//Remove the hidden class and therefor display:none from the Quiz question container 
questionEl.classList.remove("hidden");
showNextQuestion(); 
}

//function for each consecutive question 
function showNextQuestion() {
 questionActual.innerText = questionsArray[i].question; 
 questionsArray[i].answers.forEach(answer => {
   var button = document.createElement('button');
   button.innerText = answer.text; 
   button.classList.add('btn-answers');
   answerButtonsElement.appendChild(button);
   console.log(answer);
 });
 
/* const button = document.createElementById('button'); 
 button.innerText = answer.text; 
 button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
 return i++; 
 */
  }


function timerCountdown() {
  if (clock <= 0){
    clearInterval(intervalClock); //Need to fix 
    return; 
  } else{
      clock--; 
      clockEl.innerText = ('Time: ' + clock); 
      return clock; 
    }
  }


const questionsArray = [
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
