// 1. Apa itu synchronous?
// 2. Apa itu asynchronous?
// 3. Dapatkah kita menerapkan konsep asynchronous pada browser?
// 4. Apa hasil yang akan tercetak pada baris kode dibawah?
// 5. Apabila terdapat ketidak samaan antara console.log pertama dan kedua, bisakah kalian memberikan penjelasan mengapa hal tersebut bisa terjadi
// 6. Perbaiki baris kode dibawah sehingga ia akan menampilkan angka yang sama
for (var i = 1; i<=5; i++) {
    console.log("first log: ", i); // 01 - Pertama
    setTimeout(() => console.log("second log: ", i), 100); // 02 - Kedua
  }
  
// Jawab
// 1. Synchronous adalah proses jalannya program secara sequential , disini yang dimaksud sequential ada berdasarkan antrian ekseskusi program.
// 2. Asynchronous adalah proses jalannya program bisa dilakukan secara bersamaan tanpa harus menunggu proses antrian. Synchronous merupakan bagian dari Asynchronous (1 antrian) dimana proses akan dieksekusi secara bersamaan dan untuk hasil tergantung lama proses suatu fungsi synchronous.
// 3. Ya, kita dapat menerapkannya pada browser. salah satunya dengan menggunakan bahasa pemograman javascript
// 4. outputnya :
    // first log:  1
    // first log:  2
    // first log:  3
    // first log:  4
    // first log:  5
    // second log:  6
    // second log:  6
    // second log:  6
    // second log:  6
    // second log:  6
// 5. first log menampilkan hasil dari loop i yang akan berhenti eksekusi sesuai dengan batasnya, sehingga hasil i selalu bertambah 1 secara berurutan(1-5)
//    sedangkan yang second log, terdapat set timeout sehingga loop dieksekusi pada nilai ke 5 dan bertambah 1 sampai dengan seterusnya(nilai tetap) sebanyak 5x
// 6. code perbaikan :
for (var i = 1; i <= 5; i++) {
    console.log("first log: ", i); // 01 - Pertama
    asc(i)
}

function asc(i) {
        setTimeout(() => console.log("second log: ", i++), 100); // 02 - Kedua }
    }

