// 01
function reverse(arr) {
    let arrnew = [];
    let idx = 0;

    for(let i=arr.length-1; i>=0; i--) {
        arrnew[idx] = arr[i];
        idx++;
    }

    return arrnew;
}

const arr = [1, 2, 3];
const arrr = [8, 1, 5, 7];

const newArr = reverse(arr);
const newArr2 = reverse(arrr);

console.log(arr, newArr);
console.log(arrr, newArr2);

// 02
const arr1 = [1, 3, 4, 1, 2, 8];
const arr2 = [5, 6, 7, 8, 1, 3];

function getAverage(arr) {
    let sum = 0;
    arr.forEach(function(item){
        sum += item;
    });

    let avg = sum/arr.length;
    let count = 0;

    arr.forEach( function(item){
        if(item > avg){
            count++;
        }
    });

    return count;
}

console.log(getAverage(arr1))
console.log(getAverage(arr2))

// 03
const arr3 = [
    [10],
    [9, 7, 1],
    [2, 8],
];
  
function searchInArray(arr, num) {
    let newarr = [];

    // ubah array jadi satu dimensi
    arr.forEach( function(item){
        newarr = newarr.concat(item);
    });

    for(let i=0; i<newarr.length; i++){
        if(newarr[i] == num){
            return i;
        }
    }

    return null;
}
  
console.log(searchInArray(arr3, 3));
console.log(searchInArray(arr3, 2));
console.log(searchInArray(arr3, 4));
console.log(searchInArray(arr3, 8));