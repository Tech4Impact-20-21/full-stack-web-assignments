/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
/*
- TypeError : jenis error ketika suatu operasi tidak bisa dijalankan,
biasanya karena nilai yang ingin dioperasikan tidak seusatu dengan tipe data di dalam operasi.
TypeError muncul karena:
1. operan atau argumen yang dioper ke fungsi tidak sesuai dengan tipe data fungsi
2. ketika ingin mengubah nilai yang tidak bisa diubah
3. ketika ingin mengakses nilai dengan cara yang salah

- ReferenceError : jenis error ketika ingin mengakses variabel yang belum dideklarasikan.

- RangeError : jenis error ketika nilai yang digunakan tidak sesuai dengan range nilai yang sudah diatur.

- SyntaxError : jenis error ketika kode yang digunakan tidak sesuai dengan aturan sintaks JavaScript.
*/

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
/*
Terjadi error ReferenceError. Karena console.log mengakses variabel yang belum dideklarasikan di bawahnya.
Sementara urutan eksekusi kode dari atas kemudian ke bawah, sehingga variabel yang dideklarasikan di bawah
tidak bisa diakses di atasnya.
*/
console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;