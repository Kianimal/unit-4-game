var scoreVal = 0;

var blueVal = Math.floor(Math.random()*10);
var greenVal = Math.floor(Math.random()*10);
var purpleVal = Math.floor(Math.random()*10);
var redVal = Math.floor(Math.random()*10);

var score = document.getElementById("userScoreNum");

function targetScoreSet(){
    var targetScore = document.getElementById("targetScoreNum");
    targetScore.textContent = Math.floor(Math.random()*50);
}

function crystalValSet(){
    blueVal = Math.floor(Math.random()*10);
    greenVal = Math.floor(Math.random()*10);
    purpleVal = Math.floor(Math.random()*10);
    redVal = Math.floor(Math.random()*10);
}

$("#blueButton").on("click", function() {
    scoreVal += blueVal;
    score.textContent = scoreVal;
});

$("#greenButton").on("click", function() {
    scoreVal += greenVal;
    score.textContent = scoreVal;
});

$("#purpleButton").on("click", function() {
    scoreVal += purpleVal;
    score.textContent = scoreVal;
});

$("#redButton").on("click", function() {
    scoreVal += redVal;
    score.textContent = scoreVal;
});

var script = document.createElement('script');