# Unix Command Line Technical Assignment

Membuat sebuah folder kosong dengan nama-mu sendiri
```
mkdir aurel
```

Di dalam folder tersebut buatlah folder sekolah 
```
mkdir aurel/sekolah
```

Buatlah juga folder kerja 
``` 
mkdir aurel/kerja
```

Masuk kedalam folder sekolah
```
cd aurel/sekolah
```

Buat file dengan nama ijazah.txt
```
touch ijazah.txt
```

Tampilkan isi dari file tersebut menggunakan CLI command
```
cat ijazah.txt
```

Kemudian buat 1 file lagi dengan nama portfolio.txt
```
touch portfolio.txt
cat portfolio.txt
```

Keluar dari folder sekolah
```
cd ..
```

Masuk kedalam folder kerja
```
cd kerja
```

Buat file dengan nama cv.txt
```
touch cv.txt
```

Tampilkan isi dari file tersebut menggunakan CLI command
```
cat cv.txt
```

Pada tahap ini kamu lupa jika sebenarnya file portfolio.txt seharusnya tidak berada pada folder sekolah, jadi kamu harus memindahkannya kedalam folder kerja
```
mv ../sekolah/portfolio.txt .
```

