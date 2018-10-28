'use strict';

const expect = require('chai').expect;
const calculateWilksScore = require('../src/index');

describe('Wilks Calculator', function () {
	describe('Results', function() {
		it('should return a number', function(){
			expect(calculateWilksScore('m', 90, 500)).to.be.a('number');
		});

		it('should return 319.20 for a male lifter', function(){
			expect(calculateWilksScore('m', 90, 500)).to.be.closeTo(319.20, 0.01);
		});

		it('should return 334.47 for a female lifter', function(){
			expect(calculateWilksScore('f', 60, 300)).to.be.closeTo(334.47, 0.01);
		});

		it('should return 273.49 for a male lifter when the unit type is imperial', function(){
			expect(calculateWilksScore('m', 176, 882, 'imperial')).to.be.closeTo(273.49, 0.01);
		});

		it('should return 334.31 for a female lifter when the unit type is imperial', function(){
			expect(calculateWilksScore('f', 132, 660, 'imperial')).to.be.closeTo(334.31, 0.01);
		});
	});

	describe('Errors', function() {
		it('should throw an error when no parameters have been entered', function() {
			expect(calculateWilksScore).to.throw();
		});

		it('should throw an error when no gender has been entered', function() {
			expect(function () { calculateWilksScore(60, 300) }).to.throw();
		});

		it('should throw an error when no lifted weight has been entered', function() {
			expect(function () { calculateWilksScore('f', 60) }).to.throw();
		});

		it('should throw an error when the entered gender is not a string', function() {
			expect(function () { calculateWilksScore(500, 60, 300) }).to.throw();
		});

		it('should throw an error when the entered gender is invalid', function() {
			expect(function () { calculateWilksScore('string', 60, 300) }).to.throw();
		});

		it('should throw an error when the entered body weight is not a number', function() {
			expect(function () { calculateWilksScore('f', 'string', 300) }).to.throw();
		});

		it('should throw an error when the entered body weight is a negative number', function() {
			expect(function () { calculateWilksScore('f', -60, 300) }).to.throw();
		});

		it('should throw an error when the entered lifted weight is not a number', function() {
			expect(function () { calculateWilksScore('f', 60, 'string') }).to.throw();
		});

		it('should throw an error when the entered lifted weight is a negative number', function() {
			expect(function () { calculateWilksScore('f', 60, -300) }).to.throw();
		});

		it('should throw an error when the entered unit type is not a string', function() {
			expect(function () { calculateWilksScore('f', 60, 300, 400) }).to.throw();
		});

		it('should throw an error when the entered unit type is invalid', function() {
			expect(function () { calculateWilksScore('f', 60, 300, 'string') }).to.throw();
		});
	});
});