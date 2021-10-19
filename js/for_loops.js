'use strict';
// (function () {
//     function showMultiplicationTable(num) {
//         for (let i = 1; i <= 10; i++) {
//             const result = i * num;
//             console.log(`${num} x ${i} = ${result}`);
//         }
//         ;
//     };
//     showMultiplicationTable(7);
//
//     function isOdd() {
//         for (let i = 1; i <= 10; i++) {
//             let randomNumber = Math.floor(Math.random() * (200 - 20) + 20);
//             if (randomNumber % 2 === 0) {
//                 console.log(`${randomNumber} is even.`)
//             } else {
//                 console.log(`${randomNumber} is odd.`)
//             };
//         };
//     };
//     isOdd();
//
//     function numberPyramid() {
//         const rows = 9;
//         let output = '';
//         for (let i = 1; i <= rows; i++) {
//             for (let r = 1; r <= i; r++) {
//                 output += i + '';
//             }
//             console.log(output);
//             output = '';
//         };
//     };
//     numberPyramid();
//
//     function countDownByFive() {
//         for (let i = 100; i >= 5; i -= 5) {
//             console.log(i);
//         };
//     };
//     countDownByFive();
//
// })();