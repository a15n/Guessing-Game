var numberOfGuesses = 2;
var usedGuesses = 0;
var computerNumber = computerNum();

function computerNum () {
    return Math.ceil(Math.random()*100);
}

function userNum () {
    var number = document.getElementById("userGuess").value;
    if (number >= 1 && number <= 100 && number % 1 === 0) {
        return number;
    } else {
        return userNum();
    }
}

function hotOrCold (userNum, computerNum) {
    if (userNum > computerNum) {
        console.log("too high");
        return false;
    } else if (userNum < computerNum) {
        console.log("too low");
        return false;
    } else {
        console.log("right number");
        return true;
    }
}