const name = "skilvul"; /// String
const age = 10; /// Number
const isMarried = false; /// Boolean

/// Question - 01
/// Use built-in function of string data to change variable `name` into uppercase
const upperCase = name.toUpperCase();
console.log(upperCase);


/// Question - 02
/// Use built-in function of JavaScript to check variable `age` type
const typeOfAge = typeof age;
console.log(typeOfAge);

/// Question - 03
/// Use built-in function of number data to take the first 2 decimals of pi
const pi = 3.141592653589793238;
const twoDigitsOfPi = pi.toFixed(2);
console.log(twoDigitsOfPi);


/// Question - 04
/// Use built-in function of JavaScript to check whether the following data is number or not
const isNotNumber = isNaN("10000");
console.log(isNotNumber);


/// Question - 05
/// Use built-in function of JavaScript to change string into number
const stringToNumber = Number("1000");
console.log(stringToNumber);