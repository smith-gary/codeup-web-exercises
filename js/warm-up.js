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
    var hadBreakfast = Boolean(Math.round(Math.random()));
    const hadBreakfastMessage = (hadBreakfast) ? 'I had breakfast this morning.' : 'I didn\'t have breakfast this morning.';
    console.log(hadBreakfastMessage);
})();