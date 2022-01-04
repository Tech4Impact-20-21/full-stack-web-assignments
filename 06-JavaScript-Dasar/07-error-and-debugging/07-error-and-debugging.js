/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE (ANSWER NO 1)
/// -Type Error adalah error yang terjadi jika variable atau nilai yang digunakan berada diluar dari kisaran tipe yang diharapkan,
/// misalnya : contohnya jika menggunakan .toUpperCase() ke variabel numerik.
/// -Reference Error adalah error yang terjadi jika kita menggunakan (referensi) variabel yang belum dideklarasikan,
/// misalnya : memanggil variabel yang belum terdefinisi.
///-Range Error : error yang terjadi ketika variabel numerik atau parameter berada di luar rentang yang valid,
/// misalnya : mengatur jumlah digit signifikan sebuah angka menjadi 500.
///-Syntax Error: kesalahan yang terjadi ketika ada kesalahan sintaks,
/// misalnya : ("alert('Hello)"); // kurang kutip,kesalahan penulisan dll.



/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
/// jika baris kode dibawah dijalankan, output keduanya error.
/// console.log(salaryWithVar) memunculkan output undefined,
/// sedangkan console.log(salaryWithConst) memunculkan output ReferenceError: Cannot access 'salaryWithConst' before initialization
/// termasuk kedalam kategori reference error
/// alasannya : ini termasuk pada implementasi hoisting, Hoisting adalah mekanisme JavaScript di mana variabel dan deklarasi fungsi dipindahkan ke atas cakupannya sebelum eksekusi kode.
/// karena itu, sebelum code dieksekusi atau dijalankan, lebih baik variablenya di deklarasikan terlebih dahulu.
/// untuk kasus yang pertama dengan output undefined, karena menggunakan variabel sebelum mendeklarasikannya. Namun, kita harus berhati-hati karena variabel hoisted diinisialisasi dengan nilai undefined.
/// untuk kasus yang kedua referrence error karena variable salaryWithVar belum diinisialisasi sehingga tidak bisa diakses.

console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;