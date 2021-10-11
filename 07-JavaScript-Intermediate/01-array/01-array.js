//soal 01.
const arr = [1, 2, 3];
const arr2 = [8, 1, 5, 7];
function reverse( arr ) { 
    const sort = arr.sort();
    const result = [];

    sort.forEach(function (value) {
        result.unshift(value);
    });
    return result;
 }

const newArr = reverse(arr);
const newArr2 = reverse(arr2);

console.log(arr, newArr);
console.log(arr2, newArr2);

//soal 02.
const arr1 = [1, 3, 4, 1, 2, 8];
const arr2 = [5, 6, 7, 8, 1, 3];

function getAverage(arr) {
    const average = arr.reduce((a,b) => a+b)/arr.length;
    let answer = 0;
	    arr.forEach(i=> {
        if (i > average)
        answer++;
    });
	return answer;
 }
console.log(getAverage(arr1))
console.log(getAverage(arr2))

//soal 03.
const arr = [
  [10],
  [9, 7, 1],
  [2, 8],
];

function searchInArray(arr, number) {
    for (let i=0; i<arr.length; i++) {
        for (let j=0; j<arr[i].length; j++){
            if (arr[i][j] == number) {
                return i+j+2;
            }
        }
    }
    return null
}
console.log(searchInArray(arr, 3));
console.log(searchInArray(arr, 2));
console.log(searchInArray(arr, 4));
console.log(searchInArray(arr, 8));
