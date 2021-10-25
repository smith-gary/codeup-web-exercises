'use strict';
(function () {
//console.log('Included JS file in HTML Document');
// function numSeven () {
//     return 7;
//     };
//     console.log(numSeven());
//
// if (false) {
//     console.log('Happening?');
// }

//     var hadBreakfast = Boolean(Math.round(Math.random()));
//     const hadBreakfastMessage = (hadBreakfast) ? 'I had breakfast this morning.' : 'I didn\'t have breakfast this morning.';
//     console.log(hadBreakfastMessage);

    /*
    function typeCheck (input) {
        if (typeof input === 'string') {
            return 'Haha, it\'s a string of string!'
        } else {
        return typeof input
        }
    }

// tests //
    console.log(typeCheck(''));
    console.log(typeCheck(isNaN()));
    console.log(typeCheck(!false * 3));
    console.log(typeCheck(4 + '4'));


*/
/*
    function fizzBuzz () {
        for (let i = 1; i <= 100; i++) {
            // console.log(i);
            if (i % 3 === 0 && i % 5 === 0) {
                console.log('FizzBuzz');
                continue;
            };
            if (i % 3 === 0) {
                console.log('Fizz');
                continue;
            };
            if (i % 5 === 0) {
                console.log('Buzz');
                continue;
            };
                console.log(i);
        };
    };
    fizzBuzz();
    */
    /*
    function secondToLast (arr) {
        let newArr = arr.slice(-2, -1);
        return newArr;
    }
    console.log(secondToLast([1, 2, 3, 4, 5]));
     */

    /*
    function moveToEnd(arr) {
        let copyArr = arr.slice();
        let firstIndex = copyArr.shift();
        copyArr.push(firstIndex);
        return copyArr;
    }

    console.log(moveToEnd([1, 2, 3, 4]));
    console.log(moveToEnd(['roll', 'rock', 'and']));
     */
const gyarados = {
    type: ['Water','flying'],
    height: 21,
    weight: 518,
    category: 'Atrocious',
    abilities: 'Intimidate',
    weaknesses: ['Electric', 'Rock'],
    evolutions: 'Magikarp',
}

})();