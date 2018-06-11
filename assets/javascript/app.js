var i = 0;
var seconds = 90;
var value = [];
var q = ["form input[type='radio'][name='q1']:checked",
    "form input[type='radio'][name='q2']:checked",
    "form input[type='radio'][name='q3']:checked",
    "form input[type='radio'][name='q4']:checked",
    "form input[type='radio'][name='q5']:checked",
    "form input[type='radio'][name='q6']:checked",
    "form input[type='radio'][name='q7']:checked",
    "form input[type='radio'][name='q8']:checked",
    "form input[type='radio'][name='q9']:checked",
    "form input[type='radio'][name='q10']:checked",
];
var correct = 0;
var wrong = 0;
var unanswered = 0;
var intervalID
// Hides scoreboard and quiz.
$("#score-board").hide();
$("#quiz").hide();
//Starts quiz 
$(".button").on("click", start);

//Hides start button, shows quiz questions & starts countdown
function start() {
    $(".button").hide();
    $("#quiz").show();
    $(".game-timer").html(seconds + " seconds");
    intervalID = setInterval(timer, 1000);
}

function timer() {
    //Counts down and gives seconds remaining.
    if (seconds > 0) {
        seconds = seconds - 1;
        console.log(seconds);
        $(".game-timer").html(seconds + " seconds remaining");
    } else {
        $(".game-timer").html("Quiz Over! Your Score:");     
        clearInterval(intervalID);
        console.log(value);
        checkscore();
    }
}

// right ans = 'r'  wrong ans = anything else  unanswered = undefined

function checkscore() {

    for (i = 0; i < q.length; i++) {
        if ($(q[i]).val() === 'r') {
            correct++;
        } else if ($(q[i]).val() === undefined) {
            unanswered++;
        } else {
            wrong++;
        }

    }
    //Hide quiz again & show score.
    $("#quiz").hide();
    $("#score-board").show();
    console.log("cor:" + correct);
    console.log("wrong:" + wrong);
    console.log("unans:" + unanswered);
    $("#correct-counter").html(correct);
    $("#wrong-counter").html(wrong);
    $("#unans-counter").html(unanswered);
}


