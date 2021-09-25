# Git & Github Fourth Assignment

1. What is the difference between `git reset` and `git revert`. When would you use one over the other?

- `git reset` removes all commits from the current branch while `git revert` undoes commits by creating a new commit. So there will be no deleted commits when using `git revert`.

- `git reset` will be used when discard commits in a private branch while `git revert` will prefer to be used when undo commits in a public branch.


2. What is the difference between `git merge` and `git rebase`. When would you use one over the other?

- `git merge` integrates changes from one branch into another by adding a new commit and preserving the history, while `git rebase` integrates them by moving the feature branch into the master.

- `git merge` will be used when working with a big team while `git rebase` will prefer to be used when working alone or on a small team.


3. What is the difference between `git stash pop` and `git stash apply`. When would you use one over the other?

- `git stash pop` allows user to reapply previous commits and deletes the stash from the stack after it is applied, while `git stash apply` leaves it within the stash list for possible later use.

- `git stash pop` will be used when restoring conflict-free files while `git stash apply` will prefer to be used to restore files that contain conflicts.

4. What kinds of things can you do in interactive mode when rebasing?

- In interactive rebase, user can play around with the commits, such as reorder commits, edit commit message, remove commit, etc.