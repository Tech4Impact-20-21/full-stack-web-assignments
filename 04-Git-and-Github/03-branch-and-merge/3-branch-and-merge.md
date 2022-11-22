# Git & Github Third Assignment

1. What does `git clean` do?

- `git clean` is used to undo changes that is operated on untracked files.Untracked files are those files that have been created within the user's repo but not yet been added to the repo's tracking index using `git add`.


2. What do the `-d and -f` flags for git clean do?

- `-d` flag is used when the user wants to remove any untracked directories.

- `-f` flag is used when the user wants to remove all untracked files in current directory.

- `-d` flag is usually used following the `-f` flag since by default `git clean` will ignore directories which is a part of safety mechanism to prevent accidental permanent deletion.


3. What git command creates a branch?
```
git branch <name_of_the_branch>
```

4. What is the difference between a fast-forward and recursive merge?

- Using fast-forward merge, all the individual changes will be combined with the `master` changes. Later on when we check using `git log --graph` we can't identify which changes were created in `master` branch, and which changes where created in the otherbranches.

- On the other hand, using recursive merge, the individual changes will be inputed as a new commit that has those changes. So when we check using `git log --graph` we can identify which changes were created in `master` branch, and which were not.


5. What git command changes to another branch?
```
git checkout <name_of_the_branch>
```

6. How do you remove modified or deleted files from the working directory?

- Using `git rm`


7. What git command deletes a branch?
```
//To do it locally

git branch -d <name_of_the_branch>

//To do it remotely

git push <remote> :<name_of_the_branch>
```


8. What does the `git diff` command do?

- `git diff` tracks the difference between the changes made on a file.


9. How do you remove files from the staging area?

- Using `git reset`


10. How do merge conflicts happen?

- Merge conflicts happens when Git can't automatically resolve the differences in code between the two branches. Usually this happens when the changes made on the same lines. It can happens when we merge or rebase a branch or cherry picking a commit.
