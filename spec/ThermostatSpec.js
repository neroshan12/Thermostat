'use strict';

describe("Thermostat", function() {

var thermostat;

beforeEach(function() {
  thermostat = new Thermostat();
});

  it("starts at 20 degrees", function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);                  //expect(output of program).toBe(what you expect it to be)
  });

  it("increase the temperature with()", function() {
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it("decreases the temperature with()", function() {
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it("should have a minimum temperature of 10 degrees", function() {
    for (var i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });
});
