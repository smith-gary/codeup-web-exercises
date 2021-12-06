(function() {
    'use strict';

    let day = [];
    let temp = [];
    let feelsLikeTemp = [];
    let description = [];

    let emptyArr = function(){
        day = [];
        temp = [];
        feelsLikeTemp = [];
        description = [];
    };


        ///// ITERATING THROUGH DAYS TO SETUP 5 DAY FOReCAST /////
    const getDate = function(data) {
        for(let i = 0; i < data.daily.length; i++) {
            let dayOfWeek = new Date(data.daily[i].dt * 1000).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"});
            day.push(dayOfWeek);
        }
    }

    /// ITERATING THROUGH TEMP OF THE DAY /////

    const getTemp = function(data) {
        for(let i = 0; i < data.daily.length; i++) {
            let tempOfDay = '<p> Temp for the day is: ' + data.daily[i].temp.day + '</p>';
            temp.push(tempOfDay);
        }
    }

    //// ITERATING THROUGH FEELS LIKE TEMP ///////

    const getFeelsLike = function(data) {
        for(let i = 0; i < data.daily.length; i++) {
            let feelsLikeOfDay = '<p> Feels like: ' + data.daily[i].feels_like.day + '</p>';
            feelsLikeTemp.push(feelsLikeOfDay);
        }
    }

    //// ITERATING THROUGH DESCRIPTION ///////

    const getDescription = function(data) {
        for(let i = 0; i < data.daily.length; i++) {
            let descriptionOfDay = '<p>' + data.daily[i].weather[0].description + '</p>';
            description.push(descriptionOfDay);
        }
    }


    $.get('https://api.openweathermap.org/data/2.5/onecall', {
        lat: '29.4252',
        lon: '-98.4916',
        exclude: 'minutely,hourly',
        units: 'imperial',
        APPID: OPEN_WEATHER_KEY
    }).done(function(data) {
        console.log(data);
            getDate(data);
            getTemp(data);
            getFeelsLike(data);
            getDescription(data);
        //////// DAY ONE ///////

        $('.weather-icon-1').attr('src', 'http://openweathermap.org/img/wn/' + data.daily[0].weather[0].icon + '.png') // ICON //
        $('.date-1').append(day[0]);// DATE //
        $('.weather-1').append(temp[0] + feelsLikeTemp[0] + description[0]);

        //////// DAY TWO ///////

        $('.weather-icon-2').attr('src', 'http://openweathermap.org/img/wn/' + data.daily[1].weather[0].icon + '.png'); // ICON //
        $('.date-2').append(day[1]);// DATE //
        $('.weather-2').append(temp[1] + feelsLikeTemp[1] + description[1]);

        //////// DAY THREE ///////

        $('.weather-icon-3').attr('src', 'http://openweathermap.org/img/wn/' + data.daily[2].weather[0].icon + '.png') // ICON //
        $('.date-3').append(day[2]);// DATE //
        $('.weather-3').append(temp[2] + feelsLikeTemp[2] + description[2]);

        //////// DAY FOUR ///////

        $('.weather-icon-4').attr('src', 'http://openweathermap.org/img/wn/' + data.daily[3].weather[0].icon + '.png') // ICON //
        $('.date-4').append(day[3]);// DATE //
        $('.weather-4').append(temp[3] + feelsLikeTemp[3] + description[3]);

        //////// DAY FIVE ///////

        $('.weather-icon-5').attr('src', 'http://openweathermap.org/img/wn/' + data.daily[4].weather[0].icon + '.png') // ICON //
        $('.date-5').append(day[4]);// DATE //
        $('.weather-5').append(temp[4] + feelsLikeTemp[4] + description[4]);

    });

        ///// WEATHER MAP //////

    const accessToken = MAPBOX_KEY;
    mapboxgl.accessToken = accessToken;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [-98.4916, 29.4252], // starting position [lng, lat]
        zoom: 12 // starting zoom
    });

    //// GEOCODER FOR TEXT INPUT /////
    const geocoder = new MapboxGeocoder ({
        accessToken: mapboxgl.accessToken,
        marker: {
            draggable: true,
            color: 'red'
        },

        mapboxgl: mapboxgl
    });

    $('.geoInput').append(geocoder.onAdd(map));


    ////// DRAGGABLE MARKER /////

    let newLat = '';
    let newLon = '';

    let marker = new mapboxgl.Marker({
        draggable: true,
        color: 'red'
    })
        .setLngLat([-98.4916, 29.4252])
        .addTo(map);

    function onDragEnd() {
        const lngLat = marker.getLngLat();
        newLat = `${lngLat.lat}`.toString();
        newLon = `${lngLat.lng}`.toString();
    }
    marker.on('dragend', onDragEnd);
    ///// FUNCTION TO UPDATE WEATHER AFTER USER INPUT /////

    geocoder.on('results', function(results) {
        // results.preventDefault()
        newLon = results.features[0].center[0].toString();
        newLat = results.features[0].center[1].toString();
                setTimeout(function() {update();}, 3000);
        // marker.on('dragend', onDragEnd);
        // marker.on('dragend', update);
        });

    /////// FUNCTION/GET REQUEST TO UPDATE WEATHER AFTER MARKER HAS BEEN DRAGGED //////

    function update() {
        emptyArr();
        $.get('https://api.openweathermap.org/data/2.5/onecall', {
            lat: newLat,
            lon: newLon,
            exclude: 'minutely,hourly',
            units: 'imperial',
            APPID: OPEN_WEATHER_KEY
        }).done(function (data) {
            getDate(data);
            getTemp(data);
            getFeelsLike(data);
            getDescription(data);

            //////// DAY ONE ///////

            $('.weather-icon-1').attr('src', 'http://openweathermap.org/img/wn/' + data.daily[0].weather[0].icon + '.png') // ICON //
            $('.date-1').html(day[0]);// DATE //
            $('.weather-1').html(temp[0] + feelsLikeTemp[0] + description[0]);

            //////// DAY TWO ///////

            $('.weather-icon-2').attr('src', 'http://openweathermap.org/img/wn/' + data.daily[1].weather[0].icon + '.png'); // ICON //
            $('.date-2').html(day[1]);// DATE //
            $('.weather-2').html(temp[1] + feelsLikeTemp[1] + description[1]);

            //////// DAY THREE ///////

            $('.weather-icon-3').attr('src', 'http://openweathermap.org/img/wn/' + data.daily[2].weather[0].icon + '.png') // ICON //
            $('.date-3').html(day[2]);// DATE //
            $('.weather-3').html(temp[2] + feelsLikeTemp[2] + description[2]);

            //////// DAY FOUR ///////

            $('.weather-icon-4').attr('src', 'http://openweathermap.org/img/wn/' + data.daily[3].weather[0].icon + '.png') // ICON //
            $('.date-4').html(day[3]);// DATE //
            $('.weather-4').html(temp[3] + feelsLikeTemp[3] + description[3]);

            //////// DAY FIVE ///////

            $('.weather-icon-5').attr('src', 'http://openweathermap.org/img/wn/' + data.daily[4].weather[0].icon + '.png') // ICON //
            $('.date-5').html(day[4]);// DATE //
            $('.weather-5').html(temp[4] + feelsLikeTemp[4] + description[4]);
            });
    }

    marker.on('dragend', update);


}());