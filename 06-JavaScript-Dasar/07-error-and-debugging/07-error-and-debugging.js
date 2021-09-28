/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
/*  -Type Error : error  ketika operasi tidak dapat dijalankan karena value tidak sesuai dengan ketentuan dari type.
    - Reference Error  : error ketika tidak ada variabel yang tersedia saat program dijalankan.
    - Range Error : error ketika value tidak diatur, range value tidak ada.
    - Syntax Error : error ketika memanggil function karena ada salah dalam penulisan.
*/

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
/*  - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
    : Terjadi error.
    - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
    : Type Error
    - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi
    : Tidak bisa akses karena variabel dideklarasikan diakhir
*/
console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;
