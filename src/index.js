'use strict';

const maleValues = [
    -216.0475144,
    16.2606339,
    -0.002388645,
    -0.00113732,
    7.01863E-06,
    -1.291E-08
];

const femaleValues = [
    594.31747775582,
    -27.23842536447,
    0.82112226871,
    -0.00930733913,
    4.731582E-05,
    -9.054E-08
];

function calculateWilksScore (gender, bodyWeight, liftedWeight, unitType = 'metric') {
    if (!gender || !bodyWeight || !liftedWeight) {
    	throw new Error('Missing parameters, please fill in gender, body weight and weight.');
	}

	validateInput({gender: gender, bodyWeight: bodyWeight, liftedWeight: liftedWeight, unitType: unitType});

	let coeff = calculateCoefficient(gender, bodyWeight, unitType);

    return liftedWeight * coeff;
}

function calculateWeightToLift (gender, bodyWeight, wilksScore, unitType = 'metric') {
	if (!gender || !bodyWeight || !wilksScore) {
		throw new Error('Missing parameters, please fill in gender, body weight and Wilks score.');
	}

	validateInput({gender: gender, bodyWeight: bodyWeight, wilksScore: wilksScore, unitType: unitType});

	let coeff = calculateCoefficient(gender, bodyWeight, unitType);

	return unitType === 'imperial' ? 2.20462262185 * (wilksScore / coeff) : wilksScore / coeff;
}

function calculateCoefficient(gender, bodyWeight, unitType) {
	let coeff = 0;
	let values = gender === 'm' ? maleValues : femaleValues;

	if (unitType === 'imperial') {
		bodyWeight /= 2.20462262185;
	}

	for (let i = 0; i <= 5; i++) {
		coeff += (values[i]  * (bodyWeight ** i));
	}

	return 500 / coeff;
}

function validateInput ({gender, bodyWeight, liftedWeight = 0, wilksScore = 0, unitType}) {
	if (typeof gender !== 'string' || (gender !== 'm' && gender !== 'f')) {
		throw new Error('Gender is not valid. Please select m for Male or f for Female.')
	}

	if (typeof bodyWeight !== 'number' || bodyWeight < 0) {
		throw new Error('Body weight is not valid.');
	}

	if (typeof liftedWeight !== 'number' || liftedWeight < 0) {
		throw new Error('Weight is not valid.');
	}

	if (typeof wilksScore !== 'number' || wilksScore < 0) {
		throw new Error('Wilks score is not valid.');
	}

	if (typeof unitType !== 'string' || (unitType !== 'metric' && unitType !== 'imperial')) {
		throw new Error('Unit type is not valid. Please select metric or imperial.');
	}
}

module.exports = {
	calculateWilksScore: calculateWilksScore,
	calculateWeightToLift: calculateWeightToLift
};