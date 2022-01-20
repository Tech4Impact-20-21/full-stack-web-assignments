# Module 1 - Unix Command Line

1. membuat sebuah folder kosong dengan nama-mu sendiri
   ```
   mkdir rosa
   ```
    ![image](https://user-images.githubusercontent.com/68428942/133180066-4f78659d-4afc-4682-9745-e36b560a402d.png)
    
3. didalam folder tersebut buatlah
   - folder `sekolah`
   - folder `kerja`
    ```
    mkdir rosa/sekolah
    mkdir rosa/kerja
    cd rosa
    ```
    ![image](https://user-images.githubusercontent.com/68428942/133180317-e9c39f4a-f173-4418-896f-7b23a7dec7fe.png)

4. masuk kedalam folder `sekolah`
   ```
   cd sekolah
   ```
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
      ![image](https://user-images.githubusercontent.com/68428942/133184492-5645832e-28a4-44ab-965f-b14518061e27.png)

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
     ![image](https://user-images.githubusercontent.com/68428942/133184643-72693fd6-be2c-48f4-bc3d-cf6880887621.png)

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
     ![image](https://user-images.githubusercontent.com/68428942/133184781-7f8df607-fd8e-456b-8f22-688e855bfa1d.png)
 
8. Pada tahap ini kamu lupa jika sebenarnya file `portfolio.txt` serahusnya tidak berada pada folder `sekolah`, jadi kamu harus memindahkannya kedalam folder `kerja`
   ```
   cd ../sekolah
   mv portfolio.txt ../kerja
   ```
   ![image](https://user-images.githubusercontent.com/68428942/133182476-4df6d4d8-1b03-4fb7-836e-c4514e458718.png)
