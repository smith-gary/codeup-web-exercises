'use strict';
(function () {
//   function multiplyByTwo () {
//       let number = 2;
//
//       while (number <= 65536) {
//           console.log(number);
//           number *= 2;
//       }
//   }
// multiplyByTwo();

    const allCones = Math.floor(Math.random() * 50) + 50;
  function iceCream (inventory) {
      do {
          let conesBought = Math.floor(Math.random() * 5) + 1;
          let remainingCones = inventory -= conesBought;
          if (conesBought < inventory) {
              console.log(`${conesBought} cones sold ...`);
          } else if (inventory <= 0) {
                  console.log(`Yay! I sold them all!`);
                  continue;
          } else if (conesBought > inventory) {
              console.log(`Cannot sell you ${conesBought} cones I only have ${remainingCones}...`);
          }
      } while (inventory > 0);

  }
iceCream(allCones);
})();