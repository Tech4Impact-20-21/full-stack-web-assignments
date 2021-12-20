## Jawaban

Jawablah pertanyaan di bawah ini:
1. Jelaskan apa yang dimaksud dengan **container** pada docker !
<br> **Jawab** : Container pada docker adalah sebuah wadah untuk mengemas dan menjalankan aplikasi yang isinya mencakup kode, runtime, system tools, dan pengaturan. Container hanya bisa mengakses resource yang telah ditentukan dalam Docker image. Container ini bertindak seperti mesin virtual, yang seperti simulasi komputer yang berjalan di dalam komputer asli pengembang. Pada mesin virtual ini nantinya semua kode sistem tersimpan untuk menjalankan simulasi seolah-olah adalah operasi sistem utama. Docker bertindak melakukan virtualisasi sistem operasi di dalam sistem operasi host. Docker membangun container berdasarkan gambar yang berisi kode program. Gambar atau images ini ditumpuk satu sama lain untuk lantas membangun pengaturan yang lengkap. Gambar bertumpuk dapat berbagi gambar inti yang sama, seperti cabang-cabang dari batang pohon yang sama.
2. Jelaskan apa perbedaan antara konsep **container** dengan **virtual machine** !
<br> **Jawab** : Terletaknya terdapat pada resource yang dipakai. Vm banyak menggunakan resource untuk virtualisasi OS yang secara langsung menargetkan hardwarenya dan menyebabkan booting yang lama, sedangkan Container hanya memakan sedikit resource virtualisasi karena berjalan pada host-os. VM hanya dapat berjalan pada hypervisor. Sedangkan Container tidak. Hal inilah yang menjadi perbedaan dasar dari arsitektur VM dan Container. Container dapat berjalan langsung diatas Sistem Operasi. Sedangkan VM tidak.Pada dasarnya VM menggunakan kernel tersendiri untuk menjalankan aplikasi didalamnya. Sedangkan container tidak diizinkan untuk mengakses kernel.

3. Apa yang dimaksud dengan **docker file** ?
<br> **Jawab** : Docker file adalah merupakan script yang berisi atau terdiri dari serangkaian perintah, argumen yang akan dieksekusi secara otomatisasi dan berurutan untuk membangun sebuah image.
4. Apa yang dimaksud dengan **docker registery** ?
**Jawab** : Sebuah Docker registery adalah penyimpanan dan distribusi sistem bernama Docker gambar. Gambar yang sama mungkin memiliki beberapa versi berbeda, yang diidentifikasi oleh tagnya.
Docker registery diatur ke dalam repositori Docker , di mana repositori menyimpan semua versi gambar tertentu. Registery memungkinkan pengguna Docker untuk menarik gambar secara lokal, serta mendorong gambar baru ke registri (diberikan izin akses yang memadai bila berlaku).
5. Jelaskan bagaimana cara untuk menjalankan lebih dari 1 container secara bersamaan dan saling terhubung !
    <br>**Jawab** : Docker-Compose adalah alat untuk mendefinisikan dan menjalankan satu atau beberapa container yang saling terkait dengan sebuah command.
    Caranya:

    Buat file Nama_filemu.yaml di dalam project yang kamu buat Tulis beberapa perintah ke dalam sana Jalankan menggunakan perintah docker-compose Nama_filemu.yaml up
