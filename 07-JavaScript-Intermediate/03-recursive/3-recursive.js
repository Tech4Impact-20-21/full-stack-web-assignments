// Question - 01
// Create a function called sumOfArray which will be used to calculate total of a number array:
// - Use recursive
// - Parameter : arr [Array] -> array of number which will be calculated
// - Return value [number]

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];
function sumOfArray( arr ) {
    // Base condition
    if(arr.length === 0){
        return 0;
    } else {
        return arr[0] + sumOfArray(arr.slice(1));
    }
}

console.log(sumOfArray(arr1));
console.log(sumOfArray(arr2));

// Question - 02
// Return number of value that are above the average
// Steps:
// - Find the average using the function you created in the first question
// - Create a function with 2 parameters: arr[Array], avg[Number]
// - Return number of value that are above the average

const avg1 = sumOfArray(arr1)/arr1.length;
const avg2 = sumOfArray(arr2)/arr2.length;
function countAboveAvg( arr, avg ) {
    // Base condition
    if(arr.length === 0){
        return 0;
    } else {
        if(arr[0] > avg){
            return 1 + countAboveAvg(arr.slice(1), avg);
        } else{
            return countAboveAvg(arr.slice(1), avg);
        }
    }
}

const totalAboveAvg1 = countAboveAvg(arr1, avg1);
const totalAboveAvg2 = countAboveAvg(arr2, avg2);

console.log(totalAboveAvg1);
console.log(totalAboveAvg2);

// Question - 03
// Create a function to find a value in a number array:
// - Use recursive
// - Parameters : arr [Array] & num [Number]
// - Return "angka tidak ditemukan" if the number is not found
// - Return "angka ditemukan pada index: $INDEX" if the number is found

const arr = [1, 2, 3, 4, 5];
function searchInArray( arr, num ) {
    if(arr.length === 0){
        return "angka tidak ditemukan"
    } else {
        if(arr[(arr.length-1)] === num){
            return `angka ditemukan pada index: ${(arr.length-1)}`
        } else {
            return searchInArray(arr.slice(0, (arr.length-1)),num)
        } 
    }
}

searchInArray(arr, 6);
searchInArray(arr, 1);
searchInArray(arr, 8);

// Question - 04
// Create a function to print pyramid of alphabet:
// - Use recursive
// - Parameters: 2 numbers
// - Use console.log to return the alphabet
// - Maximum number of traditional loop used in this question : 1

function trianglePattern( row, col ) {
    // Dictionary
    let dict = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    // Base condition
    if(row === 0){
        return "";
    } else{
        console.log(" ".repeat(row-1)+dict.slice(col-row, (col-row)+col-(row-1)))
        console.log(trianglePattern(row-1, col))
    }
}

trianglePattern(5, 5);
