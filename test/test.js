'use strict';

const expect = require('chai').expect;
const wilksCalculator = require('../src/index');

describe('Wilks Calculator', function () {
	describe('calculateWilksScore', function() {
		describe('Results', function() {
			it('should return a number', function(){
				expect(wilksCalculator.calculateWilksScore('m', 90, 500)).to.be.a('number');
			});

			it('should return 319.20 for a male lifter', function(){
				expect(wilksCalculator.calculateWilksScore('m', 90, 500)).to.be.closeTo(319.20, 0.01);
			});

			it('should return 334.47 for a female lifter', function(){
				expect(wilksCalculator.calculateWilksScore('f', 60, 300)).to.be.closeTo(334.47, 0.01);
			});

			it('should return 273.49 for a male lifter when the unit type is imperial', function(){
				expect(wilksCalculator.calculateWilksScore('m', 176, 882, 'imperial')).to.be.closeTo(273.49, 0.01);
			});

			it('should return 334.31 for a female lifter when the unit type is imperial', function(){
				expect(wilksCalculator.calculateWilksScore('f', 132, 660, 'imperial')).to.be.closeTo(334.31, 0.01);
			});
		});

		describe('Errors', function() {
			it('should throw an error when no parameters have been entered', function() {
				expect(function () { wilksCalculator.calculateWilksScore() }).to.throw();
			});

			it('should throw an error when no gender has been entered', function() {
				expect(function () { wilksCalculator.calculateWilksScore(60, 300) }).to.throw();
			});

			it('should throw an error when no lifted weight has been entered', function() {
				expect(function () { wilksCalculator.calculateWilksScore('f', 60) }).to.throw();
			});

			it('should throw an error when the entered gender is not a string', function() {
				expect(function () { wilksCalculator.calculateWilksScore(500, 60, 300) }).to.throw();
			});

			it('should throw an error when the entered gender is invalid', function() {
				expect(function () { wilksCalculator.calculateWilksScore('string', 60, 300) }).to.throw();
			});

			it('should throw an error when the entered body weight is not a number', function() {
				expect(function () { wilksCalculator.calculateWilksScore('f', 'string', 300) }).to.throw();
			});

			it('should throw an error when the entered body weight is a negative number', function() {
				expect(function () { wilksCalculator.calculateWilksScore('f', -60, 300) }).to.throw();
			});

			it('should throw an error when the entered lifted weight is not a number', function() {
				expect(function () { wilksCalculator.calculateWilksScore('f', 60, 'string') }).to.throw();
			});

			it('should throw an error when the entered lifted weight is a negative number', function() {
				expect(function () { wilksCalculator.calculateWilksScore('f', 60, -300) }).to.throw();
			});

			it('should throw an error when the entered unit type is not a string', function() {
				expect(function () { wilksCalculator.calculateWilksScore('f', 60, 300, 400) }).to.throw();
			});

			it('should throw an error when the entered unit type is invalid', function() {
				expect(function () { wilksCalculator.calculateWilksScore('f', 60, 300, 'string') }).to.throw();
			});
		});
	});

	describe('calculateWeightToLift', function() {
		describe('Results', function() {
			it('should return a number', function(){
				expect(wilksCalculator.calculateWeightToLift('m', 80, 350)).to.be.a('number');
			});

			it('should return 512.67 for a male lifter', function(){
				expect(wilksCalculator.calculateWeightToLift('m', 80, 350)).to.be.closeTo(512.67, 0.01);
			});

			it('should return 313.93 for a female lifter', function(){
				expect(wilksCalculator.calculateWeightToLift('f', 60, 350)).to.be.closeTo(313.93, 0.01);
			});

			it('should return 1128.74 for a male lifter when the unit type is imperial', function(){
				expect(wilksCalculator.calculateWeightToLift('m', 176, 350, 'imperial')).to.be.closeTo(1128.74, 0.01);
			});

			it('should return 690.97 for a female lifter when the unit type is imperial', function(){
				expect(wilksCalculator.calculateWeightToLift('f', 132, 350, 'imperial')).to.be.closeTo(690.97, 0.01);
			});
		});

		describe('Errors', function() {
			it('should throw an error when no parameters have been entered', function() {
				expect(function () { wilksCalculator.calculateWeightToLift() }).to.throw();
			});

			it('should throw an error when no gender has been entered', function() {
				expect(function () { wilksCalculator.calculateWeightToLift(80, 350) }).to.throw();
			});

			it('should throw an error when no wilks score has been entered', function() {
				expect(function () { wilksCalculator.calculateWeightToLift('m', 80) }).to.throw();
			});

			it('should throw an error when the entered gender is not a string', function() {
				expect(function () { wilksCalculator.calculateWeightToLift(500, 80, 350) }).to.throw();
			});

			it('should throw an error when the entered gender is invalid', function() {
				expect(function () { wilksCalculator.calculateWeightToLift('string', 80, 350) }).to.throw();
			});

			it('should throw an error when the entered body weight is not a number', function() {
				expect(function () { wilksCalculator.calculateWeightToLift('m', 'string', 350) }).to.throw();
			});

			it('should throw an error when the entered body weight is a negative number', function() {
				expect(function () { wilksCalculator.calculateWeightToLift('m', -80, 350) }).to.throw();
			});

			it('should throw an error when the entered wilks score is not a number', function() {
				expect(function () { wilksCalculator.calculateWeightToLift('m', 80, 'string') }).to.throw();
			});

			it('should throw an error when the entered wilks score is a negative number', function() {
				expect(function () { wilksCalculator.calculateWeightToLift('m', 80, -350) }).to.throw();
			});

			it('should throw an error when the entered unit type is not a string', function() {
				expect(function () { wilksCalculator.calculateWeightToLift('m', 80, 350, 400) }).to.throw();
			});

			it('should throw an error when the entered unit type is invalid', function() {
				expect(function () { wilksCalculator.calculateWeightToLift('m', 80, 350, 'string') }).to.throw();
			});
		});
	});
});