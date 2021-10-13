"use strict";
(function () {
/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor (color) {

    if (color.toLowerCase() === 'blue') {
        alert(`${color} is the color of the sky.`);
    } else if (color.toLowerCase() === 'red') {
        alert(`Strawberries are ${color}.`);
    } else if (color.toLowerCase() === 'cyan') {
        alert(`I don't know anything about ${color}`);
    } else {
        alert(`I don't know anything about ${color} either ☹️`);
    }
    return color;
}

    console.log(analyzeColor('blue'));
    console.log(analyzeColor('red'));
    console.log(analyzeColor('cyan'));
    console.log(analyzeColor('yellow'));
// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
// console.log(analyzeColor(randomColor));
    /**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
    let newColor = randomColor;
    // let newColor = prompt('Lets see if I know anything about the color you input.').toLowerCase();
    switch (newColor) {
        case 'blue':
            alert(`${newColor} is the color of the sky.`);
            break;
        case 'red':
            alert(`Strawberries are ${newColor}.`);
            break;
        case 'cyan':
            alert(`I don't know anything about ${newColor}.`);
            break;
        default:
            alert(`I don't know anything about ${newColor} either ☹️`);
            break;
    }

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

function analyzeColor (color) {

    if (color.toLowerCase() === 'blue') {
        alert(`${color} is the color of the sky.`);
    } else if (color.toLowerCase() === 'red') {
        alert(`Strawberries are ${color}.`);
    } else if (color.toLowerCase() === 'cyan') {
        alert(`I don't know anything about ${color}`);
    } else {
        alert(`I don't know anything about ${color} either ☹️`);
    }
    return color;
}

    console.log(analyzeColor(prompt('Lets see if I know anything about the color you input.')));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
let luckyNumber = Math.floor(Math.random() * 5);
function calculateTotal (number, totalAmount) {

    switch (number) {
        case 0:
            number = totalAmount;
            console.log('Sorry no discount');
            break;
        case 1:
            number = totalAmount - (0.10 * totalAmount);
            // console.log(luckyNumber);
            break;
        case 2:
            number = totalAmount - (0.25 * totalAmount);
            // console.log(luckyNumber);
            break;
        case 3:
            number = totalAmount - (0.35 * totalAmount);
            // console.log(luckyNumber);
            break;
        case 4:
            number = totalAmount - (0.50 * totalAmount);
            // console.log(luckyNumber);
            break;
        case 5:
            number = totalAmount - totalAmount;
            // console.log(luckyNumber);
            break;
        default:
            console.log('Your number is not 1 - 5, please get a new number for possible savings!');
            break;
    }
    return number;
}
    console.log(calculateTotal(luckyNumber, 100));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
luckyNumber = Math.floor(Math.random() * 6);
let totalBill = Number(prompt('What was your total bill?')).toFixed();
let discount = calculateTotal(luckyNumber, totalBill);
if (luckyNumber >= 1 && luckyNumber <= 5) {
    alert(`Your lucky number was ${luckyNumber}, your bill before discount was $${totalBill}, Your new total is $${discount}!!`);
} else if (luckyNumber === 0) {
    alert(`Your lucky number was ${luckyNumber}, unfortunately there will be no discount ☹️.`);
} else {
    alert('Your number is not 1 - 5, please get a new number for possible savings!');
}
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
function numberQuestion () {
    let question = confirm('Would you like to enter a number?');
    if (question === true) {
        let userNumber = Number(prompt('Sweet what number would you like to enter?'));
        if (userNumber <= Infinity) {
            let evenOrOdd = alert(userNumber % 2 === 0 ? `${userNumber} is even` : `${userNumber} is odd`);
            let plusOneHundred = alert(`${userNumber} plus 100 is ` + (userNumber + 100));
            let evenOrNeg = alert(userNumber >= 0 ? `${userNumber} is positive` : `${userNumber} is negative`);
        } else {
            alert(`Unfortunately that is not a number....`);
        }
    } else {
        alert('No fun...');
    }
}
numberQuestion();

})();