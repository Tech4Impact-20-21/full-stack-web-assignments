/// Question - 01
/// You are asked to explain the difference between:
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// Answer
/// - Type Error : an error that occurs when a variable or parameter is not of a valid type, e.g. when we try to use .toUpperCase() to a numeric variable.
/// - Reference Error : an error that occurs when dereferencing an invalid reference, e.g. when we try to call variable that is not defined yet.
/// - Range Error : an error that occurs when a numeric variable or parameter is outside of its valid range, e.g. when we try to pass bad values to Number.prototype.toExponential(), Number.prototype.toFixed() or Number.prototype.toPrecision().
/// - Syntax Error : an eror that occurs when there is a syntax error, e.g. when we try to code `1.toUpperCase()` or anything that is not a valid syntax in JavaScript.


/// Question - 02
/// You are asked to analyze the codes below
/// - what will happen if we run the codes?
/// - if there is an error, which error category is it belong to?
/// - if there is an error, explain why it happened

/// Answer
/// - The outputs will be '15000000' for the first console.log and 'ReferenceError: salaryWithConst is not defined' for the second one.
/// - Reference Error
/// - The reasons: this is the implementation of JavaScript Hoisting, which is JavaScript's default behavior of moving declarations to the top.
///     - salaryWithVar will return 15000000 since it is declared using var. Variable declared with var will be hoisted and initialized, therefore it can be used before it has been declared.
///     - salaryWithConst will return ReferenceError since it is declared using const. Variable declared with const are hoisted but not initialized, therefore it can't be used before it has been declared.

console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;
