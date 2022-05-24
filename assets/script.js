//Define constant variables 
const startButton = document.getElementById('start-btn');
const questionEl = document.getElementById('quiz-question-container');
const questionActual = document.getElementById('question'); 
const clockEl = document.getElementById('clock-counter'); 
const answerButtonsElement = document.getElementById('answer-buttons')


var i = 0; 
var clock = 30; 
var score = 0; 
var penalty = 5; 
//Need to declare a variable for the setInterval/clearInterval 
var intervalClock = 0; 

//Add event listener for Start Button & set the clock 
startButton.addEventListener('click', function() {

  if (intervalClock === 0){
      intervalClock = setInterval(function() {
        clock--; 
        clockEl.innerText = ('Time: ' + clock); 

        if (clock <= 0) {
          clearInterval(intervalClock); 
          lastPage(); 
          clockEl.textContent = "No more time!"; 
        }
      }, 1000); 
  }
    startQuiz(); 
});


//Function for beginning quiz 
function startQuiz() {
  //Hide the start button
  startButton.className = "hidden"; 
  //Remove the hidden class and therefor display:none from the Quiz question container 
  questionEl.classList.remove("hidden");
  //Call the first question function 
  showFirstQuestion(); 
  }


//function for each consecutive question 
function showFirstQuestion() {
  //If there are any buttons present, delete them first 
  
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
  // check if we have run out of questions. If so, go to the final page: 
  console.log("var i = " + i);
  console.log("questionsArray is " + questionsArray.length);
  if ( i+1 > questionsArray.length) {
    lastPage(); 
    return; 
  }
 questionActual.innerText = questionsArray[i].question; 
 questionsArray[i].answers.forEach(answer => {
   const button = document.createElement('button');
   button.innerText = answer.text; 
   button.classList.add('btn-answers');
   answerButtonsElement.appendChild(button);

     // this if statement is just counting everything by accident, all true and false so need to fix! 
     if (answer.correct) {
     button.dataset.correct = answer.correct; 
     /*localStorage.setItem("PlayerScore", JSON.stringify(score));
     */
     
   } 

   button.addEventListener('click', compareSelection);
  })
  //increment the question index 
  i++; 
}

//function to compare selection with correct answer 
function compareSelection(e) {

  var userSelection = e.target; 
  var correctOrNot = userSelection.dataset.correct; 
  if (correctOrNot){
    score += 10;  
  } else {
    clock = clock - penalty; 

  }
  console.log(correctOrNot);
  showFirstQuestion(); 
  
}

//Create end of quiz display
function lastPage() {
  // Make sure the clock clears and there is nothing on the page. 
  clock = 0; 
  questionEl.innerHTML = "<h1>End of Quiz! Here are your results:</h1>"; 
  clockEl.innerHTML = ""; 
 
  //create a paragraph to write results in 
    
  var createPara = document.createElement("p"); 
  createPara.setAttribute('id', 'question');
  createPara.textContent = "You final score is " + score;
  questionEl.appendChild(createPara);  
  
  var initialsPlease = document.createElement('label'); 
  initialsPlease.setAttribute('id', 'initials'); // Need to make in CSS
  initialsPlease.textContent = "Enter your initials: "; 
  questionEl.appendChild(initialsPlease); 

  var formEntry = document.createElement('input'); 
  formEntry.setAttribute('type', 'text'); 
  formEntry.setAttribute('id', 'initials'); 
  formEntry.innerText = "Enter Here"; 
  questionEl.appendChild(formEntry); 

  


}



 // 4 questions in an array
const questionsArray = [
  {
    question: 'Which part of the html is the correct place to insert the JavaScript source file?', 
    answers: [
      {text: '1. The head', correct: false}, 
      {text: '2. The title', correct: false}, 
      {text: '3. The beginning of the body', correct: false}, 
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
