// 1. What is synchronous?
// Answer: Synchronous process is performed one at a time and only when one is completed, the following will be run or unblocked (wait for a task to finish before continue to the next one).

// 2. What is asynchronous?
// Answer: In asynchronous process, we can move to another code before the previous one finishes (multiple codes run simultaneously).

// 3. Can we use asynchronous concept in browser?
// Answer: Yes

// 4. What is the result of the code below?
// Answer: The first console.log() will have 1-5 as the result, while the second second.log() will only have 6 as a result.

// 5. If there is any difference between the first and second result, what is the reason?
// Answer: Because for loop only finish when the set condition breaks (in this case when i=5). setTimeout function takes a callback function (executed after another finishes running), in this case when the loop finishes. 
// In addition, the code uses var to define the i variable which can't create seperate scope for the code block like when we use let to declare the variable.

// 6. Fix the code below so that it can result in the same number
for (let i = 1; i<=5; i++) {
    console.log("first log: ", i); // 01 - Pertama
    setTimeout(() => console.log("second log: ", i), 100); // 02 - Kedua
}
  