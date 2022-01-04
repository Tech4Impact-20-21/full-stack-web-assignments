//soal no 1
// Kamu diminta untuk membuat sebuah fungsi reverse yang mana akan membalik sebuah array, fungsi reverse memiliki sepsifikasi sebagai berikut:
// memiliki 1 parameter yaitu:
// arr [Array] => array yang akan kita manipulasi nilainya
// return value [Number] berupa sebuah array baru yang sudah terbalik

const arr = [1, 2, 3];
const arr2 = [8, 1, 5, 7];

const newArr = arr.map(function reverse(arr){
    return arr;
    
}).reverse();

const newArr2 = arr2.map(function reverse(arr2){
    return arr2;
    
}).reverse();

console.log(arr, newArr);
console.log(arr2, newArr2);

//soal no 2
// Kamu diminta untuk membuat sebuah fungsi yang akan mengembalikan total berapa elemen bilangan/number yang melebihi nilai rata-rata dari sebuah array, fungsi tersebut memiliki spesifikasi sebagai berikut:
// memiliki 1 parameter:
// arr [Array of Number] => array 1 dimensi dengan nilai Number
// return value [Number] total angka yang melebihi nilai rata-rata

const arr1 = [1, 3, 4, 1, 2, 8];
const arr2 = [5, 6, 7, 8, 1, 3];

function getAverage(array)
{
     
    //average
    let avg = 0;
    let count = 0;
    for(let i = 0; i < array.length; i++)
        avg += array[i];   
         
    avg = avg / array.length;
 
    //elemen yg lebih besar dari average
    for(let i = 0; i < array.length; i++)
        if (array[i] > avg){
            count++
        } return count

}

console.log(getAverage(arr1))
console.log(getAverage(arr2))

// soal no 3
// Kamu diminta untuk membuat sebuah fungsi yang mana akan mencari sebuah elemen didalam array multi dimensi, fungsi tersebut memiliki spesifikasi sebagai berikut:
// memiliki 2 parameter:
// arr [Array] => array multi dimensi yang akan kita proses
// num [Number] => angka yang ingin kita cari
// return value [Number]
// fungsi akan mengembalikan null apabila angka yang dicari tidak ditemukan
// fungsi akan mengembalikan index dari angka yang dicari
// Langkah-langkah pengerjaan:

// karna fungsi tersebut menerima sebuah array multi dimensi maka kita perlu merubahnya kedalam 1 dimensi terlebih dahulu
// setelah array 1 dimensi terbentuk, maka kita bisa mencari nilai yang ingin dicari oleh user
// apabila kita tidak menemukan nilai tersebut maka kembalikan null
// dan apabila kita menemukan nilai tersebut, maka kita akan mengembalikan index dari nilai tersebut (index dalam bentuk 1 dimensi bukan multi dimensi)


const arr = [
    [10],
    [9, 7, 1],
    [2, 8],
  ];
  

  function searchInArray(arr,number) {

    let newArr = []
    let result = null;

    arr.forEach(function(value) {
        value.forEach(function(val) {
            newArr.push(val);   
        })
    })

    newArr.forEach(function (value,index) {
         if(value === number){
             result = index;
         }   
    });
    return result;
 
    }


  console.log(searchInArray(arr, 3));
  console.log(searchInArray(arr, 2));
  console.log(searchInArray(arr, 4));
  console.log(searchInArray(arr, 8));
  
    
