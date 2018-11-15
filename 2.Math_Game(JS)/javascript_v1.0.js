//if we click on the start/reset
    //if we are playing
        //reload page
    //if we are not playing
    //set score to 0
        //show countdown box
        //reduce time by 1 sec in loops
            //time left
                //yes --> continue
                //no --> game Over
        //change button to reset
        //generate new Q&A


//if we click on answer box
    //if we are playing
        //correct?
            //yes
                //increase score
                //show correctbox for 1 sec
                //generate new Q&A
            //no
                //show try again box for 1 sec


                
//if we click on the start/reset


const NUMBER_OF_ANSWERS = 4;
const MAX_NUMBER_IN_QUESTION = 10;
let playstatus = 'Start Game';
let time = 30;
let score = 0;
let correctAnswer = null;

function generateQuestion(number1, number2) {
    return number1 + " x " + number2;
}

function getRandom(size) {
    return Math.round(Math.random() * size);
}

function randomIncorrectAnswer() {
    let result = correctAnswer;

    while (result === correctAnswer) {
        const random1 = getRandom(MAX_NUMBER_IN_QUESTION);
        const random2 = getRandom(MAX_NUMBER_IN_QUESTION);

        result = random1 * random2;
    } 

    return result;
}

function generateAnswers(boxWithAnswer) {
    for (let i = 0; i < NUMBER_OF_ANSWERS; i++) {
        const boxIndex = "box" + (i + 1);

        if (i === boxWithAnswer) {
            document.getElementById(boxIndex).innerHTML = correctAnswer;
        } else {
            document.getElementById(boxIndex).innerHTML = randomIncorrectAnswer();     
        }
    }
}

function step() {
    if (time < 0) {
        document.getElementById("gameOver").innerHTML += "<p id='gameOverText1'> GAME OVER!</p>" +
            "<p id='gameOverText2'>Your Score is " + score + "</p>";
        document.getElementById("gameOver").style.display = 'block';
        document.getElementById("startreset").style.bottom = '15%';
       
        for (i = 1;  i <= NUMBER_OF_ANSWERS; i++) {
            document.getElementById("box" + i).style["pointer-events"] = 'none';
            document.getElementById("box" + i).innerHTML = '';
        }
        document.getElementById("timeremaining").style.display = 'none';
        document.getElementById("score").style.display = 'none';
        document.getElementById("correct").style.display = 'none';
        document.getElementById("wrong").style.display = 'none';
    } else {
        document.getElementById("timeremainingvalue").innerHTML = time;
        time -= 1;
        setTimeout(step, 1000);
    }
}

let status = "true";
function play(){
    if (status == "true") {
        status = "false";
        var audio = document.getElementById("audio");
        audio.play();
        document.getElementById("playerOff").style.display = 'none';
        document.getElementById("playerOn").style.display = 'block';   
    } else {
    status = "true";
    var audio = document.getElementById("audio");
    audio.pause();
    document.getElementById("playerOff").style.display = 'block';
    document.getElementById("playerOn").style.display = 'none';
    }  
}

function clickOnAnswer(event){
    if (event.target.innerHTML == correctAnswer){
        //increase score
        score++;
        document.getElementById("score").innerHTML = "Score: " + score;
        //show correctbox for 1 sec
        document.getElementById("correct").style.display = 'block';
        setTimeout(function(){document.getElementById("correct").style.display = 'none';
        }, 1000);
        //generate new Q&A
        generateQA();
    } else {
        //show try again box for 1 sec
        document.getElementById("wrong").style.display = 'block';
        setTimeout(function(){document.getElementById("wrong").style.display = 'none';
        }, 1000);
        // penalty of -3 sec
        time -= 3;
        document.getElementById("timeremainingvalue").innerHTML = time;
        document.getElementById("timeremainingvalue").style.color = 'red';
        setTimeout(function(){document.getElementById("timeremainingvalue").style.color = 'black';
        }, 1000);
    }
}

function generateQA(){
    const number1 = getRandom(MAX_NUMBER_IN_QUESTION);
    const number2 = getRandom(MAX_NUMBER_IN_QUESTION);
    correctAnswer = number1 * number2;
    document.getElementById("question").innerHTML = generateQuestion(number1, number2);
    const boxWithAnswer = getRandom(NUMBER_OF_ANSWERS-1);
    generateAnswers(boxWithAnswer);
}

//checking if we played before or not
function checkPlay(){
    //we did not play

    if (playstatus === 'Start Game') {
        //make answer boxes active
        for (i = 1;  i <= NUMBER_OF_ANSWERS; i++) {
            document.getElementById("box" + i).style["pointer-events"] = 'all';
        }
        //close welcome picture
        document.getElementById("mathGame").style.display = 'none';

        //change button to reset
        playstatus = 'Reset Game';
        document.getElementById("startreset").innerHTML = "Reset Game";

        //set score to 0
        document.getElementById("score").style.display = 'block';
        document.getElementById("score").innerHTML = "Score: " + score;

        //show countdown box
        document.getElementById("timeremaining").style.display = 'block';

        //reduce time by 1 sec in loops
    
        step();

        document.getElementById("instruction").innerHTML = "Click on the correct answer";

        //generate new Question and Answer
        generateQA();
 
        //we already played
    } else {
        playstatus = "Start Game";
        location.reload(true);
    }     
}


document.getElementById("startreset").onclick = function(){
    checkPlay(); 
}


 


