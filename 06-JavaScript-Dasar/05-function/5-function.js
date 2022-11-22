/// Question - 01
/// Create a function to calculate amount of tax to be paid

/// Specification
/// - 0% tax if $SALARY < Rp 5.000.000
/// - 5% tax if  Rp 5.000.000 <= $SALARY < Rp 10.000.000
/// - 10% tax if Rp 10.000.000 <= $SALARY < Rp 20.000.000
/// - 20% tax if Rp 20.000.000 <= $SALARY 

/// Parameter
/// - (Number) `salary` => salary you got

/// Return Value
/// - (Number) total tax to be paid

/// Create the function
function taxCalc(salary) { 
    let tax = 0;
    if (typeof salary !== "number"){
        return "Your input is not a number";
    }
    if (salary < 5000000){
        tax = 0;
    } else if (salary >= 5000000 && salary < 10000000) {
        tax = 0.05 * salary;
    } else if (salary >= 10000000 && salary < 20000000) {
        tax = 0.1 * salary;
    } else {
        tax = 0.2 * salary;
    }
    return tax;
 }

 /// Use the function
input1 = taxCalc(4500000);
console.log(input1);

input2 = taxCalc(5000000);
console.log(input2);

input3 = taxCalc(20000000);
console.log(input3);

/// Question - 02
/// Create a function to calculate BMI of a person and classify him into obesity or not.

/// BMI Spesification
/// - "under weight" if $BMI < 18.5
/// - "normal" if 18.5 < $BMI < 24.9
/// - "over weight" if 25 < $BMI < 29.9
/// - "obese" if 30 < $BMI < 34.9
/// - "extremely obese" if 35 < BMI

/// Parameter
/// - (Number) `height` ⇒ person's height (cm)
/// - (Number) `weight` ⇒ person's weight (kg) 

/// Return Value
/// - (String) BMI category according to the calculated BMI by
///   (weight/(height^2)) * 10000

/// Create the function
function checkBMI(weight, height) { 
    let BMI = 0;
    if ((typeof weight !== "number") || (typeof height !== "number")){
        return "Your input is not a number";
    }
    BMI = (weight / Math.pow(height,2)) * 10000
    if (BMI < 18.5){
        result = "under weight";
    } else if (BMI >= 18.5 && BMI < 24.9) {
        result = "normal";
    } else if (BMI > 25 && BMI < 29.9) {
        result = "over weight";
    } else if (BMI > 30 && BMI < 34.9) {
        result = "obese";
    } else {
        result = "extremely obese";
    }
    return result;
}

/// Use the function
input1 = checkBMI(80,170);
console.log(input1);

input2 = checkBMI(80,160);
console.log(input2);

/// Question - 03
/// Create a function to change first letter of each word to uppercase

/// Parameter
/// - (String) sentence => sentence that will be changed

/// Return Value
/// - (String) sentence with title Case

/// Create the function
function convToUpperCase(sentence) { 
    let result = ""
    sentence = sentence.toLowerCase();
    sentence = sentence.split(" ");
    for(let word = 0; word < sentence.length; word++){
        sentence[word] = sentence[word].charAt(0).toUpperCase() + sentence[word].slice(1);
    }
    result = sentence.join(" ");
    return result;
}
 
/// Use the function
input1 = convToUpperCase("hello bandung");
console.log(input1);

input2 = convToUpperCase("helloworldwide");
console.log(input2);

/// Question - 04
/// Create function to find the first non repeated letter

/// Specification
/// - if the input are more than 1 word, return "kata tidak boleh dipisah"
/// - if there is no non repeating character, return ""
/// - if there is non repeating character, return the first one

/// Parameter
/// - (String) word => word to be found the first non repeated letter (WORD SHOULDN'T BE SPLITTED)

/// Result Value
/// (String) first non repeated letter

/// Create the function (masalahnya repeated ga simpen smua yang kembar, cuma yang terakhir kembar :)
function firstNonRepeatedChar(word) {
    for(let i = 0; i< word.length; i++){
        if(word.indexOf(word[i]) === word.lastIndexOf(word[i])){
            return word[i];
        }
    }
    return ""
}

/// Use the function
input1 = firstNonRepeatedChar("alloha");
console.log(input1);

input2 = firstNonRepeatedChar("wooohoowh");
console.log(input2);