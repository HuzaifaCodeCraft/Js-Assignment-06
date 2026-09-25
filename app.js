var randomNumber = Math.floor(Math.random() * 10) + 1;
var attempts = 3;

for (var i = 1; i <= attempts; i++) {
    var guess = Number(prompt("Guess a number between 1 and 10:"));

    if (guess === randomNumber) {
        alert("🎉 You guessed it!");
        break;
    } 
    else if (guess > randomNumber) {
        alert("Too high!");
    } 
    else {
        alert("Too low!");
    }

    if (i === attempts) {
        alert("The correct number was " + randomNumber);
    }
}