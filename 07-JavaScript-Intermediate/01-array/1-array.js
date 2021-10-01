// Question - 01
// Create a function called reverse :
// - Have one parameter: arr [array] => array which the values will be manipulated
// - Return value : new reversed array
const arr = [1, 2, 3];
const arr2 = [8, 1, 5, 7];
function reverse(arr) {
    // Sort the array
    const sorted = arr.sort();
    const result = [];
    // Add the array to the result in descending order
    sorted.forEach(function(value){
        result.unshift(value);
    })
    return result;
};

const newArr = reverse(arr);
const newArr2 = reverse(arr2);

console.log(arr, newArr);
console.log(arr2, newArr2);


// Question - 02
// Create a function to return total number of elements of an array that are above the average:
// - Have 1 parameter: arr [Array of Number] => one dimension of array with values of number
// - Return value [Number] number of elements that above the average

const arr1 = [1, 3, 4, 1, 2, 8];
const arr2 = [5, 6, 7, 8, 1, 3];

function getAverage( arr ) {
    let number = "number"; 
    arr.forEach(function(value,index){
        if(typeof value !== "number"){
            number = "not number"
        }
    })

    if(number !== "number"){
        return "Sorry, your array contains non numeric data, we can't find the average."
    } else {
        let total = 0;
        arr.forEach(function(value){
            total += value;
        })
        let average = total/arr.length;
        let aboveAverage = [];
        arr.forEach(function(value){
            if(value > average){
                aboveAverage.push(value);
            }
        })
        return aboveAverage.length;
    }
}

console.log(getAverage(arr1))
console.log(getAverage(arr2))

// Question - 03
// Create a function to find an element in a multidimensional array:
// - Have 2 parameters: 
//   - arr [Array] => multidimensional array
//   - num [Number] => element that will be found
// - Return value [number]:
//   - null if the number is not found
//   - index of the number if the number is found

// Steps:
// - Change the array to 1 dimension 
// - Find the number
// - Return null if the number is not found
// - Return index of the number if the number is found

const arr = [
    [10],
    [9, 7, 1],
    [2, 8],
  ];
  
  function searchInArray( arr, num ) {
      let oneDim = [];
      let result = null;
      arr.forEach(function(value){
          value.forEach(function(val){
              oneDim.push(val);
          })
      })
      oneDim.forEach(function(value,index){
          if(value === num){
              result = index;
          }
      })
      return result;
  }
  
  console.log(searchInArray(arr, 3));
  console.log(searchInArray(arr, 2));
  console.log(searchInArray(arr, 4));
  console.log(searchInArray(arr, 8));
  