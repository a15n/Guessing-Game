var numberOfGuesses = 5;
var usedGuesses = 0;
var computerNumber = Math.ceil(Math.random()*100);

function userNum () {
    var number = $('input[name=userGuess]').val();
    if (number >= 1 && number <= 100 && number % 1 === 0) {
        return number;
    } else {
        alert("Try again, fool!");
    }
}

function hotOrCold (userNum, computerNum) {
    if (userNum > computerNum) {
        console.log(userNum + " is too high");
        return false;
    } else if (userNum < computerNum) {
        console.log(userNum + " is too low");
        return false;
    } else {
        console.log(userNum + " is the right number!");
        return true;
    }
}

$(document).ready(function(){
    $(document).on('click', 'button', function() {
        hotOrCold(userNum(),computerNumber);
    });
})