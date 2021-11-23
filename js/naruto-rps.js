$(document).ready(function() {
    'use strict';

    //NARUTO HOVER EFFECT BEFORE CLICK//
    let naruto = $('.naruto');
    let rock = $('.rock');
    let paper = $('.paper');
    let scissors = $('.scissors');
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
    neji.hover(
        function() {
            this.src= 'img/neji-combat.png';
        },
        function() {
            this.src= 'img/neji-standing%20.jpeg';
        }
    );

});