# README of the Special To-Do-List

## Contents
1. Reason for this Project
2. Functions
3. In-Deep Functionality
4. Remarks for Developers
5. Credits

## 1. Reason for this Project

This project has a very useful intendation: 

According to the principal of "eating the frog first" (what means you should do the most important and/or exhausting task of the day before all the other tasks on yout to-do list) and in order to beat procrastination, this tool shows only "the frog" and black-leads all the other tasks until "the frog" is checked off and has been deleted from the task list (which can't be undone so you can't have a look at the other tasks and make "the frog" visible again). Only then the other tasks are going to be visible.

I hope this will help people (including me ;-) to workaround procrastination and get the important things done.

## 2. Functions

This to-do list should have following main functions:

1. Adding to-dos (together with a date)
2. Adding a most important to-do ("the frog") with a date so the app knows "the frog" for each day (→ dupe dates should be checked )
3. On clicking "done" at the frog, there must be a warning to the user to be aware that this can't be made undone.

More advanced functions: 

1. After dupe-date-check: Which frog should be held for the given date and which should be moved to another date? OR \
Which frog should be turned to a normal task?\
 → or both?
2. Show the sum of estimated time (given by the user) of all tasks

## 3. In-deep functionality

### Main Sequence

This is the sequence of the program:

0. Start of the application
1. Frog of the day + the remaining time for all the other tasks is shown 
2. Option to check the frog \
then: all the other tasks are shown and can be checked (and are deleted so you do them really)

### Buttons

#### Add to-do
0. Push button
1. Form: title, time estimated, bool frog?, (date in case of frog obligatory)
2. Save button.


#### 

## 4. Remarks for Developers

### Design

* At the start of the app only the frog is visible in relatively big and calm letters (so there are no negative thoughts about that exhausting task)

### Possible "Escape"-Options

* no option to edit to-dos
* no option to show all to-dos

## 5. Credits


~ FloVanMurks, 5<sup>th</sup> October 2023
