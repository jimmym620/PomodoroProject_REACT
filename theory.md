if !paused
    seconds -1

else 
    setSeconds(0)
    setMinutes(0)


===============================
 
 CONDITIONS FOR ENDING A SESSION

 - isEnded TRUE 
 - minutes and seconds === 0
 - isPaused FALSE

===============================
 How to know if a session began and has isEnded

 - minutes > 0, sessionActive TRUE
 - if (sessionActive TRUE, minutes+seconds = 0), 
    sessionActive FALSE

===============================
How to make copy of tasks list for session history

Task list
#1 task1, task2
#2 task2

Session history (IF COMPLETE BUTTON IS PRESSED)
#1 task1, task 2
#2 task1, task2

===============================
 How to loop through histStorageList and taskStorageList

 #1 go through taskStorageList and check for status: "complete"
        if true, add it to histStorageList

#2 map through histStorageListand create new articles
