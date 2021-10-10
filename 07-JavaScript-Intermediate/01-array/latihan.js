//soal no 2 array
const arr1 = [1, 3, 4, 1, 2, 8];
const arr2 = [5, 6, 7, 8, 1, 3];

function average(array) {
     return array.reduce(function (a, b) {
         let total = a + b;
         return total
       }) / array.length; 
    
}

let count = 0;
function getAverage(array){
     for(let i=0; i<array.length; i++){
         if(array[i] >= average(array)){
            count++
         } return count
     }
}





console.log(getAverage(arr1))
// console.log(getAverage(arr2))