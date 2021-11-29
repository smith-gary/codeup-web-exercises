$(document).ready(function() {
    'use strict';

    // $('dd').addClass('invisible');

    // $('.invisible').css('visibility', 'hidden');

    $('.button').html('<btn class="toggler" type="button">Toggle Invisibility</btn>');
    $('.toggler').css('border', 'solid 3px black');

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


});