(function() {
    'use strict';
    /// SAME AS BELOW ///
    // $.get('https://api.openweathermap.org/data/2.5/onecall?lat=29.4252&lon=-98.4916&exclude=minutely,hourly&units=imperial&appid=OPEN_WEATHER_KEY\n').done(function(data) {
    //     console.log(data);
    // });

    //// EASIER TO READ VERSION ////
    $.get('https://api.openweathermap.org/data/2.5/onecall', {
        lat: '29.4252',
        lon: '-98.4916',
        exclude: 'minutely,hourly',
        units: 'imperial',
        APPID: OPEN_WEATHER_KEY
    }).done(function(data) {
        console.log(data);
        $('#weather_icon').attr('src', 'http://openweathermap.org/img/wn/' + data.daily[0].weather[0].icon + '.png') // ICON //
        console.log(new Date(data.daily[0].dt * 1000));// DATE //
    });


}());