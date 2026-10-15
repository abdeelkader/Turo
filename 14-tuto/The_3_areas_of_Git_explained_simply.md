# Git — The Journey of a Modification

## Objective

Understand how a file travels through Git, from the moment it is modified to its final recording in the project history.

At the end of this tutorial, you will be able to identify the roles of the Working Directory, the Staging Area, and the Git Repository.

## Prerequisites

- Understand the difference between Git and GitHub.
- Know the concepts of files and projects.

*Note: This tutorial is purely theoretical and introduces the fundamentals of Git before practical exercises.*

## Part 1 — Theory

### 1.1. The Journey of a Modification

Unlike simply saving a file with `Ctrl + S`, recording a modification in Git involves three distinct areas.

1. **Working Directory:** Modify your files.
2. **Staging Area:** Select the changes you want to record.
3. **Git Repository:** Record the selected changes in the project history.

The process follows this sequence:

`Working Directory → Staging Area → Git Repository`

A change must be staged before it can be included in a new commit.

### 1.2. The Role of the Three Areas

#### 1. Working Directory

The Working Directory is the project folder on your computer. This is where you create, edit, and delete files.

Git detects changes in tracked files, but these modifications are not automatically recorded in the project history.

#### 2. Staging Area

The Staging Area is where you prepare changes for the next commit.

You can select specific files instead of including every modification in your project.

To stage a specific file, use:

```bash
git add script.js
```

To stage all changes in the current directory and its subdirectories, use:

```bash
git add .
```

#### 3. Git Repository

The Git Repository stores the project's commit history.

When you commit staged changes, Git records a snapshot of the selected project state.

To create a commit, use:

```bash
git commit -m "Describe your changes"
```

Each commit includes information such as the author, date, commit message, and a reference to the recorded project state.

### 1.3. Example: Recording a Modification

Suppose you modify a JavaScript file named `script.js`.

Before:

```javascript
let price = 100;
console.log(price);
```

After:

```javascript
let price = 200;
console.log(price);
```

To record this modification in Git, execute:

```bash
git add script.js
git commit -m "Update product price"
```

The modification is now recorded in the local Git history.

### 1.4. Git vs. GitHub

- **Git:** A version control system that tracks changes and maintains project history.
- **GitHub:** An online platform for hosting Git repositories and collaborating with others.

After committing your changes locally, you can upload your commits to a remote repository using:

```bash
git push
```

The complete workflow is:

`Working Directory → Staging Area → Local Repository → Remote Repository (GitHub)`

## Summary

In this tutorial, you learned:

- The difference between the Working Directory, Staging Area, and Git Repository.
- Why changes must be staged before being committed.
- How to use `git add` to prepare changes.
- How to use `git commit` to record changes in Git history.
- The difference between Git and GitHub.
- How `git push` uploads commits to a remote repository.

## Glossary

- **Working Directory:** The project files you work on locally.
- **Staging Area:** The area where you select changes for the next commit.
- **Git Repository:** The repository containing the project's commit history.
- **Commit:** A recorded snapshot of the project state.
- **GitHub:** An online platform for hosting Git repositories.
- **Git Push:** The operation that uploads local commits to a remote repository.
