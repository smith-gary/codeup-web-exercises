$(document).ready(function() {
// alert($('#header-one').html());
// alert($('#unorder-list').html());
// alert($('#list-items').html());
// $('.codeup').css('border', '1px solid red')

// $('li').css('font-size', '20px');
// $('h1, p, li').css('background-color', 'yellow');
// alert($('h1').html());

$('h1.codeup').click(function(){
    $(this).css('background-color', 'green');
})

$('p').dblclick(function() {
    $(this).css('font-size', '18px');
})

$('li').hover(function() {
    $(this).css('color', 'red');
},
    function() {
    $(this).css('color', 'black');
    })
});