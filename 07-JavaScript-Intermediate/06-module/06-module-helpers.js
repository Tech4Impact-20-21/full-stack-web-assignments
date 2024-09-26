// Soal - 01
// Kamu diminta untuk memperbaiki baris kode dibawah agar ia dapat menggunakan fungsi yang berada pada file 06-module-helpers.js, ada beberapa hal yang perlu kalian perbaiki diantaranya adalah:

//     1. menambahkan attribute yang diperlukan untuk memanggil sebuah module JavaScript di dalam 06-module.html
//     2. perbaiki proses import fungsi sayHello yang berada di dalam file 06-module.html
//     3. export fungsi sayHello secara "default" agar ia bisa kita panggil secara langsung
//     4. perbaiki proses eksekusi dari fungsi sayHello

export function sayHello() {
    console.log("Hello");
}

export function greeting(name) {
    const pesan = `Hello, ${name}`;
    alert(pesan);
}

