// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE
/*
1. Local scope adalah kode yang berada di dalam kurung kurawal.
Variabel yang dideklarasikan di dalam kurung kurawal, hanya bisa diakses
di dalam kurung kurawal tersebut.

if(a) {
  let b = a*2;
  console.log(b);
}

Variabel b hanya bisa diakses di kondisi if saja.

2. Global scope adalah variabel yang dapat diakses di mana saja di dalam suatu file.
Untuk menjadi global scope, variabel harus dideklarasikan di luar scope.

let myHeight = 159;

function Height(){
  return myHeight;
}

3. Function scope adalah variabel yang dideklarasikan di dalam fungsi
dan hanya dapat diakses di dalam fungsi tersebut.Function

function greeting(){
  let name = 'Rosa';
  return "Halo" + name;
}
*/

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam console.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
/*
- Mariah
- Karena yang dioper ke dalam fungsi adalah string 'Mariah Carey', bukan variabel name.
Nama parameter yang sama dengan nama variabel bukan berarti dapat diakses oleh fungsi.
*/
const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));