function computerNum () {
    var number = Math.ceil(Math.random()*100);
    console.log("The computerNum is " + number);
    return number;
}

function userNum () {
    var number = prompt("Enter a whole number between 1 and 100.");
    if (number >= 1 && number <= 100 && number % 1 === 0) {
        console.log("The userNum is " + number);
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
var numberOfGuesses = 5;
var userGuessArray = [];

for (i = 0; i < numberOfGuesses; i++) {
    userGuessArray[i] = userNum();
}
console.log(userGuessArray);


//http://www.codecademy.com/courses/javascript-beginner-en-Bthev-mskY8/1/5?curriculum_id=506324b3a7dffd00020bf661