'use strict';

describe("Thermostat", function() {

var thermostat;

beforeEach(function() {
  thermostat = new Thermostat();
});

  it("starts at 20 degrees", function() {
    expect(thermostat.temperature).toBe(20);                  //expect(output of program).toBe(what you expect it to be)
  });
});
