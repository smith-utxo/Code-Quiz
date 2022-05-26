var highScoresList = document.querySelector("#actual-scores");
const restartQuiz = document.getElementById('back-home'); 
var mostRecentScore = localStorage.getItem('mostRecentScore');

// Grab the player initials and scores. If empty, just create an empty array
var highScores = JSON.parse(localStorage.getItem('PlayerDataObj')) || []; 

console.log(highScores)

highScoresList.innerHTML = highScores.map(function(score) {
  return `<br><li class="high-score">${score.name}-${score.score}</li>`;
})
.join("");




restartQuiz.addEventListener('click', function(){
    location.replace("index.html"); 
})