# Can’t Be Gassed

## Iteration 2 - Review & Retrospect

 * When: November 13, 2017
 * Where: Bahen Centre Room 1210 (Tutorial)

## Process - Reflection

In this iteration, we created the bulk of the code that has currently been contributed to the project. Our goal was to create a prototype of our application. In general, we met the goals we set in the planning meeting for this iteration.

#### Decisions that turned out well


1. We decided on the [exact dates and times](https://github.com/csc301-fall-2017/project-team-05/blob/master/deliverables/iteration-02.plan.md)(in events section) we would have all meetings for this iteration in advance (during the planning meeting). There was an expectation that everyone would attend these meetings, especially as they were planned weeks before we were having them, so this helped to make sure we didn’t have conflicting schedules. Though there was one instance during reading week when one meeting had to be rescheduled, we still eventually met on a different day and this is owed to the fact that we had committed to meeting a specific number of times.

2. We created a shared Google Drive folder for the members with relevant files in it. For example, the plan.md and review.md are contained in this folder. This makes it easy for us to work on the files for each deliverable, especially when working at the same time (for example, on the script for our demo video), and makes it easier to correct each other, discuss, and collaborate in real time.

3. In general, we split up tasks and distributed them into groups of two. This was a good idea so that mostly, everyone had someone to collaborate with instead of coding completely individually. This was a good decision because we could discuss coding decisions, and help each other when we got stuck. In certain weeks when one person could not contribute as much as hoped, the other person could take up the slack so that in the end, the task was completed.


#### Decisions that did not turn out as well as we hoped


1. One decision that didn’t turn out as successful as it could have was how we collaborated on code between individuals. Although it was a good idea to split up coding tasks between groups of one or two, putting together the code created unprecedented coding tasks that we could have better expected and planned for had there been more communication and collaboration, and gradual combination of the tasks. Given the number of group members, we wanted to split up tasks so we would each have relatively equal contributions, however that partition became something of an obstacle in the end.

2. This iteration, we did not write code reviews as planned in our planning meeting. In the individual task groups (i.e. 2-3 people working on a single feature), there was a natural process of ensuring our code was good, because working together required us to look at and add on to each other’s code. Otherwise, the groups remained mostly isolated from each other. Additionally, we were more focused on our own groups, which contributed to the reasons why we did not end up looking at code outside of our own task.

3. We underestimated how much coding we could each do and ended up with smaller tasks than expected. As such some of us did not have weekly contributions and did less work than we could have. Although it is good that we finished what we planned (all in all, a better outcome than if we had been overwhelmed by the amount we planned to complete), we should’ve taken into account the amount of time we had and tried to implement a deliverable with more features.

#### Planned changes

1. In the next iteration, we will hopefully be more proactive in reviewing each other’s code, outside of our individual tasks. This is so we can ensure the code is of a quality we can all be satisfied with, and so that we are all on the same page. This should also help to make integrating features and combining code a more streamlined process.

2. We will think of more prospective tasks and features for team members to work on in case the coding tasks we are assigned to begin with end up less challenging than initially thought. This will help us waste less time and hopefully result in a more useful and satisfying product. And since we at this point have a working app, even if some features end up incomplete, we will still end up with a product with the most features we can possibly implement.

## Product - Review

#### Goals and/or tasks that were met/completed:

1. We have a working prototype, and each member group finished their individual tasks.
	- Integrated the Google Maps API to show potential routes ([code](https://github.com/csc301-fall-2017/project-team-05/blob/master/webApplication/controller/googleMaps.js))
	- Created a script to parse gasbuddy for prices and addresses of gas stations near the user ([code](https://github.com/csc301-fall-2017/project-team-05/blob/master/webApplication/view/scripts/gasbuddy.js))
	- Working web app ([code](https://github.com/csc301-fall-2017/project-team-05/blob/master/webApplication/controller/app.js))
	- We’ve put it all together (a demo of the finished product in in the video)
	- Database, to be integrated next iteration ([code: 1](https://github.com/csc301-fall-2017/project-team-05/blob/master/Database/databaseData.sql), [2](https://github.com/csc301-fall-2017/project-team-05/blob/master/Database/databaseTable.sql))
	- Video ([YouTube](https://www.youtube.com/watch?v=GWwW2Ho5Q84)) ([github](https://github.com/csc301-fall-2017/project-team-05/blob/master/deliverables/Artifacts/Video%20(Deliverable%202).txt))
	- Meetings ([meeting notes](https://github.com/csc301-fall-2017/project-team-05/blob/master/deliverables/Artifacts/meeting-notes.md))
	- [Trello Board](https://trello.com/b/Wr5xGbFo/cant-be-gassed)

#### Goals and/or tasks that were planned but not met/completed:

1. Because of the way Gasbuddy retrieves prices (i.e. it retrieves information for only 5 gas stations near the postal code or city input), we decided that the database will probably only need to store the user’s data (e.g. mileage). Consequently, it hasn’t actually been integrated in the web application yet, and this will be done later.

2. Currently, the Gasbuddy parsing script is unsuccessful in retrieving some data, while it is successful retrieving other data. This is because the Gasbuddy website updates elements in the window and runs scripts after the initial page loads, changes which our parser does not receive. We will explore other parsing methods in the next iteration to improve upon this.

## Meeting Highlights

Going into the next iteration, our main insights are:

1. To assign ourselves auxiliary tasks to work on. With the conclusion of this iteration, we have almost entirely finished the core code, but some of our members did not have much to do at certain points in the process. We should consider auxiliary features that we brainstormed previously. We can evaluate these old ideas in the scope of where our application has taken us, decide whether they are viable, think of new ideas, and assign them to be done to ensure we always have work to do.

2. Much of the work done for this iteration was focused on writing code and launching it so that our application functions as planned, and not really focused on the user. Moving forward, we should refine our application, so that it is easy to use and makes our users’ lives easier. For example, we might display information like exactly how much money is being saved driving to a gas station 5 km away versus 2 km away, in the most helpful and easy-to-understand way possible, so that our users can make better and more informed choices.
