# wilks-calculator

This library calculates performs calculations with the Wilks coefficient, which is a coefficient
used by the International Powerlifting Federation to determine the relative strength of competitors.
They also use this coefficient for determining the qualification requirements for championships.


[![Build Status](https://travis-ci.org/evelijn/wilks-calculator.svg?branch=master)](https://travis-ci.org/evelijn/wilks-calculator)
[![npm version](https://badge.fury.io/js/wilks-calculator.svg)](https://badge.fury.io/js/wilks-calculator)
[![Coverage Status](https://coveralls.io/repos/github/evelijn/wilks-calculator/badge.svg?branch=master)](https://coveralls.io/github/evelijn/wilks-calculator?branch=master)

## Installation

`npm install wilks-calculator`

## Usage

`const wilksCalculator = require('wilks-calculator')`

```javascript
wilksCalculator.calculateWilksScore(gender, bodyWeight, liftedWeight, [unitType]);
```

* `gender (string)` - 'm' for Male and 'f' for Female
* `bodyWeight (number)`
* `liftedWeight (number)`
* `unitType (string)` - 'metric' or 'imperial' (optional)


```javascript
wilksCalculator.calculateWeightToLift(gender, bodyWeight, wilksScore, [unitType]);
```

* `gender (string)` - 'm' for Male and 'f' for Female
* `bodyWeight (number)`
* `wilksScore (number)`
* `unitType (string)` - 'metric' or 'imperial' (optional)

```javascript
wilksCalculator.calculateNeededBodyWeight(gender, liftedWeight, wilksScore, [unitType]);
```

* `gender (string)` - 'm' for Male and 'f' for Female
* `liftedWeight (number)`
* `wilksScore (number)`
* `unitType (string)` - 'metric' or 'imperial' (optional)

## Examples

### `calculateWilksScore`
```javascript
var femaleWilksScore = calculateWilksScore('f', 60, 300);
// Returns 334.47

var maleWilksScore = calculateWilksScore('m', 90, 500);
// Returns 319.20

var femaleImperialWilksScore = calculateWilksScore('f', 132, 660, 'imperial');
// Returns 334.31

var maleImperialWilksScore = calculateWilksScore('m', 176, 882, 'imperial');
// Returns 273.49
```

### `calculateWeightToLift`
```javascript
var femaleTotal = calculateWeightToLift('f', 60, 350);
// Returns 313.93 (kg)

var maleTotal = calculateWeightToLift('m', 80, 350);
// Returns 512.67 (kg)

var femaleImperialTotal = calculateWeightToLift('f', 132, 660, 'imperial');
// Returns 690.97 (lbs)

var maleImperialTotal = calculateWeightToLift('m', 176, 350, 'imperial');
// Returns 1128.74 (lbs)
```

### `calculateNeededBodyWeight`
```javascript
var femaleTotal = calculateNeededBodyWeight('f', 300, 350);
// Returns 56.6 (kg)

var maleTotal = calculateNeededBodyWeight('m', 600, 350);
// Returns 113.2 (kg)

var femaleImperialTotal = calculateNeededBodyWeight('f', 690, 660, 'imperial');
// Returns 131.62 (lbs)

var maleImperialTotal = calculateNeededBodyWeight('m', 1128, 350, 'imperial');
// Returns 175.70 (lbs)
```

## Tests

`npm test`