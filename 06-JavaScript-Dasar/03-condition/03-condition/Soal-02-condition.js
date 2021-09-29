/// Soal - 02
/// Buatlah sebuah kondisi yang akan melakukan konversi suhu dari celcius ke variable yang dituju (kelvin, fahrenheit, dan celsius)
/// - kondisi dibuat menggunakan switch case
/// - konversi celcius menjadi kelvin apabila user memasukan unit berupa "K"
/// - konversi celcius menjadi fahrenheit apabila user memasukan unit berupa "F"
/// - konversi celcius menjadi celcius apabila user memasukan unit berupa "C"
/// - menampilkan pesan "Maaf anda salah input", apabila variable tidak memenuhi semua kondisi yang ada

const temperature = 100; /// suhu
const unit = "F"; /// inputan

switch (unit) {
    case "K":
        console.log(temperature + 273.15);
        break;
    case "F":
        console.log((temperature * (9/5))+32);
        break;
    case "C":
        console.log(temperature);
        break;
}