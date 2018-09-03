Express Starter Project
============


This project is scaffolding for an Express+Typescript+Gulp project environment. It's organized to allow quick development.

Features:
* CORS control
* Routes organized by directory structure
* HTTPS support

# Using Express Starter Project

Duplicate the repository:
```
git clone --bare https://github.com/boboben1/Express-Typescript-StarterProject.git
cd Express-Typescript-StarterProject.git
git push --mirror ((YOUR GITHUB REPO))
cd ..
rm -rf Express-Typescript-StarterProject.git
git clone ((YOUR GITHUB REPO))
```

For more detailed directions: https://help.github.com/articles/duplicating-a-repository/

OR

Download and delete .git folder (to add a remote repository at a later date):
```
git clone https://github.com/boboben1/Express-Typescript-StarterProject.git
cd Express-Typescript-StarterProject
rm -rf .git
git init
git add .
git commit -m "Initial Commit"
```