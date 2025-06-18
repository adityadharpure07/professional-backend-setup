# chai aur backend series
This is a video series on backend with javascript

nodemon  -> to start server when file is open . it is dev dependency

prettier -> is used to set the format for the default setting of the code


<!-- PS C:\Users\LOQ\Desktop\BackEnd\professionalBackendSetup> node -v
v22.14.0
PS C:\Users\LOQ\Desktop\BackEnd\professionalBackendSetup> npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (professionalbackendsetup)
version: (1.0.0)                                                                                                                                                                  
description: a backend at chai aur code channel - youtube
entry point: (index.js)                                                                                                                                                           
test command:                                                                                                                                                                     
git repository:                                                                                                                                                                   
keywords: javascript, backend, chai
author: Aditya Dharpure                                                                                                                                                           
license: (ISC)                                                                                                                                                                    
About to write to C:\Users\LOQ\Desktop\BackEnd\professionalBackendSetup\package.json:

{
  "name": "professionalbackendsetup",
  "version": "1.0.0",
  "description": "a backend at chai aur code channel - youtube",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "javascript",
    "backend",
    "chai"
  ],
  "author": "Aditya Dharpure",
  "license": "ISC"
}


Is this OK? (yes)

npm notice
npm notice New major version of npm available! 10.9.2 -> 11.4.2
npm notice Changelog: https://github.com/npm/cli/releases/tag/v11.4.2
npm notice To update run: npm install -g npm@11.4.2
npm notice
PS C:\Users\LOQ\Desktop\BackEnd\professionalBackendSetup> git add .
fatal: not a git repository (or any of the parent directories): .git
PS C:\Users\LOQ\Desktop\BackEnd\professionalBackendSetup> git init
Initialized empty Git repository in C:/Users/LOQ/Desktop/BackEnd/professionalBackendSetup/.git/
PS C:\Users\LOQ\Desktop\BackEnd\professionalBackendSetup> git add .
warning: in the working copy of 'package.json', LF will be replaced by CRLF the next time Git touches it
PS C:\Users\LOQ\Desktop\BackEnd\professionalBackendSetup> git commit -m "add initial files for backend"
[master (root-commit) dc841d6] add initial files for backend
 2 files changed, 19 insertions(+)
 create mode 100644 Readme.md
 create mode 100644 package.json
PS C:\Users\LOQ\Desktop\BackEnd\professionalBackendSetup> git branch -M  main
PS C:\Users\LOQ\Desktop\BackEnd\professionalBackendSetup> git remote add origin https://github.com/adityadharpure07/professional-backend-setup.git
PS C:\Users\LOQ\Desktop\BackEnd\professionalBackendSetup> git push -u origin main
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 8 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 558 bytes | 279.00 KiB/s, done.
Total 4 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
To https://github.com/adityadharpure07/professional-backend-setup.git
 * [new branch]      main -> main
branch 'main' set up to track 'origin/main'.
PS C:\Users\LOQ\Desktop\BackEnd\professionalBackendSetup> git status
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
PS C:\Users\LOQ\Desktop\BackEnd\professionalBackendSetup> git status
On branch main
Your branch is up to date with 'origin/main'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        public/

nothing added to commit but untracked files present (use "git add" to track)
PS C:\Users\LOQ\Desktop\BackEnd\professionalBackendSetup> cd src
PS C:\Users\LOQ\Desktop\BackEnd\professionalBackendSetup\src> ls
PS C:\Users\LOQ\Desktop\BackEnd\professionalBackendSetup\src> touch app.js
touch : The term 'touch' is not recognized as the name of a cmdlet, function, script file, or operable program. Check the spelling of the name, or if a path was included, 
verify that the path is correct and try again.
At line:1 char:1
+ touch app.js
+ ~~~~~
    + CategoryInfo          : ObjectNotFound: (touch:String) [], CommandNotFoundException
    + FullyQualifiedErrorId : CommandNotFoundException

PS C:\Users\LOQ\Desktop\BackEnd\professionalBackendSetup\src> npm i -D nodemon

added 29 packages, and audited 30 packages in 3s

4 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS C:\Users\LOQ\Desktop\BackEnd\professionalBackendSetup\src> git status
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   ../package.json

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        ../.gitignore
        ../package-lock.json
        ../public/
        ./

no changes added to commit (use "git add" and/or "git commit -a")
PS C:\Users\LOQ\Desktop\BackEnd\professionalBackendSetup\src> git add .
PS C:\Users\LOQ\Desktop\BackEnd\professionalBackendSetup\src> git commit -m "setup project files - part 1"
[main c59878f] setup project files - part 1
 3 files changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 src/constants.js
 create mode 100644 src/iapp.js
 create mode 100644 src/index.js
PS C:\Users\LOQ\Desktop\BackEnd\professionalBackendSetup\src> git push
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 8 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (4/4), 396 bytes | 396.00 KiB/s, done.
Total 4 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
To https://github.com/adityadharpure07/professional-backend-setup.git
   dc841d6..c59878f  main -> main
PS C:\Users\LOQ\Desktop\BackEnd\professionalBackendSetup\src> ls


    Directory: C:\Users\LOQ\Desktop\BackEnd\professionalBackendSetup\src


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         6/14/2025  10:38 PM              0 constants.js
-a----         6/14/2025  10:38 PM              0 iapp.js
-a----         6/14/2025  10:38 PM              0 index.js


PS C:\Users\LOQ\Desktop\BackEnd\professionalBackendSetup\src> cd..
PS C:\Users\LOQ\Desktop\BackEnd\professionalBackendSetup> mkdir controllers db middlewares models routes utils
mkdir : A positional parameter cannot be found that accepts argument 'db'.
At line:1 char:1
+ mkdir controllers db middlewares models routes utils
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : InvalidArgument: (:) [mkdir], ParameterBindingException
    + FullyQualifiedErrorId : PositionalParameterNotFound,mkdir

PS C:\Users\LOQ\Desktop\BackEnd\professionalBackendSetup> cd src
PS C:\Users\LOQ\Desktop\BackEnd\professionalBackendSetup\src> mkdir controllers db middlewares models routes utils
mkdir : A positional parameter cannot be found that accepts argument 'db'.
At line:1 char:1
+ mkdir controllers db middlewares models routes utils
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : InvalidArgument: (:) [mkdir], ParameterBindingException
    + FullyQualifiedErrorId : PositionalParameterNotFound,mkdir

PS C:\Users\LOQ\Desktop\BackEnd\professionalBackendSetup\src> git status
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   ../package.json

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        ../.gitignore
        ../package-lock.json
        ../public/

no changes added to commit (use "git add" and/or "git commit -a")
PS C:\Users\LOQ\Desktop\BackEnd\professionalBackendSetup\src> npm i -D prettier

added 1 package, and audited 31 packages in 2s

5 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS C:\Users\LOQ\Desktop\BackEnd\professionalBackendSetup\src> -->





























