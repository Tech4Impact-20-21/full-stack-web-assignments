/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 
let i = 0;
let array = [];
let primeCounter = 0;
while (true) {
    let a = 0;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            a = 1;
            break;
        }
    }

    if (i > 1 && a == 0) {
        array[primeCounter+=1] = i;
    }
    else if (array.length === 100){
        break;
    }
    i++;
}

let fiftiethPrime = array[50];
console.log(fiftiethPrime);