/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE
/*  - ada berapa banyak jumlah variable scope pada Javascript? 
    : Terdapat 2 variabel scope yaitu Global dan local scope.

    - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
    : Global scope dideklarasikan pada awal function dan dapat digunakan dimanapun, berbeda dengan local yang hanya dapat digunakan didalam fungsi dimana dia dideklarasikan.

    - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript
*/
    let global = "Global scope"
    function scope() {
        let local = "Local scope"
        console.log(global+local);
    }
    
/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
/* - apa yang akan tampil didalam comsole.log ?
    : Mariah Carey

    - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?
    :Karena variabel name telah ditetapkan dengan nilai variabel lokal ketika funsinya dipanggil.
*/
const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));
