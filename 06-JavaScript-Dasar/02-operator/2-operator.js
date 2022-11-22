/// Question - 01
/// Here are the list of this month expenditure and wages. You have to count the left wages after all those expenditure are paid.

/// Expenditure
/// gundam = 750000
/// makan = 2000000
/// kost = 1000000
/// subscription = 250000

/// Wage
/// gajiPokok = 5000000
/// gajiBonus = 10% dari gajiPokok
/// gajiLembur = 5% dari gajiPokok

/// Wage Left
const sisaGaji = 5000000*(1+(0.1+0.05))-(750000+2000000+1000000+250000);
console.log(sisaGaji);

/// Question - 02
/// Use the right operator to check whether the following variables have the same value regardless their data types
const oneInString = "1";
const oneInNumber = 1;
const isSame = oneInString == oneInNumber;
console.log(isSame);

/// Question - 03
/// Use the right operator to check whether studentA has the same or higher grade than studentB
const studentA = 75;
const studentB = 80;
const isHigher = studentA >= studentB;
console.log(isHigher);


/// Question - 04
/// Use the right operator to check whether the question-02 variables have the same value and data types
const final = oneInString === oneInNumber;
console.log(final);