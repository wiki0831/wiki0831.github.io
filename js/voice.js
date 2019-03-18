var locationNow = "Blacksburg";

$(document).ready(function() {
  navigator.mediaDevices.getUserMedia({
    audio: true
  });
});

if (annyang) {
  // Let's define a command.
  var commands = {
    "Good morning": function() {
      var element = document.getElementsByClassName(
        "w3-container w3-center w3-animate-opacity"
      )[0];
      element.hidden = false;
    },
    hello: function() {
      var element = document.getElementsByClassName(
        "w3-container w3-center w3-animate-opacity"
      )[0];
      element.hidden = false;
    },
    "hello it's me": function() {
      var element = document.getElementsByClassName(
        "w3-container w3-center w3-animate-opacity"
      )[0];
      element.hidden = false;
    },
    goodbye: function() {
      var element = document.getElementsByClassName(
        "w3-container w3-center w3-animate-opacity"
      )[0];
      element.hidden = true;
    },
    bye: function() {
      var element = document.getElementsByClassName(
        "w3-container w3-center w3-animate-opacity"
      )[0];
      element.hidden = true;
    },
    "shut up": function() {
      var element = document.getElementsByClassName(
        "w3-container w3-center w3-animate-opacity"
      )[0];
      element.hidden = true;
    },
    "close the map": function() {
      var displayContainer = document.getElementsByClassName("mapContainer")[0];
      displayContainer.hidden = true;
    },
    "show me the map": function() {
      var displayContainer = document.getElementsByClassName("mapContainer")[0];
      displayContainer.hidden = false;
    },
    "weather in *location": function(location) {
      console.log(locationNow);
      locationNow = location;
      console.log(locationNow);
      refreshWeather();
    }
  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening.
  annyang.start();

  annyang.addCallback("result", function(phrases) {
    console.log("I think the user said: ", phrases[0]);
    console.log("But then again, it could be any of the following: ", phrases);
  });
}

function refreshWeather() {
  console.log(locationNow);
  console.log("prcsss ");
  getWeather(locationNow);
}
