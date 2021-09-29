/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE

// 1. ReferenceError: Cannot access 'salaryWithConst' before initialization

// 2. Reference Error

// 3.  console.log(salaryWithVar) will console undefined because it was declare after console.log(). At that time variable salaryWithVar is also not defined that is why the program console is undefined
//     console.log(salaryWithConst) will console Reference Error because cannot console const before declare / initialization first

console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;