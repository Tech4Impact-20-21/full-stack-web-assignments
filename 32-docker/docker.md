1. Jelaskan apa yang dimaksud dengan container pada docker!  
   : container pada docker merupakan sebuah pembungkus images/aplikasi secara terisolasi untuk mempermudah proses develop di OS.

2. Jelaskan apa perbedaan antara konsep container dengan virtual machine!  
   : virtual machine menggunakan banyak resource dan waktu untuk booting karena virtualisasinya dilakukan pada host hardware sedangkan container pada docjer hanya melakukan virtualisasinya pada host OS-nya.

3. Apa yang dimaksud dengan docker file?  
   : docker file merupakan blueprint untuk membuat image.

4. Apa yang dimaksud dengan docker registery?  
   : docker registry merupakan tempat untuk menyimpan images. Di docker registry juga dapat mendownload(pull) images orang lain atau mengupload(push) images saya sendiri.

5. Jelaskan bagaimana cara untuk menjalankan lebih dari 1 container secara bersamaan dan saling terhubung!  
   : dibutuhkan docker compose dengan nama filenya docker-compose.yml untuk menjalankan lebih dari satu container secara bersamaaan dan saling terhubung.
