# Jawaban Intro and Essential Nodejs
## Tugas 1
1. Mohon jelaskan apa itu Node.js? Apa perbedannya dengan JavaScript?
   
   Node.js merupakan runtime JavaScript yang berjalan pada V8 engine dan dapat mengeksekusi sintaks JavaScript diluar web browser. Node.js memungkinkan developer untuk menggunakan JavaScript untuk menulis command line tool dan scripting pada sisi server.

   Node.js merupakan tool yang digunakan untuk menjalankan JavaScript diluar web browser, sedangkan JavaScript merupakan bahasa pemrograman.

2. Mohon jelaskan arsitektur dari Node.js?
   - Single Thread
  
        Pengeksekusian program yang hanya memiliki satu tumpukan panggilan.

   - Event Loop

        Event loop yang memeriksa secara terus menerus apakah antrian kosong di call stack. Jika iya, antrian baru akan bertambah dari event queue sampai semua perintah selesai dieksekusi.

   - Server Side Scripting

        Node.js dapat menjadikan JavaScript sebagai bahasa pemrograman yang berjalan di sisi server mengunakan terminal command line dengan menggunakan perintah "node".

3. Ape perbedaan antara Built-in Module, External Module, dan Custom Module pada Node.js?
   
    - Built-in Module
  
        Modul yang merupakan bagian dari Node.js yang berasal dari instalasi Node.js. Modul ini dapat dimuat ke dalam program dengan menggunakan fungsi **require**.

    - External Module

        Modul yang tersedia secara online yang dapat digunakan menggunakan Node Package Manager (NPM). Modul ini dapat diinstal ke dalam folder project atau secara global.

    - Custom Module

        Modul yang dibuat secara lokal di dalam aplikasi Node.js.Modul ini menggunakan fungsi **export** agar dapat diakses oleh file lain menggunakan fungsi **require**.

4. Sebutkan salah satu contoh dari Built-in Module, External Module, dan Custom Module pada Node.js?

    - Built-in Module

        Beberapa built-in module Node.js di antaranya http, assert, fs, path, process, os, querystring, dan url.

    - External Module

        Beberapa external module yang dapat diinstal melalui NPM adalah mongoose, express, angular dan react.
        
        ```
        npm install express
        npm install mongoose
        npm install -g @angular/cli
        ```

    - Custome Module

        Membuat modul untuk menambahkan dua angka.

        **File: tambah.js**
        ```Javascript
        exports.tambah = function(x, y)
        {
            return x + y;
        }
        ```

        **File: index.js**
        ```Javascript
        let kalkulator = require('./tambah);

        let x=50, y=50;

        console.log(`Penjumlahan ${x} dengan ${y} adalah ` + kalkulator.tambah(x, y));
        ```

        Menjalankannya dengan command `node index.js`.

## Tugas 2
Membuat sebuah web server menggunakan Node.js dengan memanfaatkan module `http` yang berjalan di port `8000`.

Respon yang akan dikembalikan adalah berupa content `HTML` pada HTTP Header.

File web server:
- [File web server](./index.js)

Dokumentasi hasil: