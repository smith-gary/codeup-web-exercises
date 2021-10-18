'use strict';
(function () {
    function numberToSkip() {
        let userAnswer = prompt('Enter an odd number between 1 and 50: ');
        if (userAnswer % 2 === 0 || userAnswer < 1 || userAnswer > 50) {
            userAnswer = prompt('That\'s an incorrect entry try again.');
        }
            for (let i = 1; i < 50; i++) {
                if (i % 2 === 0) {
                    continue;
                }
                if (userAnswer == i) {
                    console.log(`Yikes! Skipping number: ${i}`);
                    continue;
                }
                console.log(`Here is an odd number: ${i}`)
            }
        }

    numberToSkip();
})();