'use strict';

// Part one of exercises

console.log('Hello from external JavaScript.');
let welcomeMessage = alert('Welcome to my Website!');
let favColor = prompt('What is your favorite color?');
let colorResponse = alert(favColor + ' huh?...weird, that\'s my favorite color too!');


// Part two of exercises

// First problem

const pricePerDay = 3;
let daysRentedMermaid = prompt('How many days did you rent The Little Mermaid?');
let daysRentedBrotherBear = prompt('How many days did you rent Brother Bear?');
let daysRentedHercules = prompt('How many days did you rent Hercules?');
const totalPrice = (Number(daysRentedMermaid) + Number(daysRentedHercules) + Number(daysRentedBrotherBear)) * 3;
let priceOwed = alert('Your total is $' + totalPrice + ', how would you like to pay?');


// Second problem

let amazonHours = prompt('How many hours did you work with Amazon?');
let amazonPay = prompt('What was your pay per hour with Amazon?');

let facebookHours = prompt('How many hours did you work with Facebook?');
let facebookPay = prompt('What was your pay per hour with Facebook?');

let googleHours = prompt('How many hours did you work with Google?');
let googlePay = prompt('What was your pay per hour with Google?');

const monthlyPayTotal = (Number(amazonPay * amazonHours)) + (Number(facebookPay * facebookHours)) + (Number(googlePay * googleHours));
let monthlyPayDue = alert('You made $' + monthlyPayTotal + ' this month, killing it!');


// Third Problem

// Able to enroll response
let classCapacity = prompt('Is the class full? respond with Yes or No.');
let classSchedule = prompt('Class is at 7 am Mondays, are there any conflicts? respond with Yes or No.');
let enrolledStatus = alert(classCapacity + ' the class is not full. ' + classSchedule + ' this doesn\'t conflict with your schedule. Looks like you can enroll! Hooray school!!');

// Not able to enroll response
let noClassCapacity = prompt('Is the class full? respond with Yes or No.');
let noClassSchedule = prompt('Class is at 7 am Mondays, are there any conflicts? respond with Yes or No.');
let notEnrolled = alert(noClassCapacity + ' the class is full. ' + ' I\'m sorry you are not able to enroll. ☹️');


// Fourth Problem
let customerType = confirm('Are you a premium member?');
console.log(customerType);

if (customerType == true) {
    alert('Good news you don\'t have a minimum limit on item purchases!');
} else {
     alert('Just a reminder there is a minimum purchase limit of 2 items.');
};

let productAmount = prompt('How much product are you buying?');
let promoExpiration = alert('Good news the promotional offer isn\'t expired!');
let confirmationMessage = confirm('I see you are buying ' + productAmount + ' items, and the promo is still available. Would you like to continue to your shopping cart?');
