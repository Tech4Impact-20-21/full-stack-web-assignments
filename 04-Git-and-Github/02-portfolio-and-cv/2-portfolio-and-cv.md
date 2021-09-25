# Git & Github Second Assignment

Using CLI command:

- Create a folder of your name
```
mkdir aurel
```

- Create a `README.md` with the content `"Halo perkenalkan aku halaman utama"`
```
cd aurel
touch README.md
```

- Initialize an empty git repository and commit your change with the message "Inisialisasi Git Repository"
```
git init
git add .
git commit -m "Inisialisasi Git Repository"
```

- Create new branch called `cv`
```
git branch cv
```

- Move to `cv` branch and create new file `cv.txt` with the content "Ini adalah file CV"
```
git checkout cv
touch cv.txt
```

- Commit the change with the message "Inisialisasi CV"
```
git commit -m "Inisialisasi CV"
```

- Add 3 companies to `cv.txt` and document each of them using `commit`
```
git add .
git commit -m "Menambahkan perusahaan pertama"
git add .
git commit -m "Menambahkan perusahaan kedua"
git add .
git commit -m "Menambahkan perusahaan ketiga"
```

- Move back to `branch master`
```
git checkout master
```

- Change `README.md` to 
```
Halo perkenalkan aku halaman utama

Ini adalah update pertama pada branch master
```

and document it using `commit` with the message "Update master pertama"

```
git add .
git commit "Update master pertama"
```

- Merge `branch cv` to `branch master`
```
git merge cv
```

- Upload to Github
```
git remote add origin "https://github.com/AurelliaChristie/Skilvul-Git-Second-Assignment.git"
git push -u origin master
```

[Here](https://github.com/AurelliaChristie/Skilvul-Git-Second-Assignment) is the link to the repository.