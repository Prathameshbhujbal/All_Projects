let maximum = parseInt(prompt("Enter the maximum number!"));

while (!maximum) {
    let maximum = parseInt(prompt("Enter a valid number!"));
}
const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt("Enter your first guess"));
let attempts = 1;
while (parseInt(guess) !== targetNum) {
    if (guess === "q") break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt("too high! Enter a new guess:");
    }
    else {
        guess = prompt("too low! Enter a new guess:");
    }
}

if (guess === "q") {
    console.log("You Lost!!!");
}
else {
    console.log(`Congrats You Won!!! It took you ${attempts} guesses.`);
}

