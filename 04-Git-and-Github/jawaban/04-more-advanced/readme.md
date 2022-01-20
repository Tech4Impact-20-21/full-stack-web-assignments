# 04-more-advanced
#### 1. What is the difference between `git reset` and `git revert`. When would you use one over the other?
Reverting undoes a commit by creating a new commit. This is a safe way to undo changes, as it has no chance of re-writing the commit history.


Contrast this with git reset, which does alter the existing commit history. For this reason, `git revert` should be used to undo changes on a public branch, and `git reset` should be reserved for undoing changes on a private branch.

#### 2. What is the difference between `git merge` and `git rebase`. When would you use one over the other?
Git rebase and merge both integrate changes from one branch into another. Where they differ is how it's done. Git rebase moves a feature branch into a master. Git merge adds a new commit, preserving the history.

Git Rebase
- Streamlines a potentially complex history.
- Avoids merge commit “noise” in busy repos with busy branches.
- Cleans intermediate commits by making them a single commit, which can be helpful for DevOps teams.


Git Merge
- Simple and familiar.
- Preserves complete history and chronological order.
- Maintains the context of the branch.

#### 3. What is the difference between `git stash pop` and `git stash apply`. When would you use one over the other?
The key difference between `git stash pop` and `apply` involves the stash history.
When a developer uses the `git stash apply` command, the most recently saved stash overwrites files in the current working tree but leaves the stash history alone.
In contrast, the `pop` command restores files but then deletes the applied stash. If a developer ever feels the need to use that restored stash again, it will be saved in the local file system.

#### 4. What kinds of things can you do in interactive mode when rebasing?
Interactive rebasing can be used for changing commits in many ways such as editing, deleting, and squashing.
