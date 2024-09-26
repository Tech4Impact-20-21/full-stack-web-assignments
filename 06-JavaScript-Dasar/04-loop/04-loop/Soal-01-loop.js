/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
for (let i = 0; i <= 100; i++) {
    let a = 0;

    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            a = 1;
            break;
        }
    }

    if (i > 1 && a == 0) {
        console.log(i);
    }
}