/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE (ANSWER NO 1)
/// jumlah variable scope pada Javascript ada 3
/// -Global Scope : Variable yang dideklarasikan di bagian atas program atau di luar fungsi, variable global scope dapat diakses di mana saja diseluruh program. nilai variabel global dapat berubah di berbagai area dalam program.
/// -Local Scope/Function Scope : variabel yang dideklarasikan di dalam fungsi dan hanya bisa diakses dalam suatu fungsi itu sendiri(di luar fungsi tidak bisa mengakses)
/// -Blok Scope : variabel yang hanya bisa diakses di dalam bloknya. variabel yang dideklarasikan menggunakan `let` dan `const` dalam blok {} tidak dapat diakses dari luar blok (Variabel yang dideklarasikan menggunakan `var` tidak dapat memiliki cakupan blok karena dapat diakses di luar blok ).
///  Implementasi :
///  -Global Scope :
    let a = "hi ghina"; //variable a dideklarasikan di atas progam sehingga bisa diakses diseluruh program
    function sapa () {
         console.log(a);//mengakses variable global yaitu a
    }
    sapa(); // hi ghina
    console.log(a); // "hi ghina"
/// -Local Scope/Function Scope :
        let a = "hi ghina";

        function sapa() {
            let b = "apa kabar?"
            console.log(b);
        }

        sapa(); // apa kabar ?
        console.log(a) // hi ghina
        console.log(b); // error karena variable b termasuk local scope yang hanya bisa diakses di dalam function(greet())
///- Block Scope
        {
            let sapa = 'Hi Ghina!';
            var suasana = 'Happy';
            console.log(sapa); // Hi Ghina!
        }
        console.log(sapa);// Error:  variable sapa hanya bisa diakses di dalam bloknya(let sapa)
        console.log(suasana); // Happy, karena variable var suasana walaupun di dalam blok tetap bisa diakses di luar blok karena var termasuk global scope


/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE (ANSWE NO 2)
/// yang akan tampil di dalam console.log adalah "Mariah"
/// yang ditampilkan dalam console.log adalah "Mariah", karena fungsi dari printFirstName mempunyai parameter (name), 
/// yang value nya akan diisikan oleh value yang diinputkan di dalam console.log ketika fungsi itu dipanggil dan digunakan, sehingga
/// jika console.log(printFirstName("Mariah Carey")); maka akan mengembalikan nilai dari parameter name yang diisikan yaitu "Mariah Carey" dan  hanya menampilkan nama depannya yaitu "Mariah"
/// hasil dari console.log tidak akan menjadi "John" karena "name" dalam fungsi printFirstName adalah parameter, bukan variabel global "name" yang berisi "John Watson".

const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));