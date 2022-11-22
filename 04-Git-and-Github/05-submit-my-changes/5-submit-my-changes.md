# Git & Github Fifth Assignment

Using CLI command:

1. Fork [this](https://github.com/impactbyte/tech4impact-students-bio.git) repository using your Github account

- [Here](https://drive.google.com/file/d/1SURUDrUIFiRM2xW0JtslzpjGvm5HG_t4/view?usp=sharing) is the link for the fork result.

2. Clone remote repository from the fork result.
```
git clone https://github.com/AurelliaChristie/tech4impact-students-bio.git
```

3. Create new branch with your name as the branch name.
```
cd tech4impact-students-bio
git branch aurellia-christie
```

4. Switch to the new branch.
```
git checkout aurellia-christie
```

5. Create new `.md` file with your name as the file name.
```
git touch aurelliachristie.md
```

6. Create the file content.

- [Here](https://drive.google.com/file/d/1LRGocWAkwwYwieCjySOlmeEVIVXn_EyG/view?usp=sharing) is the link for the screenshoot of the content.


7. Add the `.md` file to the staging area.
```
git add aurelliachristie.md
```

8. Commit the change.
```
git commit -m "aureliachristie.md"
```

9. Merge your branch to the `master` branch.
```
git checkout master
git merge aurellia-christie
```

10. Push to `master` branch.
```
git push -u origin master
```

11. Do a pull request from your forked Github Repository to be merged into the `master` branch of the original repository.

- [Here](https://drive.google.com/file/d/1eXMUcuxFPHRx64v5VHvGXi4ND_FbVX2f/view?usp=sharing) is the link for the pull request result.
