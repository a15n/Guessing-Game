var numberOfGuesses = 6, usedGuesses = 0, computerNumber = Math.ceil(Math.random()*100);

function userNum () {
    var number = $('input[name=userGuess]').val();
    if (number >= 1 && number <= 100 && number % 1 === 0) {
        return number;
    } else {
        alert("Try again, fool!");
        return false;
    }
}

function hotOrCold (userNum, computerNum) {
    var distance = Math.abs(userNum - computerNum);
    if (distance >= 25){
        return (" and you are COLD!");
    } else if (distance >= 12) {
        return (" and you are LUKEWARM!");
    } else if (distance >= 6) {
        return (" and you are HOT!");
    } else if (distance >= 1) {
        return (" and you are BOILING!");
    } else {
        return (" and you are COOKED!");
    }
}

function game (userNum, computerNum) {
    if (userNum === false) {
        return false
    } else if (userNum > computerNum) {
        return (userNum + " is too high");
    } else if (userNum < computerNum) {
        return (userNum + " is too low");
    } else {
        return (userNum + " is the right number!");
    }
}


$(document).ready(function(){
    $(document).on('click', 'button', function() {
        var result = game(userNum(),computerNumber);
        var hotness = hotOrCold(userNum(),computerNumber);
        console.log(hotness);
        $('.feedback').append('<p>' + result + hotness + '</p>'); //add in hotOrCold indicator
    });
})

//Add in a description about what hotOrCold means in layman's terms
//remove the hot or cold indicator and add in an automatically updating visual assistant