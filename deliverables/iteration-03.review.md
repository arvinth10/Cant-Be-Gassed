# Can’t Be Gassed

## Iteration 3 - Review & Retrospect

 * When: November 30, 2017
 * Where: Online (Trello Board Meeting)

## Process - Reflection

In this final iteration, we finished up the code for the core functionality and purpose of our project, and have succeeded in creating the application we envisioned in previous iterations.

#### Decisions that turned out well


1. There was more collaboration between groups for each coding task, in coding, testing, and communication. This allowed for the people working on parts of the project that were related, or which relied on each other, to understand more of the code. As well, specifically, this allowed for us to fix and complete the website parsing code, which was a problem last iteration. The members who were tasked to website parsing were unable to test the code on their own machines, and this increased collaboration allowed for the parsing code to be efficiently tested and debugged.

2. After conducting database schema reviews, we modified some primary keys in our database so that we can allow gas companies to have the same name, but with different addresses. Also, we made it so that each userID has to be unique, so that we can avoid modifying user data incorrectly in the event that two users have the same userID. The change we made based on these schema reviews ensured that our database is able to receive more diverse data without any issues.

3. We decided on the [exact dates and times](https://github.com/csc301-fall-2017/project-team-05/blob/master/deliverables/Artifacts/iteration-03.event-schedule.md) for each meeting for this iteration during our planning meeting. This held each member accountable to attend each meeting as they had weeks in advance to make time for the meetings in their schedules. Though at times we did not complete exactly what we had planned for each meeting, the planned events still helped to ensure that our progress was on track.

4. Generally, we split up tasks and distributed them into groups of two. Although this iteration was much shorter than the last, and the tasks were mostly just finalizing and fixing existing code, this allowed for each member to contribute, and for tasks to get done even if one member of the pair could not contribute as much during the week. In all, this ensured that each piece of code was fixed and completed in an efficient manner in time for the deadline.

#### Decisions that did not turn out as well as we hoped


1. We did not write code reviews as planned in our planning meeting. To ensure our code integrated properly, members across teams had to examine and adapt code written by other individual task groups, which resulted in a natural process of reviewing and checking each other’s code, but no formal reviews were conducted.

2. When we started this project, we decided to use Trello to track and manage tasks for this project. While this was very successful in previous iterations, by the end of this iteration, we noticed that we did not use Trello as extensively as we had previously, as we were all focused on our tasks, and instead relied on verbal updates to monitor each other’s progress on individual tasks. This was not ideal because we found it harder to keep track of what everyone was working on at any given time, and it would have been more appropriate to continue using Trello as we had done in earlier iterations.

3. While it was a good idea to write up example auxiliary features for our application, in case members of the team had extra time to work on, none of us ended up getting to these features. If we ever decide to build on this application, beyond the scope of this class, these are features we could consider.

#### Planned changes


1. While formal code reviews have been something we have had planned for more than one iteration now, we have not followed through on these plans. A part of our [Github workflow](https://github.com/csc301-fall-2017/project-team-05/blob/master/deliverables/iteration-03.plan.md#git--github-workflow) should have ensured that formal code reviews occurred, where pull requests would not be merged to the master branch (code would not make it to production), if another member had not reviewed and approved it beforehand. In the future, we would adhere to this process of creating pull requests instead of committing directly to the master branch, so that code reviews are actually conducted.

2. We often moved files of code between the MVC folders in our git repository, which sometimes made finding the ‘blame’ for certain code difficult, as well as keeping track of who was actually involved with which tasks. In the future, we would record this information somewhere, for example in Trello, or indicate in code comments or in the commit messages of these changes why we are moving these files, and who should be consulted about this code.

## Product - Review

#### Goals and/or tasks that were met/completed:

1. The [website parsing code](https://github.com/csc301-fall-2017/project-team-05/blob/master/webApplication/controller/scraper.js) was fixed and completed. This required a new approach and implementation as, after team discussion and TA feedback, we found that the previous approach would not work.

2. Although we did not write this in our goals to be completed in the plan.md, users can now register on the [registration page](https://github.com/csc301-fall-2017/project-team-05/blob/master/deliverables/Artifacts/registration%20page.PNG) and log in on the [login page](https://github.com/csc301-fall-2017/project-team-05/blob/master/deliverables/Artifacts/login%20page.PNG) of the app and enter information (gas mileage) that is needed by the app for each use. The information is stored in the database ([code](https://github.com/csc301-fall-2017/project-team-05/blob/master/Database/databaseTable.sql)) and it is not required for them to enter again the next time they use the app. This is important for flow and efficiency of usage and should make people more likely to use the app as it is faster and easier to use.

3. The [user interface](https://github.com/csc301-fall-2017/project-team-05/blob/master/deliverables/Artifacts/Front%20Page%20Screenshot.png) was fixed and polished ([styles code](https://github.com/csc301-fall-2017/project-team-05/tree/master/webApplication/view/styles)). It is now much more aesthetically pleasing and easier on the eye. This makes it easier to use and and should make people more likely to use the app.

4. We had all our planned meetings ([meeting notes](https://github.com/csc301-fall-2017/project-team-05/blob/master/deliverables/Artifacts/meeting-notes.md), [Trello Board](https://trello.com/b/Wr5xGbFo/cant-be-gassed)).

5. A video for the final iteration was made ([YouTube](https://www.youtube.com/watch?time_continue=81&v=DYUmVouhAGg)).

#### Goals and/or tasks that were planned but not met/completed:

1. As explained above, while we naturally ended up reviewing code written by members in different task groups, no formal code reviews were conducted.

2. While we did end up completing some extra features (registration and login for the database), we did not end up having the additional time for any of the other extra, non-mandatory features we had proposed.

## Meeting Highlights

Going into future iterations beyond this class and project, our main insights are:

1. It is very important to have a strict workflow which everyone should follow, and team members should be held accountable if this workflow is not met. It might even be valuable to introduce real obstacles (for example, have a system in place where it is impossible to push code directly to the master branch of the git repository) to ensure that expectations are followed.

2. It would be more useful if, during each meeting, members discussed the progress they have made since the last meeting, and specific steps they will take to ensure more work is done and tasks are completed. Additionally, members would be able to provide input and suggest different technologies or libraries to resolve problems that are brought up during these discussions (for example, this would have expedited the process of utilizing Selenium Webdriver for the gasbuddy parsing). This ensures that everyone’s skillsets are used efficiently, less time is wasted, and working solutions are implemented faster and better.

3. Now that the core functionality has been implemented, we can focus our efforts on extra features to solve more problems and further enhance our users’ experiences with our application.

4. Collaboration between members who are not strictly working together on tasks is essential to fully utilizing the team’s skillsets and efficiently producing features and solutions. During this iteration, there was much more collaboration than in previous iterations, and this helped fix various problems members were stuck on, and improved the product in general. Going into future iterations, we would conduct regular code reviews and delve more deeply into code (approach, direction, etc.) during meetings.

