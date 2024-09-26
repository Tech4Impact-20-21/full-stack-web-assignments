// Soal - 03
// Kalian diminta untuk membuat fungsi yang mana akan mencari sebuah nilai didalam array of number, fungsi tersebut memiliki spesifikasi sebagai berikut:

// 1. fungsi harus ditulis menggunakan recursive
// 2. memiliki 2 parameter:
//      - arr [Array] => array of number yang nanti akan kita cari value-nya
//      - num [Number] => angka yang hendak kita cari
// 3. return value:
//      - apabila kita tidak menemukan angka tersebut maka kita akan mengembalikan "angka tidak ditemukan"
//      - apabila kita menemukan angka tersebut maka kita akan mengembalikan "angka ditemukan pada index: $INDEX"

const arr = [1, 2, 3, 4, 5];
function searchInArray(arr, val) {
    if (arr[arr.length - 1] === val) {
        return "angka ditemukan pada index: "+(arr.length - 1);
    }
    if (arr.length === 1) {
        return "angka tidak ditemukan";
    }
    return searchInArray(arr.slice(0, -1), val);
}

console.log(searchInArray(arr, 6));
console.log(searchInArray(arr, 1));
console.log(searchInArray(arr, 8));