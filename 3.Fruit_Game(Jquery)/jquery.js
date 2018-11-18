//click on the start-reset button
    //are we playing?
        //yes
            //reload page
        //no
            //show trialLeft box
            //change button Start to Reset game
            //1. create a random fruit
            //define a random step
            //2. move fruit down one step every 30sec
                //if the fruit too low
                    //no 
                        //repeat 2.
                    //yes
                        //do we have any trials left?
                            //yes
                                //repeat 1.
                            //no
                                //show game over
                                // Button text change to Start Game


//slice a fruit
    //play sound
    //expload fruit
    //increace score by 1

var playing = false;
var score;
var trialsLeft;
var step;
var setInterval;
var fruits = ['apple' , 'banana' , 'cherries' , 'grapes' ,
            'mango' , 'orange' , 'peach' , 'pear' , 'watermelon'];




function addHearts(){
    $("#trialsLeft").empty();

    for(i = 0; i < trialsLeft; i++){
        $("#trialsLeft").append('<img class="life" src=images/heart.png>');
    }
}


function chooseFruit(){

    //generate a fruit
    $("#fruit1").attr('src', 'images/' + fruits[Math.round(Math.random()*8)] + '.png');
}

function stopAction(){
    clearInterval(action);
    $("#fruit1").hide();   
}

function fruitFall(){
    //generate a fruit
    $("#fruit1").show();

    //choose a random fruit
    chooseFruit(); 

    // give random position
    $("#fruit1").css({'left' : Math.round(550*Math.random()), 'top' : -50}); 

    //generate random step
    step = 1 + Math.round(5*Math.random());
}


function startAction(){

    fruitFall();

    //move fruit down by one step every 10ms
    action = setInterval(function(){

        $("#fruit1").css('top' , $("#fruit1").position().top + step);
         
        //check if the fruit is too low
        if ($("#fruit1").position().top > $("#fruitsContainer").height()){
            //check if we have any trials left
            if(trialsLeft > 1){
                
                fruitFall(); 
                
                //reduce trials by 1
                trialsLeft --;

                //populates number of lifes
                addHearts();   
            } else{
                //game over
                playing = false;
                // change button to the Start Game
                $("#startreset").html("Start Game");
                $("#gameOver").show();
                $("#gameOver").html('<p>Game Over!</p><p>Your score is ' + score + '</p>');
                $("#trialsLeft").hide();

                //stop dropping fruit
                stopAction();
            }
        }
    }, 10);


}

//slice a fruit
$("#fruit1").mouseover(function(){

    //increase Score by 1
    score++;
    $("#scorevalue").html(score);

    //play sound while hover
    $("#slicesound")[0].play();

    //make the fruit stop going down
    clearInterval(action);

    //hide the fruit and slicing it
    $("#fruit1").hide("explode", 500);

    //send new fruit
    setTimeout(startAction, 500);


});


$(function(){

    $("#startreset").click(function(){

    //are we playing? ---> yes

        if(playing == true){
            location.reload();

     //are we playing? ---> no

        }else{

            playing = true; //game iniciating

            score = 0; //set score to 0
            $("#scorevalue").html(score);

            //show trials left
            $("#trialsLeft").show();
            trialsLeft = 3;
            addHearts();

            //hide game over box
            $("#gameOver").hide();

            //change button text to Reset Game
            $("#startreset").html("Reset Game");

            //start sending fruits
            startAction();
        }  
    });
});