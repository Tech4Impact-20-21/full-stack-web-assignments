# 03-branch-and-merge

##### 1. What does `git clean` do?
`git clean` is a convenience method for deleting untracked files in a repo's working directory.
Untracked files are those that are in the repo's directory but have not yet been added to the repo's index with `git add`. 

##### 2. What do the `-d` and `-f` flags for `git clean` do?
```
-d
```
The `-d` option tells `git clean` that you also want to remove any untracked directories, by default it will ignore directories.
```
-f or --force
```
The force option initiates the actual deletion of untracked files from the current directory. By default `git clean -f` will operate on all the current directory untracked files.

##### 3. What git command creates a branch?
```
git branch [branch-name]
```

##### 4. What is the difference between a fast-forward and recursive merge?
###### fast-forward
In this most commonly used merge strategy, history is just one straight line.
When you create a branch, make some commits in that branch, the time you’re ready to merge, there is no new merge on the master.
That way master’s pointer is just moved straight forward and history is one straight line.
##### recursive
In Recursive merge, after you branch and make some commits, there are some new original commits on the ‘master‘.
So, when it’s time to merge, git recurses over the branch and creates a new merge commit. The merge commit continues to have two parents.

##### 5. What git command changes to another branch?
```
git checkout [branch-name]
```

##### 6. How do you remove modified or deleted files from the working directory?
```
git add -u
```

##### 7. What git command deletes a branch?
```
git branch -d [branch]
```
To delete branch locally
```
git push [remote] --delete [branch]
```

##### 8. What does the git diff command do?
By default, the git diff command displays any uncommitted changes to your repository.

We can see the removed lines from our original file as well as any lines added to or changed in our original file. Often, Git diff is used for comparing branches in a Git repository.

##### 9. How do you remove files from the staging area?
```
git rm [file-name]
```

##### 10. How do merge conflicts happen?
A merge conflict happens when two branches both modify the same region of a file and are subsequently merged. Git can't know which of the changes to keep, and thus needs human intervention to resolve the conflict.
