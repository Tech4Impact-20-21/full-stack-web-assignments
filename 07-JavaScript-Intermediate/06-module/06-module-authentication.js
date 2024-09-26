// Soal - 03
// Soal ini berhubungan dengan soal Javascript Intermediate -> 04-regex-with-dom -> soal-04, kamu diminta untuk melakukan hal yang sama yaitu melakukan validasi terhadap inputan user yang berupa email dan password. Pada kesempatan kali ini kita akan melakukan implementasi tersebut menggunakan module, berikut adalah lanngkah-langkah pengerjaanya:

// 1. buat sebuah file dengan nama 06-modules-authentication.js
// 2. ambil fungsionalitas untuk melakukan pengecekan terhadap email dan password dan taruh didalam fungsi dengan spesifikasi berikut:
//  + nama => validateLoginData
//  + 2 parameter
//      - email [String]
//      - password [String]
//  + return value [String]
//      - mengembalikan "tolong masukan email yang valid" apabila email tidak valid
//      - mengembalikan "tolong masukan password sesuai ketentuan" apabila password tidak valid
//      - mengembalikan "Welcome to The Jungle" apabila email dan password valid
// 3. masukan fungsi validateLoginData kedalam file 06-module-authentication.js
// 4. export fungsi validateLoginData sebagai export default
// 5. panggil fungsi tersebut didalam file 06-module.html
// 6. ambil data "email" dan "password" pada saat user menekan tombol login
// (kamu dapat mengggunakan onclick atau onsubmit)
// 7. implementasikan fungsi validateLoginData serta berikan data "email" dan "password" sebagai parameter dan letakan hasilnya didalam sebuah variable bernama "message"
// 8. buat sebuah alert yang akan menampilkan isi dari variable "message"

export function validateLoginData(email,pass){
    const regexEmail = /^[A-Za-z.]+[\w\d]+@\w+\.\w+/;
    const regexPassword = /[A-Za-z\d-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]{8,}/;
    const regexCapital = /[A-Z]/
    const regexSmall = /[a-z]/
    const regexNumber = /[0-9]/
    const regexSymbol = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/
    let message;

    if(!email.match(regexEmail)){
        message = "tolong masukan email yang valid";
    }
    else if(pass.match(regexPassword) &&
            pass.match(regexCapital) &&
            pass.match(regexSmall) &&
            pass.match(regexNumber) &&
            pass.match(regexSymbol)){
        message = "Welcome to The Jungle";
    }
    else{
        message = "tolong masukan password sesuai ketentuan";
    }
    alert(message);
    return message;
}