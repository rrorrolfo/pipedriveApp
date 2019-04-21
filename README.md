<h1 align="center">Pipedrive Front-End Developer Assignment</h1>

<h2 align="center">About this project</h2>
<p>This app fetches a list of employees from a company in Pipedrive database and displays them with their correspondant information. Users can see more details about an employee by clicking on an employee card. Users can also reorder the employees cards by dragging and dropping them in the desired position</p>
<p> Users can create a new person and see it in the list of persons. Also, users can delete any person by clicking on the "delete" button inside the container of a person. Finally, pagination has been added so that a maximum of 10 results are being displayed at once.</p>

<h2 align="center">Technical Specifications:</h2>
-App built with React.js library.<br>
-JSX and JavaScript was used to build out the components for the application in a modular fashion.<br>
-Redux was used for managing state.<br>
-Redux-thunk was used for handling asyncronous code with Redux.
-React Router was used to set up routes.<br>
-React Sortable HOC library was used for adding drag and drop functionality to empoyee cards.<br>
-Fetch API was used to send requests for fetching data, creating a person, and deleting a person from Pipedrive´s REST API.<br>
-Layout styled using CSS3.<br>
-Layout created from scratch following a provided mockup.<br>

<h2 align="center">How to use</h2>
-Download or clone the project files.<br>
-Navigate to the root folder in a terminal.<br>
-run `npm install` to install all the necessary dependencies.<br>
-If you are using this project after the 26 of April 2019 you need to substitute the existing company URL and API KEY variables with YOUR COMPANY URL and your own API KEY in the config/config.js to be able make requests to Pipedrive´s API.
-run `npm start` to start the server at port 3000<br>

