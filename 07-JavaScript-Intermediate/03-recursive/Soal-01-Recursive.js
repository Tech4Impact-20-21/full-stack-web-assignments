// Soal - 01
// Kalian diminta untuk membuat sebuah fungsi sumOfArray dimana ia akan menghitung total dari sebuah array of number, fungsi tersebut memiliki spesifikasi sebagai berikut:

// 1. fungsi harus ditulis menggunakan recursive
// 2. memiliki 1 parameter:
//      arr [Array] => array of number yang nanti kita akan cari jumlahnya
// 3. return value [Number] => nilai kembalian berupa sebuah Number

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];
function sumOfArray(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return arr[0] + sumOfArray(arr.slice(1));
}

console.log(sumOfArray(arr1));
console.log(sumOfArray(arr2));