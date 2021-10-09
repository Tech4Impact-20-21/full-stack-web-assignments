// Soal - 04
// Kalian diminta untuk membuat fungsi yang mana nantinya akan mencetak sebuah piramida alfabet, fungsi tersebut memiliki spesifikasi sebagai berikut:

// 1. fungsi harus ditulis menggunakan recursive
// 2. memiliki 2 parameter yang identik dengan tipe data Number, hal ini kita butuhkan untuk membuat sebuah perulangan menggunakan recursive
// 3. bentuk segitiga dapat kalian cetak menggunakan console.log didalam fungsi trianglePattern
// 4. kalian hanya diperbolehkan untuk membuat "1 BUAH TRADITIONAL LOOP", hal ini untuk mempermudah kalian dalam proses penyelesaian tugas.

// akan tetapi kalian juga diperbolehkan untuk menyelesaikan soal ini tanpa menggunakan traditional loop

function trianglePattern(x, y) {
    if (x === 0) {
        return;
    }
    let space = "";
    for (let i = 0; i < y; i++) {
        if (i < x - 1) {
            space += " "
        } else {
            space += String.fromCharCode(64 + (y - x + (i - x) + 2));
        }
    }
    console.log(space);
    trianglePattern(x - 1, y);
}

trianglePattern(5, 5);