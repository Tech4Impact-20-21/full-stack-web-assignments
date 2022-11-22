/// Question - 01
/// You are asked to summarize:
/// - How many variable scope is there in JavaScript?
/// - Explain briefly each of variable scope in JavaScript!
/// - Create a simple implementation of each variable scope in JavaScript!

/// Answer
/// There are 3 variable scopes : 
/// - Block scope: variables that are declared using `let` and `const` in a {} block cannot be accessed from outside the block (Variables declared using `var` can not have block scope since it is accessible outside the block).
/// - Local / function scope : variables that are declared inside a function and are not accessible outside the function (created when a function starts and deleted when the function is completed).
/// - Global scope: variables declared outside a function and are accessible throughout the file.
/// Simple implementation:

/// Block scope
{
  let a = 77;
}
console.log(a); // error

{
  let a = 77;
  console.log(a); // 77
}

/// Local / function scope
function myname(){
  let b = "Aurellia";
  console.log(b);
}
console.log(b); // error
myname(); //"Aurellia"

/// Global scope
let c = "Christie";
console.log(c); // "Christie"

function myname(){
  console.log(c);
}
myname(); // "Christie"


/// Question - 02
/// You are asked to analyze the codes below
/// - what will console.log return?
/// - what is the reason that the console.log won't return the value of "name" variable?

/// Answer
/// - console.log will return "Mariah"
/// - The return won't be "John" since "name" in the printFirstName function is a parameter, is not the global variable "name" which contains "John Watson".
///   Then, in the console.log, the user inputs the argument of "Mariah Carey" which will be the "name" parameter in the printFirstName function. 
///   Therefore, the result will be "Mariah", instead of "John".

const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));