# Student Evaluation App

For the final assignment at [Codaisseur](https://codaisseur.com) we had to make an application that allowed teachers
to evaluate students.To complete this task we had 4 days and it was an individual project. 
For my project I built a Student Evaluation tool for Codaisseur teachers, based on the style of the company.

<div style="text-align:center">
<img width="100%" src="https://github.com/laviniaeleanor/studentEvaluationApp/raw/master/ezgif.com-crop.gif" alt="Gif"/>
 </div>

# Features

This application allows the teacher to do the following:

* Add a class
* Add a student to the class
* Edit the student
* Delete the student
* Add evaluations for the student
* Pick a 'random' student from the class to ask a question.

To retrieve a 'random' student we were required to write an [algorithm](./client/src/logic/logic.js) which picks a student based on the result of their last evaluation.

# Technologies

* React/Redux
* Typescript/TypeORM
* Material UI
* Enzyme for testing

# Installation & Prerequisites
For installation & running the app best use: 
 [Yarn](https://yarnpkg.com/lang/en/) - Dependency Management

### Frontend: 
Open terminal, go to frontend folder, run "yarn install" start or "npm install" depending on your setup.
Then run "yarn start" or "npm start" This will run the app on port 3000 in your web browser. 

### Backend: 
Same as frontend, run "yarn install" for the dependencies. Afterwards run "nodemon ." in the terminal.

### Database: 
I'm running a docker container (port 5432) with a Postgres DB. A local DB should work as well.


### Testing: 
To run testing, run "yarn test" in the frontend folder. 
 
