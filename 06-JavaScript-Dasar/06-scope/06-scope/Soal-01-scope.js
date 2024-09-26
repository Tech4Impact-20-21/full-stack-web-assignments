/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE

// 1. JavaScript has 3 types of scope:
// - Block scope
// - Function scope
// - Global scope

// 2. Block scope
//     = Variables declared inside a { } block cannot be accessed from outside the block:
// Function scope
//     = Variables defined inside a function are not accessible (visible) from outside the function.
// Global scope
//     = A variable declared outside a function, becomes GLOBAL.

// 3. block scope
    // if(1){ 
    //     let carName = "Toyota";
    // }

// function scope
    // function myFunction() {
    //     let carName = "Toyota";
    // }

// global
    // let carName = "Toyota";