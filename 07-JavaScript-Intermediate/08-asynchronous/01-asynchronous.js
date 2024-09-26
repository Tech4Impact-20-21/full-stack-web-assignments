// 1. Apa itu synchronous?
// 2. Apa itu asynchronous?
// 3. Dapatkah kita menerapkan konsep asynchronous pada browser?
// 4. Apa hasil yang akan tercetak pada baris kode dibawah?
// 5. Apabila terdapat ketidak samaan antara console.log pertama dan kedua, bisakah kalian memberikan penjelasan mengapa hal tersebut bisa terjadi
// 6. Perbaiki baris kode dibawah sehingga ia akan menampilkan angka yang sama
// for (var i = 1; i<=5; i++) {
//     console.log("first log: ", i); // 01 - Pertama
//     setTimeout(() => console.log("second log: ", i), 100); // 02 - Kedua
//   }

//   Jawaban :

// 1. Synchronous JavaScript: As the name suggests synchronous means to be in a sequence, 
//      i.e. every statement of the code gets executed one by one. So, basically a statement 
//      has to wait for the earlier statement to get executed.

// 2. Asynchronous JavaScript: Asynchronous code allows the program to be executed immediately 
// where the synchronous code will block further execution of the remaining code until it finishes 
// the current one. This may not look like a big problem but when you see it in a bigger picture you 
// realize that it may lead to delaying the User Interface.

// 3. By using javascript

// 4. first log:  1
// first log:  2
// first log:  3
// first log:  4
// first log:  5
// second log:  6
// second log:  6
// second log:  6
// second log:  6
// second log:  6

// 5. karena variable i di deklarasi dengan var yang menjadikannya variabel global dan telah di ubah oleh proses first log karena i memiliki alamat yang sama

6. 
for (let i = 1; i <= 5; i++) {
    console.log("first log: ", i); // 01 - Pertama
    setTimeout(() => console.log("second log: ", i), 100); // 02 - Kedua
}