require("chai").should()
var LeapYear = require("../index.js")

var assert = require('assert');
describe('IsLeapYear function in LeapYear class', function () {
  it('should return true when input is multiple of 4', function () {
    let leapYeap = new LeapYear()
    leapYeap.IsLeapYear(2020).should.to.be.true
  });
  it('should return false when input is not multiple of 4', function () {
    let leapYeap = new LeapYear()
    leapYeap.IsLeapYear(2019).should.to.be.false
  });
  it('should return false when input is not multiple of 100', function () {
    let leapYeap = new LeapYear()
    leapYeap.IsLeapYear(1900).should.to.be.false
  });
  it('should return false when input is not multiple of 100', function () {
    let leapYeap = new LeapYear()
    leapYeap.IsLeapYear(1400).should.to.be.true
  });
  it('should return true when input is multiple of 400 and is not before year 1581', function () {
    let leapYeap = new LeapYear()
    leapYeap.IsLeapYear(800).should.to.be.true
  });
  it('should return false when input is a year before year 0', function () {
    let leapYeap = new LeapYear()
    leapYeap.IsLeapYear(-800).should.to.be.false
  });

});
