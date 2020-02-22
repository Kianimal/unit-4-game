var targetScoreVal = 0;
var targetScore = document.getElementById("targetScoreNum");

var scoreVal = 0;
var score = document.getElementById("userScoreNum");

var winVal = 0;
var wins = document.getElementById("winNum");

var lossVal = 0;
var loss = document.getElementById("lossNum");

function targetScoreSet(){
    targetScoreVal = Math.floor(Math.random()* (120-19)) + 19;
    targetScore.textContent = targetScoreVal;
}

function crystalValSet(){
    blueVal = Math.floor(Math.random()*11)+1;
    greenVal = Math.floor(Math.random()*11)+1;
    purpleVal = Math.floor(Math.random()*11)+1;
    redVal = Math.floor(Math.random()*11)+1;
}

function scoreValSet() {
    scoreVal = 0;
    score.textContent = scoreVal;
}

function checkScore(){
    if(scoreVal === targetScoreVal){
        winVal++;
        wins.textContent = winVal;
        targetScoreSet();
        scoreValSet();
        crystalValSet();
        alert("You won!");
    }
    if(scoreVal > targetScoreVal){
        lossVal++;
        loss.textContent = lossVal;
        targetScoreSet();
        scoreValSet();
        crystalValSet();
        alert("You lost!");
    }
}

crystalValSet();
targetScoreSet();

$("#blueButton").on("click", function() {
    scoreVal += blueVal;
    score.textContent = scoreVal;
    checkScore();
});

$("#greenButton").on("click", function() {
    scoreVal += greenVal;
    score.textContent = scoreVal;
    checkScore();
});

$("#purpleButton").on("click", function() {
    scoreVal += purpleVal;
    score.textContent = scoreVal;
    checkScore();
});

$("#redButton").on("click", function() {
    scoreVal += redVal;
    score.textContent = scoreVal;
    checkScore();
});

var script = document.createElement('script');