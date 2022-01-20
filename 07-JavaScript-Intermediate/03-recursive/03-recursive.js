// 01
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];

function sumOfArray(arr) {
    if(arr.length == 0) {
        return 0;
    }
    
    let arr1 = arr[0];

    return arr1 + sumOfArray(arr.filter((element, index) => index > 0));
}

console.log(sumOfArray(arr1));
console.log(sumOfArray(arr2));

// 02
const avg1 = sumOfArray(arr1)/arr1.length;
const avg2 = sumOfArray(arr2)/arr2.length;

function countAboveAvg(arr, avg) {
    if(arr.length == 0) {
        return 0;
    }

    let count = 0;
    if(arr[0] >= avg) {
        count++;
    }

    let new_arr = arr.filter((element, index) => index > 0);
    return count + countAboveAvg(new_arr, avg);
}

const totalAboveAvg1 = countAboveAvg(arr1, avg1);
const totalAboveAvg2 = countAboveAvg(arr2, avg2);

console.log(totalAboveAvg1);
console.log(totalAboveAvg2);

// 03
const arr = [1, 2, 3, 4, 5];
function searchInArray(arr, num) {
    // console.log(arr);
    if(arr.length == 0){
        return "angka tidak ditemukan";
    }

    if(arr[(arr.length - 1)] == num) {
        // console.log(arr.length)
        return "angka ditemukan pada index: " + (arr.length - 1);
    }

    return searchInArray(arr.filter((element, index) => index < arr.length-1), num);
}

console.log(searchInArray(arr, 6));
console.log(searchInArray(arr, 1));
console.log(searchInArray(arr, 8));

// 04
function trianglePattern(num1, num2) {
    if(num1 == 0){
        return;
    }

    let triangle = "";
    for(let i=0; i<num2; i++){
        if(i < num1-1) {
            triangle = triangle.concat(" ");
        } else {
            triangle = triangle.concat(String.fromCharCode(64 + (num2 - num1 + (i - num1) + 2)))
        }
    }

    console.log(triangle);
    trianglePattern(num1-1, num2);
}

const first = 5;
const second = 3;
const third = 2;

trianglePattern(first, first);
trianglePattern(second, second);
trianglePattern(third, third);

