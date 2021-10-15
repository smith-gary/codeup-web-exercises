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

})();