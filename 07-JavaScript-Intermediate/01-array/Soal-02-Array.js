// Soal - 02
// Kamu diminta untuk membuat sebuah fungsi yang akan mengembalikan total berapa elemen bilangan/number yang melebihi nilai rata-rata dari sebuah array, fungsi tersebut memiliki spesifikasi sebagai berikut:

// memiliki 1 parameter:
// arr [Array of Number] => array 1 dimensi dengan nilai Number
// return value [Number] total angka yang melebihi nilai rata-rata
// Untuk mempermudah proses pengerjaan kamu dapat menggunakan code template dibawah ini

const arr1 = [1, 3, 4, 1, 2, 8];
const arr2 = [5, 6, 7, 8, 1, 3];

function getAverage(dataAverage) {
    let sumAverage = 0;
    let biggerThan = 0
    for (let j=0; j<=dataAverage.length-1; j++){
         sumAverage += dataAverage[j]; 
    }

    const totalAverage = sumAverage/dataAverage.length;

    for (let j=0; j<=dataAverage.length-1; j++){
        if (totalAverage < dataAverage[j]){
            biggerThan += 1;
        }
    }
    return biggerThan;
}

console.log(getAverage(arr1));
console.log(getAverage(arr2));