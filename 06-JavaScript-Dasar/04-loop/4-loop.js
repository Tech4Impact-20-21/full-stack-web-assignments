/// Question - 01
/// Loop to print prime number from 1-100
for (let number =  1; number <= 100; number++) { 
    let result = "prime";
    /// Divider will be 2 until (`number`-1) (for `number`= 1 or 2, the result will stay being prime, since this looping will not be run)
    for(let divider = 2; divider < number; divider++){
        /// If the division has a remainder then the number is still a prime number
        if (number % divider !== 0){
            result = "prime";
        }
        /// However, if any of the division has no remainder, then the number is not a prime number 
        else {
            result = "not prime";
            break;
        }
    }
    /// Since 1 is not a prime number, so the conditions of a number being a prime number will consist of that it is greater than 2 and `result` equal to "prime"
    if (number > 1 && result === "prime"){
        console.log(number);
    }
}

/// Question - 02
/// Find fiftieth prime number using while loop

let primeCounter = 0;
let number = 0;

/// The looping will be stopped if the primeCounter has reached 50
while (primeCounter < 50) {
    number++;
    let result = "prime";
    /// Divider will be 2 until (`number`-1) (for `number`= 1 or 2, the result will stay being prime, since this looping will not be run)
    for(let divider = 2; divider < number; divider++){
        /// If the division has a remainder then the number is still a prime number
        if (number % divider !== 0){
            result = "prime";
        }
        /// However, if any of the division has no remainder, then the number is not a prime number 
        else {
            result = "not prime";
            break;
        }
    }
    /// Since 1 is not a prime number, so the conditions of a number being a prime number will consist of that it is greater than 2 and `result` equal to "prime"
    if (number > 1 && result === "prime"){
            primeCounter++;
    }
}
const fiftiethPrime = number;
console.log(fiftiethPrime);


/// Question - 03
/// Find fiftieth odd number using do while loop

let oddCounter = 0;
number = 0;

/// The looping will be stopped if the oddCounter has reached 50
do { 
    number++;
    /// If a number has a remainder when it is divide by 2, then it is an odd number
    if(number % 2 !== 0){
        oddCounter++
    } 
 } while (oddCounter < 50)

const fiftiethOdd = number;
console.log(fiftiethOdd);