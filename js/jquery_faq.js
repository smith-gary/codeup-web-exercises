$(document).ready(function() {
    'use strict';

    // $('dd').addClass('invisible');

    // $('.invisible').css('visibility', 'hidden');
    $('dt').wrap('<h1></h1>')
    $('dd').wrap('<p></p>')
    $('.button').html('<btn class="toggler" type="button">Toggle Invisibility</btn>');
    $('.toggler').css('border', 'solid 3px black');
    $('.toggler').css('font-size', '30px');

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
    $('p').css('font-size', '20px');

});