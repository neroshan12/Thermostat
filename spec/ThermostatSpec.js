'use strict';

describe("Thermostat", function() {

var thermostat;

beforeEach(function() {
  thermostat = new Thermostat();
});

  it("starts at 20 degrees", function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);                  //expect(output of program).toBe(what you expect it to be)
  });

  it("increase the temperature with up()", function() {
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });
});
