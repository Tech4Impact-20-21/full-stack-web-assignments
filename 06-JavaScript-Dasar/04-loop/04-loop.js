/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE
for (let i=1 ; i<=100 ; i++) {
    let prima=0;
    for (let j = 1; j <= i; j++) {
        if (i%j==0){
            prima++;
        }     
    }
    if (prima==2){
        console.log(i);
    }
 }


/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 
let primeCounter = 0;
let fiftiethPrime;

/// EDIT HERE
let i=2;
while (primeCounter < 50) {
    let prime = true;
    for (let j=2; j<i; j++){
    if (i%j==0){
        prime = false;
    }
}
    if (prime){
        fiftiethPrime=i;
        primeCounter++;
    }
    i++
}
console.log("FiftiethPrime should be "+ fiftiethPrime);


/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
let oddCounter = 0;
let fiftiethOdd;

/// EDIT HERE
a = 0;
do {
    if (a%2!=0){
        fiftiethOdd = a;
        oddCounter++;
    }
    a++;
 } while (oddCounter<50);
 console.log("FiftiethOdd should be "+fiftiethOdd);
