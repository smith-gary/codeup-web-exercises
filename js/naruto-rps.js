$(document).ready(function() {
    'use strict';

    let naruto = $('.naruto');
    let rock = $('.rock');
    let paper = $('.paper');
    let scissors = $('.scissors');
    const winnerScores = [0,0];
    const winner = $('.winner');
    const scores = $('.scores');

    //NARUTO HOVER EFFECT BEFORE CLICK//
    $('.rock, .paper, .scissors').hover(
        function() {
            $('.naruto').attr('src', 'img/naruto-battle.png');
        },
        function() {
            $('.naruto').attr('src', 'img/naruto-standing.png');
        }
    );

    //NEJI HOVER EFFECT BEFORE CLICK//
    let neji = $('.neji');
    $('.rock, .paper, .scissors').hover(
        function() {
            $('.neji').attr('src', 'img/neji-combat.png');
        },
        function() {
            $('.neji').attr('src', 'img/neji-standing%20.png');
        }
    );
 /// CHECK TO SEE WHO THE WINNER IS ///
    function checkWinner(player, computer) {
    console.log(player);
    console.log(computer);
        if (player === 'Rock' && computer === 'Paper') {
             return 'Computer';
         }
        if (player === 'Rock' && computer === 'Scissors') {
             return 'Player';
         }
        if (player === 'Paper' && computer === 'Scissors') {
             return 'Computer';
         }
        if (player === 'Paper' && computer === 'Rock') {
             return 'Player';
         }
        if (player === 'Scissors' && computer === 'Rock') {
             return 'Computer';
         }
        if (player === 'Scissors' && computer === 'Paper') {
            return 'Player';
        }
        if (player === computer) {
            return 'Draw';
        }
    }
 //// DISPLAYS WINNER IN WINNER DIV ///
    function winnings(msg){
        $('.winner').html(msg);
    }
    // EVENT LISTENERS ON IMAGES ///

    $('.btn').click(function pickRPS(e) {
        let playerSelect = e.target.innerText;
        let compSelect = Math.random();
        if (compSelect < .34){
            compSelect = 'Rock';
        } else if (compSelect <= .67){
            compSelect = 'Paper';
        } else {
            compSelect = 'Scissors';
        }

        let result = checkWinner(playerSelect, compSelect);
        console.log(result);
        if (result === 'Player') {
            result += ' wins!';
            //update score
            winnerScores[0]++;
        }

        if (result === 'Computer') {
            result += ' wins!';
            winnerScores[1]++;
        }
        if (result === 'Draw') {
            result += '. It\'s a tie!'
        }

       /// UPDATES SCORE IN SCORES SECTION ///
        $('.scores').html(`Player: ${winnerScores[0]} <br> Computer: ${winnerScores[1]}`);

        ///// PLAYER AND COMPUTER NAMES
        winnings(`Player: ${playerSelect} <br> Computer: ${compSelect} <br> ${result}`);

    });
});

// switch (player, computer) {
//     case player === 'Rock' && computer === 'Paper':
//         return 'Computer';
//
//     case player === 'Rock' && computer === 'Scissors':
//         return 'Player';
//
//     case player === 'Paper' && computer === 'Scissors':
//         return 'Computer';
//
//     case player === 'Paper' && computer === 'Rock':
//         return 'Player';
//
//     case player === 'Scissors' && computer === 'Rock':
//         return 'Computer';
//
//     case player === 'Scissors' && computer === 'Paper':
//         return 'Player';
//
//     default:
//         return 'Draw';
//
// }