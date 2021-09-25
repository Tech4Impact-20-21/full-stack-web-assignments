# 01-the-basics
1. Create a folder called `git-basic`
    ```
    mkdir git-basic
    ```
2. cd into the `git-basic` folder
    ```
    cd git-basic
    ```
3. Create a file called `first.txt`
    ```
    touch first.txt
    ```
4. Initialize an empty git repository
    ```
    git init .
    ```
5. Add `first.txt` to the staging area
    ```
    git add first.txt
    ```
6. Commit with the message "adding first.txt"
    ```
    git commit -m "adding first.txt"
    ```
7. Check out your commit with `git log`
    ```
    git log
    ```
8. Create another file called `second.txt`
    ```
    touch second.txt
    ```
9. Add `second.txt` to the staging area
    ```
    git add second.txt
    ```
10. Commit with the message "adding second.txt"
    ```
    git commit -m "adding second.txt"
    ```
11. Remove the `first.txt` file
    ```
    git rm first.txt
    rm 'first/txt'
    ```
12. Add this change to the staging area
13. Commit with the message "removing first.txt"
    ```
    git commit -m "removing first.txt"
    ```
14. Check out your commits using `git log`
    ```
    git log
    ```
    
### Dokumentasi
![image](https://user-images.githubusercontent.com/68428942/134098555-3d39194a-ba85-44f5-a243-5cac0c5e3c0b.png)
![image](https://user-images.githubusercontent.com/68428942/134098573-508d0b82-e6f4-4e71-9924-fbe4075897ee.png)
![image](https://user-images.githubusercontent.com/68428942/134098591-93aea496-b853-4363-8fe9-f3f9c5262720.png)
