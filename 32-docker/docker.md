# 32-Docker

1. Jelaskan apa yang dimaksud dengan **container** pada docker !
   
   Docker container — Wadah untuk mengemas dan menjalankan aplikasi. Wadah ini mencakup kode, runtime, system tools, dan pengaturan. Container hanya bisa mengakses resource yang telah ditentukan dalam Docker image.

2. Jelaskan apa perbedaan antara konsep **container** dengan **virtual machine** !
   
   | Virtual Machine | Container |
   |----------------|------------|
   | Berat | Ringan |
   | Performa terbatas pada konfigurasi VM | Performa maksimum tergantung pada hardware fisik |
   | Virtualisasi pada level hardware | Virtualisasi pada level OS |
   | Waktu start up dalam hitungan menit | Waktu start up dalam hitungan detik |
   | Terisolasi penuh pada level hardware sehingga lebih aman | Terisolasi pada level proses |

3. Apa yang dimaksud dengan **docker file** ?
   
    Dockerfile adalah file teks yang berisi semua perintah yang bisa dijalankan user pada baris perintah untuk membuat image. Ini mencakup semua instruksi yang diperlukan oleh docker untuk membangun image.

4. Apa yang dimaksud dengan **docker registery** ?
   
   Docker registry adalah aplikasi yang mengelola dan menyimpan docker images. Hal ini berguna untuk memudahkan developer/sysadmin dalam proses deploy karena tidak perlu lagi melakukan build image setiap ingin melakukan deploy.

5. Jelaskan bagaimana cara untuk menjalankan lebih dari 1 container secara bersamaan dan saling terhubung !
   
   Dengan menggunakan docker compose. Docker composes memungkinkan kita untuk menjalankan lebih dari satu container yang saling terkait dengan sebuah command.

   Buat file `nama_file.yaml`. Pada file itu, tulis perintah dan service untuk membuat aplikasi kamu, agar dapat berjalan secara bersamaan di dalam environtment yang terisolasi. Jalankan dengan perintah `docker-compose nama_file.yaml up`.
   
   