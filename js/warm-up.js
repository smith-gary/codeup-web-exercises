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
    /*
    const gyarados = {
        name: 'Gyarados',
        type: ['Water','Flying'],
        height: 21,
        weight: 518,
        category: 'Atrocious',
        abilities: 'Intimidate',
        weaknesses: ['Electric', 'Rock'],
        evolutions: 'Magikarp'
    }
    */
    /*
   const wrestlers = [
        {
            name: "Bret Hart",
            nationality: "Canadian"
        }, {
            name: "Shawn Michaels",
            nationality: "American"
        }, {
            name: "Christian Cage",
            nationality: "Canadian"
        }, {
            name: "Keiji Mutoh",
            nationality: "Japanese"
        }, {
            name: "Eddy Guerrero",
            nationality: "American"
        }, {
            name: "Owen Hart",
            nationality: "Canadian"
        }
    ];

    const nationality = function(arr) {
        let canadianWrestlers = [];
        arr.forEach(function (wrestler) {
        if (wrestler.nationality === 'Canadian') {
            canadianWrestlers.push(wrestler);
        }
    })
        return canadianWrestlers;

    }
    console.log(nationality(wrestlers));
    */
/*
    let circle = {
        radius: 36
    }

    let area = Math.PI * (Math.pow(circle.radius, 2));
    console.log(Math.ceil(area));
*/
    /*
var groceries = [
    {
        name: "carrots",
        quantity: 5
    },{
        name: "yams",
        quantity: 50
    },{
        name: "oranges",
        quantity: 9
    },{
        name: "onions",
        quantity: 2
    },{
        name: "cucumbers",
        quantity: 6
    },{
        name: "potatoes",
        quantity: 8
    }
];


    function getHighestQuantity(arr) {
        let highest = {
            name: 'blank',
            quantity: 0
        };
        arr.forEach(function (item) {
            if(item.quantity > highest.quantity) {
                highest = item;
            }
        });
        return highest;
    }

    console.log(getHighestQuantity(groceries));
    */

    /*
    const products = [
        {
            name: 'Playstation 5',
            price: 599.99
        }, {
            name: 'Logitech Wireless Mouse',
            price: 23.99
        }, {
            name: 'Macbook Pro',
            price: 1099.99
        }, {
            name: 'GoPro HERO10',
            price: 399.99
        }, {
            name: '12" & 6" Metal Ruler Set',
            price: 5.99
        }]
    function sortByName(arr) {
        const sortedInfo = arr.sort(function(a, b){
            let nameA = a.name.toLowerCase();
            let nameB = b.name.toLowerCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        })
        // console.log(sortedInfo);
        return sortedInfo;
    }

    console.log(sortByName(products));
    */

    var bBallPlayers = [
        {
            name: "Hakeem Olajuwon",
            height: 213
        }, {
            name: "Muggsy Bogues",
            height: 160
        }, {
            name: "Chris Paul",
            height: 183
        }, {
            name: "Bol Bol",
            height: 218
        }, {
            name: "Moochie Norris",
            height: 185
        }, {
            name: "Manu Ginobili",
            height: 198
        }
    ];

    let lowestHeight = function (arr) {
        let lowest = {
            name: 'blank',
            height: 500
        };
        arr.forEach(function (item) {
            if(item.height < lowest.height) {
                lowest = item;
            }
        })
        return lowest;
    }
    console.log(lowestHeight(bBallPlayers));

})();