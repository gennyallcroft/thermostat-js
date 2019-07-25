$(document).ready(function() {
  var thermostat = new Thermostat();
  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp);
  });
  updateTemperature();

  displayWeather('London');

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  });

  $('#temp-up').click(function() {
    thermostat.increase(1);
    updateTemperature();
  });

  $('#temp-down').click(function() {
    thermostat.decrease(1);
    updateTemperature();
  });

  $('#temp-reset').click(function() {
    thermostat.reset();
    updateTemperature();
  });

  $('#psm-on').click(function() {
    thermostat.powerSaverOn();
    $('#power-saving-status').text('on')
    updateTemperature();
  })

  $('#psm-off').click(function() {
    thermostat.powerSaverOff();
    $('#power-saving-status').text('off')
    updateTemperature();
  })


  function updateTemperature() {
    $('#temperature').text(thermostat._temperature);
    $('#temperature').attr('class', thermostat.checkUsage());
  };

  function displayWeather(city) {
     var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
     var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
     var units = '&units=metric';
     $.get(url + token + units, function(data) {
       $('#current-temperature').text(data.main.temp);
     });
   }

});
