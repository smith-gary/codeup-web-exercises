$(document).ready(function() {
    'use strict';
    $('dt').wrap('<h2></h2>')
    $('dd').wrap('<p></p>')
    $('.toggler').css('border', 'solid 3px black');
    $('.toggler').css('font-size', '20px');

    $('.toggler').click(function(e) {
        e.preventDefault();
        $('dd').toggleClass('invisible');
    });

    $('dt').addClass('highlight');
    $('.highlight').each(function (index) {
        $(this).on('click', function() {
            $(this).css('background-color', 'yellow');
        });
    });
    $('p').css('font-size', '16px');
    $('.highlighter').css('font-size', '20px');
    $('.highlighter').click(function() {
        $('ul').each(function(){
            $(this).children().last().css('background-color', 'yellow');
        });
    });

    $('.first-title').click(function() {
        $('.first-parks').css('font-weight', 'bold');
    });

    $('.second-title').click(function() {
        $('.second-parks').css('font-weight', 'bold');
    });

    $('.third-title').click(function() {
        $('.third-parks').css('font-weight', 'bold');
    });

    $('li').click(function() {
        $(this).parent().children().first().css('color', 'blue');
    })
});