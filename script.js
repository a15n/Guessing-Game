var numberOfGuesses = 2;
var usedGuesses = 0;
var computerNumber = computerNum();

function computerNum () {
    return Math.ceil(Math.random()*100);
}

function userNum () {
    var number = prompt("Enter a whole number between 1 and 100.");
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

function game() {
    if (numberOfGuesses === usedGuesses) {
        console.log("game over! out of guesses");
        return false;
    }
    if (hotOrCold(userNum(),computerNumber) === true) {
        console.log("game over! you guessed right");
    } else {
        usedGuesses += 1;
        return game();
    }
}

console.log(computerNumber);
game();
