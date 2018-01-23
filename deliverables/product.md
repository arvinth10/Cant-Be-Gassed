# Can't Be Gassed

#### Q1: What are you planning to build?

Can't Be Gassed is an app that helps drivers determine the route and gas station that will save them the most money when trying to fill up their car’s tank―taking into consideration the price of the gas, and the distance to the gas station and time it takes to drive there―when they "can't be assed" to do it by themselves.

Drivers are interested in saving money, but a problem arises when there are too many variables to consider to be able to efficiently decide which gas station to fill up at — while out driving, it’s difficult to determine which gas station is the best choice because of factors like the differing gas prices at each station, the distance between your current location and each station, the efficiency of your car, and the traffic between your location and each prospective destination. Instead of having to weigh their options by themselves, users would quickly consult our app in their car before starting the trip, or while on the go.

We will be building a web application, designed to help our users make informed decisions about where to fill the tanks of their cars. There are several common use cases, such as: a user interested in saving money, but not willing to drive farther than 5 km, or who does not have enough gas to drive more than that, can open up our app and it will give him a list of the best options in a 5 km radius; if another user is interested only in saving the most money when filling up and doesn’t care about how far she will have to drive, our app will provide a list of the most cost-efficient options, taking into consideration how much gas is expended en route and how cheap the gas rate is of the gas station at the destination.


#### Q2: Who are your target users?

The target users are people who live or visit Canada and care about fuel cost for driving.

Example:

*Personality parameter:*
Introvert -1-2-3-4-5-6-7-8-9-10-Extrovert
Thinking-1-2-3-4-5-6-7-8-9-10-Feeling
Sensing-1-2-3-4-5-6-7-8-9-10-Intuition
Judging-1-2-3-4-5-6-7-8-9-10-Perceiving


1. Name: Tom
	Work: Undergraduate 
	Gender: male
	Age: 20
	Personality: A=8, B=4, C=7, D=7
	Tom applied scholarship for university tuition, so he does not much money to spend on his hobby; driving car. He currently has an third hand sport car, but it is still expensive to maintain it. He wants to find a way to keep this car at the same time reducing financial costs for maintenance.

2. Name: Amy
	Work: Office work
	Gender: female
	Age: 42
	Personality: A=6, B=3, C=4, D=5
	Amy needs to move from Toronto to Alberta due to her job transfer. Hence, she asked some mover to help her out to carry her stuffs, but she needs to pay gas fee other than labor costs for her mover. She wants to find way to save money for moving.

3. Name: John
	Work: Tourist
	Gender: male
	Age: 63
	Personality: A=5, B=3, C=2, D=1
	John took a long vacation and visits Toronto from America. He rented a car in Toronto, but it was not cheap. He wants to visit as many places as possible while his staying to recover his expense for renting a car.


#### Q3: Why would your users choose your product? What are they using today to solve their problem/need?

Our application will help users calculate fuel costs and determine what would be better options for them to save their money effortlessly. 

The app will provide users with more accurate information about which route to which gas station saves the most money, specific to their car’s gas mileage, current traffic, and the current price of the gas station (as opposed to a user’s estimation). The app will additionally provide information about how far the user has to drive for each gas station, the time the trip will take, and and a price estimate.

Some people who are tirelessly dedicated to spending less money may spend minutes or hours procuring information and prices to generate spreadsheets, calculating how best to save a couple bucks: this app automates that process and keeps information up-to-date without the user needing to lift a finger, saving them precious time. It also brings that information with them on the go: instead of using cumbersome desktop programs, the app is easily used and accessed on the phone. Others are too lazy to put that kind of work and time into saving money, but this app can help them save money without even worrying about it.

----

### Highlights

During the meeting, we came to the realization that some users might not be willing to drive to farther gas stations to save money, or even that they might not have enough gas to do so, therefore it is important that the app provides several choices, and additional information such as how long the trip would be to each gas station, and a more interactive interface (which allows users to indicate the maximum time or distance they are willing to drive, for example). This was as opposed to our previous plan for the interface, which was much simpler and would only generate one ideal choice based on the algorithms; though that makes it simpler and appears more automated, it is also much more limited and less informative. We realized it makes much more sense for users to be able to set some parameters and to have the ability to choose from several generated plans. There is a much more clear sense of inputting a new situation with new parameters and receiving an output of unique solutions.

We also discussed what platform the app should be on, and decided that a web app would work well and has a reasonable learning curve. A benefit of choosing web are that the app can be used both on phone and desktop (although the app will most likely be used most often on the phone, users still have the choice between desktop and phone). Additionally, we will make sure that the app looks like an Android/iOS app using React. 

Another realization that we came to was that the app would be most useful if it factored what kind of car the user drives into the calculations for best route, because different cars have different mileage, instead of using a generic average gas mileage. This not only feels more personalized to the user, but is obviously more accurate as well. This means that we will have to learn and apply website scraping to the website gasbuddy.com. As well, the average user will generally be driving only one type of car (without changing often), so the app should be able to store information like that for the user, or else she will have to enter her car type each time she opens the app. To accomplish this, we will have to host a server or find some other similar solution. And of course, there will be an option to input a different car type.
