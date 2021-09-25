/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE


function isPrima (number) {
    let result = true
   
     if(number <= 1){
       return false
     }
     
     for(let i= 2; i < number ; i++){
       if( number % i === 0){
         result = false
         break
       }
     }
    return result 
   }
   
   
   for(number=0; number<=100; number++){
   if(isPrima(number)===true){
       console.log(number)
     }
    }
   


/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 
let primeCounter = 0;
let fiftiethPrime;

/// EDIT HERE
while (....) {}


/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
let oddCounter = 0;
let fiftiethOdd;

/// EDIT HERE
do { .... } while (....)
