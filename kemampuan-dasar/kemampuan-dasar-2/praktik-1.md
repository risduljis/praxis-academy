# Praktik 1

arisa@DESKTOP-2JFADU3 MINGW64 /c/xampp/htdocs
$ mkdir rhymes

arisa@DESKTOP-2JFADU3 MINGW64 /c/xampp/htdocs
$ cd rhymes

arisa@DESKTOP-2JFADU3 MINGW64 /c/xampp/htdocs/rhymes
$ git init
Initialized empty Git repository in C:/xampp/htdocs/rhymes/.git/

arisa@DESKTOP-2JFADU3 MINGW64 /c/xampp/htdocs/rhymes (master)
$ touch README.txt

arisa@DESKTOP-2JFADU3 MINGW64 /c/xampp/htdocs/rhymes (master)
$ git add README.txt

arisa@DESKTOP-2JFADU3 MINGW64 /c/xampp/htdocs/rhymes (master)
$ git commit -m 'First comming.'                                                                                        [master (root-commit) f04250e] First comming.
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 README.txt

arisa@DESKTOP-2JFADU3 MINGW64 /c/xampp/htdocs/rhymes (master)
$ echo 'This repo is a collection of my favorite nursery rhymes.' >> README.txt                                         
arisa@DESKTOP-2JFADU3 MINGW64 /c/xampp/htdocs/rhymes (master)
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   README.txt

no changes added to commit (use "git add" and/or "git commit -a")

arisa@DESKTOP-2JFADU3 MINGW64 /c/xampp/htdocs/rhymes (master)
$ git diff
warning: LF will be replaced by CRLF in README.txt.
The file will have its original line endings in your working directory
diff --git a/README.txt b/README.txt
index e69de29..c83e022 100644
--- a/README.txt
+++ b/README.txt
@@ -0,0 +1 @@
+This repo is a collection of my favorite nursery rhymes.

arisa@DESKTOP-2JFADU3 MINGW64 /c/xampp/htdocs/rhymes (master)
$ git add README.txt
warning: LF will be replaced by CRLF in README.txt.
The file will have its original line endings in your working directory

arisa@DESKTOP-2JFADU3 MINGW64 /c/xampp/htdocs/rhymes (master)
$ git commit -m 'Added project overview to README.txt'
[master 0a9ab2a] Added project overview to README.txt
 1 file changed, 1 insertion(+)

arisa@DESKTOP-2JFADU3 MINGW64 /c/xampp/htdocs/rhymes (master)
$ git add all-around-the-mulberry-bush.txt
warning: LF will be replaced by CRLF in all-around-the-mulberry-bush.txt.
The file will have its original line endings in your working directory

arisa@DESKTOP-2JFADU3 MINGW64 /c/xampp/htdocs/rhymes (master)
$ git status
On branch master
Your branch is up to date with 'origin/master'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   all-around-the-mulberry-bush.txt

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        hickory-dickory-dock.txt
        hokey-pokey.txt
        jack-and-jill.txt
        old-mother-hubbard.txt
        roses-are-red.txt
        twinkle-twinkle.txt


arisa@DESKTOP-2JFADU3 MINGW64 /c/xampp/htdocs/rhymes (master)
$ git commit -m 'Added all-around-the-mulberry-bush.txt.'
[master 76f57d7] Added all-around-the-mulberry-bush.txt.
 1 file changed, 19 insertions(+)
 create mode 100644 all-around-the-mulberry-bush.txt

arisa@DESKTOP-2JFADU3 MINGW64 /c/xampp/htdocs/rhymes (master)
$ git add jack-and-jill.txt
warning: LF will be replaced by CRLF in jack-and-jill.txt.
The file will have its original line endings in your working directory

arisa@DESKTOP-2JFADU3 MINGW64 /c/xampp/htdocs/rhymes (master)
$ git commit -m 'Added jack-and-jill.txt.'
[master bf7fac8] Added jack-and-jill.txt.
 1 file changed, 12 insertions(+)
 create mode 100644 jack-and-jill.txt

arisa@DESKTOP-2JFADU3 MINGW64 /c/xampp/htdocs/rhymes (master)
$ git add .
warning: LF will be replaced by CRLF in hickory-dickory-dock.txt.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in hokey-pokey.txt.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in old-mother-hubbard.txt.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in roses-are-red.txt.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in twinkle-twinkle.txt.
The file will have its original line endings in your working directory

arisa@DESKTOP-2JFADU3 MINGW64 /c/xampp/htdocs/rhymes (master)
$ git commit -m 'Added old-mother-hubbard.txt, twinkle-twinkle.txt, hokey-pokey.txt'
[master 1c6a842] Added old-mother-hubbard.txt, twinkle-twinkle.txt, hokey-pokey.txt
 5 files changed, 69 insertions(+)
 create mode 100644 hickory-dickory-dock.txt
 create mode 100644 hokey-pokey.txt
 create mode 100644 old-mother-hubbard.txt
 create mode 100644 roses-are-red.txt
 create mode 100644 twinkle-twinkle.txt

arisa@DESKTOP-2JFADU3 MINGW64 /c/xampp/htdocs/rhymes (master)
$ git log
commit 1c6a84200d2503ebe46bc1abe1316e761b537ac1 (HEAD -> master)
Author: Aris Abdul Ajis <arisabdulaji026@gmail.com>
Date:   Sun Dec 29 22:16:38 2019 +0700

    Added old-mother-hubbard.txt, twinkle-twinkle.txt, hokey-pokey.txt

commit bf7fac81f27e881e689ce14de2605ccfa0b68d05
Author: Aris Abdul Ajis <arisabdulaji026@gmail.com>
Date:   Sun Dec 29 22:16:26 2019 +0700

    Added jack-and-jill.txt.

commit 76f57d7dddc8497de9f16cfc4ed5d43a44fe12a9
Author: Aris Abdul Ajis <arisabdulaji026@gmail.com>
Date:   Sun Dec 29 22:16:16 2019 +0700

    Added all-around-the-mulberry-bush.txt.

commit 0a9ab2ae51f9613ffae2d81baf1162fdb6c558a8 (origin/master)
Author: Aris Abdul Ajis <arisabdulaji026@gmail.com>
Date:   Sun Dec 29 21:48:07 2019 +0700

    Added project overview to README.txt

commit f04250e8a116b380f43a977333cdd4aa6fd51ec3
Author: Aris Abdul Ajis <arisabdulaji026@gmail.com>
Date:   Sun Dec 29 21:45:26 2019 +0700

    First comming.

arisa@DESKTOP-2JFADU3 MINGW64 /c/xampp/htdocs/rhymes (master)
$ git log --oneline
1c6a842 (HEAD -> master) Added old-mother-hubbard.txt, twinkle-twinkle.txt, hokey-pokey.txt
bf7fac8 Added jack-and-jill.txt.
76f57d7 Added all-around-the-mulberry-bush.txt.
0a9ab2a (origin/master) Added project overview to README.txt
f04250e First comming.

arisa@DESKTOP-2JFADU3 MINGW64 /c/xampp/htdocs/rhymes (master)
$ git log -p
commit 1c6a84200d2503ebe46bc1abe1316e761b537ac1 (HEAD -> master)
Author: Aris Abdul Ajis <arisabdulaji026@gmail.com>
Date:   Sun Dec 29 22:16:38 2019 +0700

    Added old-mother-hubbard.txt, twinkle-twinkle.txt, hokey-pokey.txt

diff --git a/hickory-dickory-dock.txt b/hickory-dickory-dock.txt
new file mode 100644
index 0000000..a337f4c
--- /dev/null
+++ b/hickory-dickory-dock.txt
@@ -0,0 +1,5 @@
+Hickory, dickory, dock,
+The mouse ran up the clock.
+The clock struck one,
+The mouse ran down!
+Hickory, dickory, dock.
diff --git a/hokey-pokey.txt b/hokey-pokey.txt
new file mode 100644
index 0000000..97f425b
--- /dev/null
+++ b/hokey-pokey.txt
@@ -0,0 +1,16 @@
+You put your right foot in,
+You put your right foot out;
+You put your right foot in,
+And you shake it all about.
+You do the Hokey-Pokey,
+And you turn yourself around.
...skipping...
commit 1c6a84200d2503ebe46bc1abe1316e761b537ac1 (HEAD -> master)
Author: Aris Abdul Ajis <arisabdulaji026@gmail.com>
Date:   Sun Dec 29 22:16:38 2019 +0700

    Added old-mother-hubbard.txt, twinkle-twinkle.txt, hokey-pokey.txt

diff --git a/hickory-dickory-dock.txt b/hickory-dickory-dock.txt
new file mode 100644
index 0000000..a337f4c
--- /dev/null
+++ b/hickory-dickory-dock.txt
@@ -0,0 +1,5 @@
+Hickory, dickory, dock,
+The mouse ran up the clock.
+The clock struck one,
+The mouse ran down!
+Hickory, dickory, dock.
diff --git a/hokey-pokey.txt b/hokey-pokey.txt
new file mode 100644
index 0000000..97f425b
--- /dev/null
+++ b/hokey-pokey.txt
@@ -0,0 +1,16 @@
+You put your right foot in,
+You put your right foot out;
+You put your right foot in,
+And you shake it all about.
+You do the Hokey-Pokey,
+And you turn yourself around.
+That's what it's all about!
set mark: ...skipping...
Author: Aris Abdul Ajis <arisabdulaji026@gmail.com>
Date:   Sun Dec 29 22:16:38 2019 +0700

    Added old-mother-hubbard.txt, twinkle-twinkle.txt, hokey-pokey.txt

diff --git a/hickory-dickory-dock.txt b/hickory-dickory-dock.txt
new file mode 100644
index 0000000..a337f4c
--- /dev/null
+++ b/hickory-dickory-dock.txt
@@ -0,0 +1,5 @@
+Hickory, dickory, dock,
+The mouse ran up the clock.
+The clock struck one,
+The mouse ran down!
+Hickory, dickory, dock.
diff --git a/hokey-pokey.txt b/hokey-pokey.txt
new file mode 100644
index 0000000..97f425b
--- /dev/null
+++ b/hokey-pokey.txt
@@ -0,0 +1,16 @@
+You put your right foot in,
+You put your right foot out;
+You put your right foot in,
+And you shake it all about.
+You do the Hokey-Pokey,
+And you turn yourself around.
+That's what it's all about!
+
+You put your left foot in...
+You put your right hand in...
+You put your right side in...
+You put your nose in...
+You put your tail in...
+You put your head in...
+You put your whole self in...
+
diff --git a/old-mother-hubbard.txt b/old-mother-hubbard.txt
new file mode 100644
index 0000000..c91ff71
--- /dev/null
+++ b/old-mother-hubbard.txt
@@ -0,0 +1,34 @@
+Old Mother Hubbard
+Went to the cupboard
+To fetch her poor dog a bone;
+But when she came there
+The cupboard was bare,
+And so the poor dog had none.
+She took a clean dish
+To get him some tripe;
+But when she came back
+He was smoking a pipe.
+She went to the grocer's
+To buy him some fruit;
+But when she came back
+He was playing the flute.
+
                                                                                                                        +You put your left foot in...
+You put your right hand in...
+You put your right side in...
+You put your nose in...
+You put your tail in...
+You put your head in...
+You put your whole self in...
+
diff --git a/old-mother-hubbard.txt b/old-mother-hubbard.txt
new file mode 100644
index 0000000..c91ff71
--- /dev/null
+++ b/old-mother-hubbard.txt
@@ -0,0 +1,34 @@
+Old Mother Hubbard
+Went to the cupboard
+To fetch her poor dog a bone;
+But when she came there
+The cupboard was bare,
+And so the poor dog had none.
+She took a clean dish
+To get him some tripe;
+But when she came back
+He was smoking a pipe.
+She went to the grocer's
+To buy him some fruit;
+But when she came back
+He was playing the flute.
+
:      0 [sig] bash 1502! sigpacket::process: Suppressing signal 18 to win32 process (pid 2880)
+She went to the baker's
:                       

arisa@DESKTOP-2JFADU3 MINGW64 /c/xampp/htdocs/rhymes (master)
$ git push -u origin master
Enumerating objects: 6, done.
Counting objects: 100% (6/6), done.
Delta compression using up to 4 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (6/6), 518 bytes | 518.00 KiB/s, done.
Total 6 (delta 0), reused 0 (delta 0)
To https://github.com/risduljis/rhymes.git
 * [new branch]      master -> master
Branch 'master' set up to track remote branch 'master' from 'origin'.