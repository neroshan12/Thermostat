'use strict';

console.log("hello");

function Thermostat() {       // Created a Thermostat object constructor and gives it a property of temperature
  this.temperature = 20;
};

Thermostat.prototype.getCurrentTemperature = function() {   // prototype keyword to associate or bind the getCurrentTemperature function to our Thermostat
  return this.temperature;
};

Thermostat.prototype.up = function() {
  this.temperature += 1;
};
