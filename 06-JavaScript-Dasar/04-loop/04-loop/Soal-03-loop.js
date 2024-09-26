/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
let oddCounter = 0;
let fiftiethOdd;
let arrOdd = [];
let counter = 0;
do { 
    if (oddCounter % 2 == 1){
        arrOdd[counter+=1] = oddCounter;
    }
    else if (oddCounter === 100){
        break;
    }
    oddCounter++;
} while (true)

fiftiethOdd = arrOdd[50];
console.log(fiftiethOdd);