# wilks-calculator

A library that will calculate the Wilks score a powerlifter has 
based on their gender, body weight and lifted weight.

## Installation

`npm install wilks-calculator`

## Usage

```
const calculateWilksScore = require('wilks-calculator')

calculateWilksScore(gender, bodyWeight, liftedWeight, [unitType]);
```

* `gender (string)` - 'm' for Male and 'f' for Female
* `bodyWeight (number)`
* `liftedWeight (number)`
* `unitType (string)` - 'metric' or 'imperial' (optional)


## Examples

```

var femaleWilksScore = calculateWilksScore('f', 60, 300);

var maleWilksScore = calculateWilksScore('m', 90, 500);

var femaleImperialWilksScore = calculateWilksScore('f', 132, 660, 'imperial');

var maleImperialWilksScore = calculateWilksScore('m', 200, 1100, 'imperial');

```

## Tests

`npm test`