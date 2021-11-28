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
        if (player === 'Rock' && computer === 'Paper') {
             return 'Computer';
         } else if (player == 'Rock' && computer == 'Scissors') {
             return 'Player';
         } else if (player == 'Paper' && computer == 'Scissors') {
             return 'Computer';
         } else if (player == 'Paper' && computer == 'Rock') {
             return 'Player';
         } else if (player == 'Scissors' && computer == 'Rock') {
             return 'Computer';
         } else if (player == 'Scissors' && computer == 'Paper') {
            return 'Player';
        }
    }
 //// DISPLAYS WINNER IN WINNER DIV ///
    function winnings(msg){
        $('.winner').html(msg);
    }
    // EVENT LISTENERS ON IMAGES ///

    $('.btn').click(function pickRPS(e) {
        let playerSelect = e.target.innerText;
        console.log(playerSelect);
        let compSelect = Math.random();
        let result = checkWinner(playerSelect, compSelect);
        console.log(result);
        if (result === 'Player'){
            result += ' wins!';
            //update score
            winnerScores[0]++;
        }

        if (result === 'Computer'){
            result += ' wins!';
            winnerScores[1]++;
        }
        if (result === 'Draw'){
            result += '. It\'s a tie!'
        }

        if (compSelect < .34){
            compSelect = 'Rock';
        } else if (compSelect <= .67){
            compSelect = 'Paper';
        } else {
            compSelect= 'Scissors';
        }
        console.log(compSelect);



       /// UPDATES SCORE IN SCORES SECTION ///
        $('.scores').html(`Player: ${winnerScores[0]} <br> Computer: ${winnerScores[1]} `);

        ///// PLAYER AND COMPUTER NAMES
        winnings(`Player: ${playerSelect} <br> Computer: ${compSelect} <br> ${result}`);

    });
});
