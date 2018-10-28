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

/**
 * Returns a Wilks score based on the body weight of the lifter and the weight they have lifted.
 *
 * @param gender The gender of the lifter the wilks score is calculated for ('m' for male, 'f' for female).
 * @param bodyWeight The body weight of the lifter the wilks score is calculated for.
 * @param liftedWeight The weight the lifter has lifted.
 * @param unitType Optional parameter for lifters using the imperial unit system ('kg' is default, 'imperial' for the imperial system).
 *
 * @returns The Wilks score.
 */
function calculateWilksScore (gender, bodyWeight, liftedWeight, unitType = 'metric') {
    if (!gender || !bodyWeight || !liftedWeight) {
    	throw new Error('Missing parameters, please fill in gender, body weight and weight.');
	}

	if (unitType === 'imperial') {
		liftedWeight /= 2.20462262185;
	}

	validateInput({gender: gender, bodyWeight: bodyWeight, liftedWeight: liftedWeight, unitType: unitType});

	let coeff = calculateCoefficient(gender, bodyWeight, unitType);

    return liftedWeight * coeff;
}

/**
 * Returns a total amount of weight to lift based on the body weight of the lifter and the preferred Wilks score.
 *
 * @param gender The gender of the lifter the wilks score is calculated for ('m' for male, 'f' for female).
 * @param bodyWeight The body weight of the lifter the wilks score is calculated for.
 * @param wilksScore The preferred Wilks score.
 * @param unitType Optional parameter for lifters using the imperial unit system ('kg' is default, 'imperial' for the imperial system).
 *
 * @returns The total amount of weight to lift.
 */
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