# Module 1 - Unix Command Line

1. membuat sebuah folder kosong dengan nama-mu sendiri
   ```
   mkdir ghinafairuz2
   ```
   ![image](https://user-images.githubusercontent.com/76485051/134814845-faa6aa32-9f33-4591-9333-11484c61eed0.png)
    
3. didalam folder tersebut buatlah
   - folder `sekolah`
   - folder `kerja`
    ```
    mkdir ghinafairuz2/kerja ghinafairuz2/sekolah
    cd ghinafairuz2
    ls
    ```
    ![image](https://user-images.githubusercontent.com/76485051/134814878-644177a7-b1a6-4f8c-bdf1-673f7cc19649.png)

4. masuk kedalam folder `sekolah`
   ```
   cd sekolah
   ```
   ![image](https://user-images.githubusercontent.com/76485051/134814925-5a405471-2d39-4347-9771-5e8a5b9eae4c.png)
   - buat file dengan nama `ijazah.txt`, yang mana file tersebut akan memiliki teks seperti:
      ```
      Perkenalkan namaku $NAMA
      
      Aku berasal dari $DAERAH
      
      Salam Kenal :D
      ```
      ```
      touch ijazah.txt
      ```
   - tampilkan isi dari file tersebut menggunakan `CLI command`
      ```
      cat ijazah.txt
      ```
      ![image](https://user-images.githubusercontent.com/76485051/134814952-1efd66ac-0838-44eb-afdd-e9b8948ca8b0.png)

   - kemudian buat 1 file lagi dengan nama `portfolio.txt`, yang mana file tersebut akan memiliki teks seperti:
     ```
     Saya pernah bekerja pada beberapa perusahaan salah satu 
     diantaranya ialah

     - $PERUSAHAAN
     - $PERUSAHAAN
     - $PERUSAHAAN
     ```
     ```
     touch portfolio.txt
     ```
     ![image](https://user-images.githubusercontent.com/76485051/134814956-a919f1fe-a284-4b1f-8df9-9d061f565193.png)

4. keluar dari folder sekolah
   ```
   cd ..
   ```
   
6. masuk ke dalam folder `kerja`
   ```
   cd kerja
   ```
   - buat file dengan nama `cv.txt`, yang mana hal tersebut akan memiliki teks seperti:
     ```
     Salam,

      Perkenalkan namaku $NAMA, saya memiliki kegemaran
      - $HOBBY
      - $HOBBY
      - $HOBBY
      ```
      ```
      touch cv.txt
      ```
   - tampilkan isi dari file tersebut menggunakan `CLI command`
     ```
     cat cv.txt
     ```
     ![image](https://user-images.githubusercontent.com/76485051/134814961-8aed6c4a-81ad-4835-bc29-b611e8782cf6.png)
 
8. Pada tahap ini kamu lupa jika sebenarnya file `portfolio.txt` serahusnya tidak berada pada folder `sekolah`, jadi kamu harus memindahkannya kedalam folder `kerja`
   ```
   cd ../sekolah
   mv portfolio.txt ../kerja
   ```
   ![image](https://user-images.githubusercontent.com/76485051/134814969-323a00ae-0e9a-431d-8d28-d08ab184fb94.png)