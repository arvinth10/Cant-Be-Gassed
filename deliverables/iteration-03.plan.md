# Can’t Be Gassed

## Iteration 03

 * Start date: November 20th, 2017
 * End date: December 1st, 2017

## Process

For this iteration, we will be finishing up and refining our code and user interface, as well as integrating the database that was created in previous iterations. If the application is finished with time to spare, we will add auxiliary features.

#### Changes from previous iteration


1. We will be performing more structured code reviews. This is so that we can have as much different input from different members on the code we write, ensuring that it is of sufficient quality, and properly documented and readable. Ideally, every member should be able to understand all the code in production, regardless of whether or not they were involved in creating it. If this change is implemented successfully, we should have a more functional web app with all features working as expected.
2. We will be performing database schema reviews. The structure of the database will influence the performance of our application, so it is important to make sure our database is designed well enough to keep our application performance at a quality which is good. If this change is implemented successfully, the application should have good performance quality.

#### Roles & responsibilities

- Project Manager (Distributes tasks and guides development): Bob
- Scrum Master (Guides meetings and oversees Trello Board): Arvinth
- Meeting Scribe (takes notes for each meeting about what was discussed/accomplished): Ying
	- Backend Developers (Lin, Ying)
		- Finish creating the parsing script for gasbuddy. Presently, some elements are not properly retrieved. Implement a different method for retrieving information.
		- (If the design moves in this direction) get extra elements (more data to show to the user)
	- Frontend Developers (Arvinth, Mathusan)
		- Continue making the app look nicer and more user friendly
		- Think more deeply about user interaction to create the most useful app
	- Database Developers (Kerjohn, Leon) 
		- Extract data from registration/login pages and put it into the database
		- Read from the database to confirm user info (e.g. password correctness)
		- Store gas station info in the database from gasuddy parsing.
	- Video Production (Bob)
		- Change the video based on the new features and UI
	- Extra features (for members who finish early)
		- Look into grocery stores/bodegas/other venue databases like gasbuddy to augment the app.
		- Make a page that plots the user’s spending.
		- Show average spendings
		- Show a pop-up for predicted prices (rising or falling)
#### Events
- November 20th, 2017  - 8:00 PM in BA
Initial plan meeting
- November 23rd, 2017 - 9:30 PM Trello Board Meeting
	- Discuss everything left to be done before due date
	- Ensure everyone is working on something to complete project
	- Complete plan.md file
- November 27th, 2017 - 8:00 PM in BA 
	- See what is left to be done
	- Decided on what changes need to be done in the demo video
- November 30th, 2017 - 9:30 PM Trello Board Meeting
	- Ensure application is working as intended
	- Complete review.md file

#### Artifacts

- Trello to keep track of the status for each User Story
- SQL Database Design (schematic of the architecture)
- Meeting minutes 
	- Notes that summarize each meeting
- Screenshots of Trello for proof of each Trello Board Meeting
- Meeting Schedule
	- Intended schedule of events
- Code reviews
	- Includes notes and comments, and a conclusion commenting on whether or not the code is ready for merging
	- Includes discussion between developer and reviewer if the code is not ready

#### Git / GitHub workflow

Each team member will take their assigned User Story (task) from Trello and begin working on it in their own branch named “NameOfPerson_FeatureName”.
1. Once they have completed their task and thoroughly tested it they will create a pull-request from their branch to master.
2. The User Story will be moved to “Review” on Trello so other team members know that the code must be reviewed.
3. One of the other team members will pick up this User Story and ensure it has been completed properly (writing notes and comments pertaining to the code).
4. Once this team member confirms that the code is ready for production, they will merge the pull request and move the User Story to the “Completed” list on Trello.

If the feature is not yet ready to be merged with the master branch then the reviewer will add specific comments in Github, and move the story back to “In Progress”.

Tasks are assigned based on experience in the particular field, that either being working with the database, frontend, google maps api, etc. If one person shows he/she has more experience then they get priority to do the task. Also if a particular member has taken on fewer tasks the product manager will assign more tasks to this person. If at any time there is a conflict such as multiple people wanting to do one task then a vote will be held using Facebooks voting poll. And since we have 7 people in our group there will not be a tie.

We chose this GitHub process as it seemed the most acceptable in order to complete the project successfully. Choosing tasks based on expertise ensures that the person most suitable for the job within the group is working on that task. Through use of the code reviews we are ensuring that the best code gets committed so when adding features in the future, we are less likely to break something since two set of eyes have seen the code. 

Using pull-requests and merges we get to see work done by a team member before deciding whether we should implement it into our application. For example if one member mocks up a different front end design on a new branch, as a team we can decide if we would like to merge this pull request. This way we are not committing anything to the master and breaking anything that is already working fine.


## Product

#### Goals and tasks

1. Parse data from gasbuddy website to the database.
2. Display expected next day gas prices.
3. Polish user interface.
4. (If there’s time, create a page to show a plot of the user’s approximate spendings on gas)

#### Artifacts

- Webapp
	- Additional functionality will be implemented during this deliverable
	- Appearance and UI features will be updated
	- App will be able to display expected gas prices for the next day

- Video
	- The video will help give viewers a brief overview of the app, its features, and how to use it. This will help the user understand the app and its purpose, as well as how to use it, and will also show the value/usefulness of the app. This will be updated according the any changes made from the previous video/iteration 
	- Voiceover
	- Script document
	- Recorded footage of the webapp
	- Record via desktop recording software (OBS, fraps, etc.)

- Code
	- Github
	- Files on Github for each feature and each task completed
	- Commit log to show who contributed to each task
