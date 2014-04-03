var numberOfGuesses = 6, computerNumber = Math.ceil(Math.random()*100), hintHigh, hintLow;

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
        return false;
    } else if (userNum > computerNum) {
        return (userNum + " is too high");
    } else if (userNum < computerNum) {
        return (userNum + " is too low");
    } else {
        return (userNum + " is the right number");
    }
}
function hint () {
    var plusMinus = Math.round(Math.random()); // 0 = minus, 1 = plus
    var distanceFromComputerNumber = Math.ceil(Math.random()*10);
    var rangeDistance = 10;
    if (computerNumber >= 90) {
        hintLow = 80;
        hintHigh = 100;
    } else if (computerNumber <= 10) {
        hintLow = 0;
        hintHigh = 20;
    } else {
        switch (plusMinus) {
            case (0):
                hintLow = computerNumber - distanceFromComputerNumber - rangeDistance;
                hintHigh = computerNumber - distanceFromComputerNumber + rangeDistance;
                break;
            case (1):
                hintLow = computerNumber + distanceFromComputerNumber - rangeDistance;
                hintHigh = computerNumber + distanceFromComputerNumber + rangeDistance;
                break;
        }
    }
}

$(document).ready(function(){
    $(document).on('click', '#submit', function() {
        var userNumber = userNum()
        var result = game(userNumber,computerNumber);
        var hotness = hotOrCold(userNumber,computerNumber);
        if (userNumber !== false && numberOfGuesses !== 0) {
            numberOfGuesses -= 1;
            if (userNumber == computerNumber) {
                $('.feedback').append('<p>' + result + hotness + '</p>');
            }  else {
                $('.feedback').append('<p>' + result + hotness + ' ' + numberOfGuesses + ' guesses remaining!</p>');
            }
        } else if (numberOfGuesses === 0) {
            alert("Game over!")
        }
    });
    $(document).on('click', '#hint', function(){
        numberOfGuesses -= 2;
        hint();
        $('.feedback').append('<p>HINT: The number is between ' + hintLow + " and " + hintHigh + ". Only " + numberOfGuesses + ' guesses remaining!</p>');
        $('#hint').replaceWith("<button type='button' id='hint' disabled>Hint</button>")
    })
    $(document).on('click', '#restart', function(){
        location.reload();
    })
})

//remove the hot or cold indicator and add in an automatically updating visual assistant