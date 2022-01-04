## 1.Create a folder called git-basic
  mkdir git-basic
## 2. cd into the git-basic folder
  cd git-basic
## 3.Create a file called first.txt
  touch first.txt
## 4.Initialize an empty git repository
  git init
## 5.Add first.txt to the staging area
  git add first.txt
## 6.Commit with the message "adding first.txt"
  git commit -m "adding first.txt"
## 7.Check out your commit with git log
  git log
## 8.Create another file called second.txt
  touch second.txt
## 9.Add second.txt to the staging area
  git add second.txt
## 10.Commit with the message "adding second.txt"
   git commit -m "adding second.txt"
## 11.Remove the first.txt file
   rm first.txt
## 12.Add this change to the staging area
   git add .
## 13.Commit with the message "removing first.txt"
   git commit -m "removing first.txt"
## 14.Check out your commits using git log
   git log
 
 ## Result
![Screenshot (1143)](https://user-images.githubusercontent.com/76485051/134108347-610d65f2-3f8a-4955-b5d6-30c297837779.png)
![Screenshot (1144)](https://user-images.githubusercontent.com/76485051/134108362-b9cd1f76-8817-4a9e-858c-2bc65ce0d725.png)
![Screenshot (1145)](https://user-images.githubusercontent.com/76485051/134108378-2c2bca1a-e2d8-43c2-9e9f-23366a09b5bd.png)


