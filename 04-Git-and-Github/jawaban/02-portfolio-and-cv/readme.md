# 02-portfolio-and-cv

1. Membuat sebuah folder kosong dengan namamu sendiri
```
mkdir rosa
```
2. Membuat sebuah file dengan nama `README.md`, isi file tersebut dengan kalimat
```
"Halo perkenalkan aku halaman utama"
```
```
touch README.md
echo -e "Halo perkenalkan aku halaman utama\n\n" >> README.md
```
3. Insialisasi folder tersebut dengan Git, kemudian dokumentasikan menggunakan commit dengan pesan
```
"Inisialisasi Git Repository"
```
```
git init .
git add .
git commit -m "inisialisasi git repository"
```
4. Buat branch baru dengan nama cv, hal ini berguna agar histori kita tidak tercampur
```
git branch cv
```
5. Pindah branch kedalam cv, kemudian buat file dengan nama cv.txt dan isi file tersebut dengan kalimat:
```
"Ini adalah file CV"
```
```
git checkout cv
touch cv.txt
echo "Ini adalah file CV >> cv.txt
```
6. Kemudian dokumentasikan menggunakan commit dengan pesan
```
"Inisialisasi CV"
```
```
git add .
git commit -m "inisialisasi cv"
```
7. Tambahkan 3 perusahaan yang akan kamu lamar, dan setiap menuliskan 1 nama perusahaan kamu harus melakukan dokumentasi menggunakan commit
```
echo "Perusahaan 1" >> cv.txt
git add .
git commit -m "tambah perusahaan 1"

echo "Perusahaan 2" >> cv.txt
git add .
git commit -m "tambah perusahaan 2"

echo "Perusahaan 2" >> cv.txt
git add .
git commit -m "tambah perusahaan 2"
```
8. Kembali ke branch master
```
git checkout master
```

9. Ubah file `README.md` menjadi
```
Halo perkenalkan aku halaman utama

Ini adalah update pertama pada branch master
```
```
echo "Ini adalah update pertama pada branch master" >> README.md
```
10. Jangan lupa untuk mendokumentasikannya menggunakan commit dengan pesan
```
"update master pertama"
```
```
git add .
git commit -m "update master pertama"
```
11. Gabungkan branch cv kedalam branch master menggunakan perintah `git merge`
```
git merge cv
```
12. Unggah Git Repository tersebut kedalam GitHub
```
git remote add origin https://github.com/rosaamalia/05-Git-and-Github.git
git push origin master
```

# Dokumentasi
![image](https://user-images.githubusercontent.com/68428942/134190295-b0620e5e-a8c4-4e3a-b9d3-a7cc3fee58b1.png)
![image](https://user-images.githubusercontent.com/68428942/134190411-0b983abb-1386-48a3-bb54-9ebfe6e6c41e.png)
![image](https://user-images.githubusercontent.com/68428942/134190461-745b3caf-620c-46cd-ad91-e22d9face735.png)
![image](https://user-images.githubusercontent.com/68428942/134190515-fcb0ca3b-824b-4b77-81d8-e4a402fb0b84.png)
![image](https://user-images.githubusercontent.com/68428942/134190581-4f4ec659-9770-4903-bb29-691007a57df8.png)
![image](https://user-images.githubusercontent.com/68428942/134190630-3fad744c-9482-4552-95ba-174a4b0d23a2.png)
![image](https://user-images.githubusercontent.com/68428942/134190753-25041243-6726-46b5-afd8-483d713eea5e.png)
![image](https://user-images.githubusercontent.com/68428942/134190906-73040d95-53fe-484f-9f4c-040dca9599f8.png)
