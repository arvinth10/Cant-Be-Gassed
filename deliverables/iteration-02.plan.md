# Can’t be Gassed

## Iteration 02

 * Start date: October 20th, 2017
 * End date: November 17th, 2017

## Process

#### Roles & responsibilities
- Project Manager (Distributes tasks and guides development): Bob
- Scrum Master (Guides meetings and oversees Trello Board): Arvinth
- Meeting Scribe (takes notes for each meeting about what was discussed/accomplished): Ying

- Database designers:
	- Create and implement MySQL in AWS and connect it with Spring Boot.
	- Write Model (MVC) class in Spring Boot 
		- Kerjohn
		- Leon

- Backend Developers
	- Create a python script that parses required information from Websites and populates the SQL Database (with specific gas stations and the gas prices at each of these stations)
		- Ying Han
		- Lin Han
	- Use Google Maps API to Get locations of Gas Stations and calculate required metrics (distance and duration of trip, amount of gas expended, etc.)
		- Arvinth
		- Mathusan
		- Kerjohn

- Frontend Developers:
	- Create a Mobile-First front end for the website. Possibly utilizing React Native.
		- Mathusan
		- Bob

- UI Designers:
	- Come up with a design and UI for the web page. Prioritize the mobile design. 
		- Mathusan
		- Ying
		- Leon

- Video Production:
	- Record and edit the video
		- Bob

#### Events

- October 20, 2017, 4:00PM  in BA2270
	- Initial plan meeting
- October 23, 2017, 8:00PM in BA2270
	- Start creating User-Stories and finalize execution plan
- October 26, 2017, 9:30PM Trello Board Meeting
	- Discuss progress on individual/pair tasks
- October 30, 2017, 8:00PM in BA2270
	- Should have finished individual/pair tasks
	- Code review (write up comments and notes) and describe to rest of team what your code does and how
	- Discuss remaining work to be done
	- Distribute tasks/discuss how to put app together
- November 2, 2017, 9:30PM Trello Board Meeting
	- Discuss progress made on putting all the work together, and what still needs to be done
- November 6, 2017, 8:00PM Trello Board Meeting
	- Discuss progress made and what still needs to be done
	- Code review (write up comments and notes)
	- Distribute remaining work if not already distributed
- November 9, 2017, 9:30PM Trello Board Meeting
	- Discuss what has been done and what still needs to be done on the app
	- Code review (write up comments and notes)
	- Distribute remaining tasks, if any
- November 13, 2017, 8:00PM in BA2270
	- Discuss and distribute tasks for video demo, finalize video script
- November 16, 2017, 9:30PM Trello Board Meeting
	- Finish demo video and discuss/add finishing touches
	- Review the work done over the iteration and reflect on the plan

#### Artifacts

- User Stories (which describe each developer’s task/the feature being implemented and the purpose of this task)
- Trello to keep track of the status for each User Story
- SQL Database Design (schematic of the architecture)
- Rough potential UI designs for front end (3 variations)
	- Comments on the good and bad parts of each design
- Mockup of finalized design
	- Justification of final design elements
- Meeting minutes 
	- Notes that summarize each meeting
- Screenshots of Trello for proof of each Trello Board Meeting
- Meeting Schedule
	- Intended schedule of events
- Code reviews
	- Includes notes and comments, and a conclusion commenting on whether or not the code is ready for merging
	- Includes discussion between developer and reviewer if the code is not ready


#### Git / GitHub workflow


1. Each team member will take their assigned User Story (task) from Trello and begin working on it in their own branch named “NameOfPerson_FeatureName”.
2. Once they have completed their task and thoroughly tested it they will create a pull-request from their branch to master.
3. The User Story will be moved to “Review” on Trello so other team members know that the code must be reviewed.
4. One of the other team members will pick up this User Story and ensure it has been completed properly (writing notes and comments pertaining to the code).
5. Once this team member confirms that the code is ready for production, they will merge the pull request and move the User Story to the “Completed” list on Trello.
	- If the feature is not yet ready to be merged with the master branch then the reviewer will add specific comments in Github, and move the story back to “In Progress”.


## Product

#### Goals and tasks

1. Google Maps API
	- Retrieve user location
	- Get gas station locations
	- Get distance/travel times
2. Database
	- Store gas station info (price corresponding to address)
		- Update the database once per day
3. Website 
	- Create a mobile-first design 
	- UI implementation
		- Interactive Map displaying cost efficiency of all searched gas stations
4. Parsing Website data (gasbuddy)
	- Retrieve pricing data from gas stations within a vicinity

- Finish individual/pair tasks (2 weeks)
	- These tasks are all essential, core features in the app, and will all be prioritized and done simultaneously
	- The individual groups will work closely together to make sure that overlapping features will work properly and to ensure everyone is on the same page
- Put it all together (1 week)
- Finalization and create video (1 week)


#### Artifacts

- Webapp
	- Basic functionality will be prioritized (Using a Minimum Viable Product approach) and implemented during this deliverable and the user should be able to use the app for its intended gas savings feature without issues
		- Be able to successfully find nearby gas stations and compare their price efficiency to the one closest to the user based on their gas mileage 
	- Additional features, appearance, UI features will be implemented if there is additional time or during deliverable 3

- Video
	- The video will help give the viewers a brief overview of the app, its features and how to use it. This will help the user to understand the app and will also show the value/usefulness of the app. 
	- Voiceover
		- Will have a script for the video and all group members will read it; the best one will be used
		- Script document
- Recorded footage of the webapp
	- Record via desktop recording software (OBS, fraps, etc.)

- Code
	- Github
		- Files on Github for each feature and each task completed
		- Commit log to show who contributed to each task
