let time = 60

let intervalId;
let correctAnswer;
let wrongAnswer;
let answered;
let currentQ = 0;

let trivQs = [
    {
        q: "At the beginning of the movie a pilot freezes up during an encounter with a MIG-28. What is his call sign?",
        o: ["Cougar", "Viper", "Iceman", "Goose"],
        a: 0
    },
    {
        q: "After the flyby reprimand at Top Gun, what profession was Goose considering?",
        o: ["Cooking", "Truck Driving", "Security", "Plumbing"],
        a: 1
    },
    {
        q: "Finish the line: \"Tower, this is ghostrider, requesting a fly-by.\" \"Negative, ghostrider, __________.\"",
        o: ["we're on a smoke break", "general on deck", "the pattern is full", "go home"],
        a: 3
    },
    {
        q: "What does Maverick say to Goose in the bar to let him know it was time to sing to someone?",
        o: ["\"She's lost that lovin' feelin'\"", "\"Take my breath away\"", "\"Highway to the Danger Zone\"", "\"Threat-level Midnight\""],
        a: 0
    },
    {
        q: "Who sings the love song 'Take My Breath Away'?",
        o: ["Kenny Loggins", "Berlin", "Poison", "Loggins & Messina"],
        a: 2
    }
];





$("#gameArea").hide();

$("#start").on("click", function () {
    $("#startGame").hide();
    newGame();
})



function newGame() {
    $("#gameArea").show();
    $("#results").hide();
    correctAnswer = 0;
    wrongAnswer = 0;
    currentQ = 0;
    questions()
}

function questions() {
    $("#results").hide();
    $("#qArea").show();
    $(".questions").html(trivQs[currentQ].q);
    console.log(trivQs[currentQ].q)


    for (i = 0; i < 4; i++) {
        let radioBtn = $("<input type=\"radio\"/>");
        radioBtn.html(trivQs[currentQ].o[i]);
        console.log(trivQs[currentQ].o[i]);
        radioBtn.attr({"data-index": i});
        radioBtn.addClass("thisChoice");
        $(".options").append(radioBtn);
        
    }

    timer();

    $(".thisChoice").on("#finish", function () {
        userChoice = $(this).data("index");
        clearInterval();
        results();
    });

}



function timer() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}
function decrement() {


    time--;


    $("#timer").html("<h2>" + time + "</h2>");



    if (time === 0) {


        stop();


        alert("Time's up, partner");
    }
}
function stop() {
    $("#finish").on("click", stop);
    clearInterval(intervalId);
}













/*

$("#score").on("click", endGame);

function endGame() {

    if (input === valuesIndex) {
        alert("correct")
    }


    else if (trivValues != valuesIndex) {
        alert("try again later")
    }

};


});








/*
    for (var i = 0; i <trivQs.a["What color is the sky?"].length; i++ ){
    $(".options").text(trivQs.a[i]);
    }

function gameLogic(){
    trivAs = "blue"
    
}
*/
9