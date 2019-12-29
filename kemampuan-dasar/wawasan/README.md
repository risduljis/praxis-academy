# Wawasan

1. When the first digital computers appeared in the early 1940s,[7] the instructions to make them operate were wired into the machine. Practitioners quickly realized that this design was not flexible and came up with the "stored program architecture" or von Neumann architecture. Thus the division between "hardware" and "software" began with abstraction being used to deal with the complexity of computing. Programming languages started to appear in the early 1950s[8] and this was also another major step in abstraction. Major languages such as Fortran, ALGOL, and COBOL were released in the late 1950s to deal with scientific, algorithmic, and business problems respectively.The origins of the term "software engineering" have been attributed to various sources. The term "software engineering" appeared in a list of services offered by companies in the June 1965 issue of COMPUTERS and AUTOMATION and was used more formally in the August 1966 issue of Communications of the ACM (Volume 9, number 8) “letter to the ACM membership” by the ACM President Anthony A. Oettinger;,[10] it is also associated with the title of a NATO conference in 1968 by Professor Friedrich L. Bauer, the first conference on software engineering.

2. In software engineering, software configuration management (SCM or S/W CM)[1] is the task of tracking and controlling changes in the software, part of the larger cross-disciplinary field of configuration management.[2] SCM practices include revision control and the establishment of baselines. If something goes wrong, SCM can determine what was changed and who changed it. If a configuration is working well, SCM can determine how to replicate it across many hosts.

The acronym "SCM" is also expanded as source configuration management process and software change and configuration management. However, "configuration" is generally understood to cover changes typically made by a system administrator.

3. - Version Control

A component of software configuration management, version control, also known as revision control or source control,[1] is the management of changes to documents, computer programs, large web sites, and other collections of information. Changes are usually identified by a number or letter code, termed the "revision number", "revision level", or simply "revision". For example, an initial set of files is "revision 1". When the first change is made, the resulting set is "revision 2", and so on. Each revision is associated with a timestamp and the person making the change. Revisions can be compared, restored, and with some types of files, merged.

- Distributed version control

In software development, distributed version control (also known as distributed revision control) is a form of version control in which the complete codebase, including its full history, is mirrored on every developer's computer.[1] This enables automatic management branching and merging, speeds up of most operations (except pushing and pulling), improves the ability to work offline, and does not rely on a single location for backups.

In 2010, software development author Joel Spolsky described distributed version control systems as "possibly the biggest advance in software development technology in the [past] ten years".

4. Git development began in April 2005, after many developers of the Linux kernel gave up access to BitKeeper, a proprietary source-control management (SCM) system that they had formerly used to maintain the project.[14] The copyright holder of BitKeeper, Larry McVoy, had withdrawn free use of the product after claiming that Andrew Tridgell had created SourcePuller by reverse engineering the BitKeeper protocols.[15] The same incident also spurred the creation of another version-control system, Mercurial.

5. What is “version control”, and why should you care? Version control is a system that records changes to a file or set of files over time so that you can recall specific versions later. For the examples in this book, you will use software source code as the files being version controlled, though in reality you can do this with nearly any type of file on a computer.

If you are a graphic or web designer and want to keep every version of an image or layout (which you would most certainly want to), a Version Control System (VCS) is a very wise thing to use. It allows you to revert selected files back to a previous state, revert the entire project back to a previous state, compare changes over time, see who last modified something that might be causing a problem, who introduced an issue and when, and more. Using a VCS also generally means that if you screw things up or lose files, you can easily recover. In addition, you get all this for very little overhead.

6. - Account Setup and Configuration
The first thing you need to do is set up a free user account. Simply visit https://github.com, choose a user name that isn’t already taken, provide an email address and a password, and click the big green “Sign up for GitHub” button.

The next thing you’ll see is the pricing page for upgraded plans, but it’s safe to ignore this for now. GitHub will send you an email to verify the address you provided. Go ahead and do this; it’s pretty important (as we’ll see later).

 - Creating a new repository
 
  a. In the upper-right corner of any page, use the  drop-down menu, and select New repository.

  b. Optionally, to create a repository with the directory structure and files of an existing repository, use the Choose a template drop-down and select a template repository. You'll see template repositories that are owned by you and organizations you're a member of or that you've used before. For more information, see "Creating a repository from a template."

  c. Use the Owner drop-down menu, and select the account you want to own the repository.

  d. Type a name for your repository, and an optional description.

  e. Choose to make the repository either public or private. Public repositories are visible to the public, while private repositories are only accessible to you, and people you share them with. For more information, see "Setting repository visibility."

  f. If you're not using a template, there are a number of optional items you can pre-populate your repository with. If you're importing an existing repository to GitHub, don't choose any of these options, as you may introduce a merge conflict. You can add or create new files using the user interface or choose to add new files using the command line later. For more information, see "Importing a Git repository using the command line," "Adding a file to a repository using the command line," and "Addressing merge conflicts."

You can create a README, which is a document describing your project. For more information, see "About READMEs."
You can create a .gitignore file, which is a set of ignore rules. For more information, see "Ignoring files."
You can choose to add a software license for your project. For more information, see "Licensing a repository."

  g. Optionally, if the personal account or organization in which you're creating uses any GitHub Apps from GitHub Marketplace, select any apps you'd like to use in the repository.

  h. Click Create repository.

  j. At the bottom of the resulting Quick Setup page, under "Import code from an old repository", you can choose to import a project to your new repository. To do so, click Import code.