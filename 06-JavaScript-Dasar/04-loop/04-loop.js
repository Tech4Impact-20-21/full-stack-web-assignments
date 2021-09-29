/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
for (let i = 1; i <=100; i++) {
    let flag = 1;

    if(i == 1) {
        flag = 0;
    }

    for (let j = 2; j < i; j++) {
        if(i%j === 0) {
            flag = 0;
            break;
        }
    }

    if(flag == 1) {
        console.log(i);
    }
}


/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 
let primeCounter = 0;
let fiftiethPrime = 0;

while (primeCounter < 50) {
    fiftiethPrime++;
    let flag = 1;

    if(fiftiethPrime <= 1) {
        flag = 0;
    }

    for (let j = 2; j < fiftiethPrime; j++) {
        if(fiftiethPrime%j == 0) {
            flag = 0;
            break;
        }
    }

    if(flag == 1) {
        // console.log(fiftiethPrime);
        primeCounter++;
        // console.log(primeCounter);
    }
}

console.log("\n" + fiftiethPrime);


// /// Soal - 03
// /// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
let oddCounter = 0;
let fiftiethOdd = 0;

do { 
    fiftiethOdd++;

    if(fiftiethOdd % 2 == 1) {
        oddCounter++;
        // console.log(oddCounter);
    }
}
while(oddCounter<50)

console.log("\n" + fiftiethOdd);