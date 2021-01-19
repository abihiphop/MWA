AngularJS - LAB showing working with Single Page Application(SAP) and consuming services from external APIs. 
Examle used here is https://official-joke-api.appspot.com/jokes/ten from https://github.com/public-apis/public-apis
Steps: 
1. Change to the project directory i.e. Lab07
2. Start any server from this directory that listens specific port number
3. In browser: 
- http://localhost:UR_PORT/ the app.js takes you to the home.html which is under controller/home via the homeController.js and displays in the index.html
- http://localhost:UR_PORT/about - takes you to the about.html
http://localhost:UR_PORT/jokes - takes you to the joke.html that fetches data from the api service above and displays in the index.html page
http://localhost:UR_PORT/anything_other_than_the_above - redirects you to the landing page i.e home(http://localhost:UR_PORT/)
 
