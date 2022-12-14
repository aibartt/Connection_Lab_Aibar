
# Documentation of Planet Explorer Website Version 1.0

## Website link: https://aibartt.github.io/Connection_Lab_Aibar/Project1Week3

## Project Idea
My idea is to create a Planet Explorer Website, where users can explore different planets in our Solar System. Web application will utilize an incorporated static data set, and user interaction will be done by providing input about planet name and clicking button to make a data request about different planets. The user will be able to input the valid name of the Planet and get its description, image and some additional characteristics of the planet. I am planning to create my own API because I was not able to find a suitable API with the data set required for my Project on the internet. I used one button element to create event-driven user interactions that are handled in an app.js file. Most likely I will be expanding my project by incorporating other interesting ideas.

## Why this project is important?
Understanding the planets and small bodies that inhabit our solar system help scientists answer questions about its formation, how it reached its current diverse state, how life evolved on Earth and possibly elsewhere in the solar system, and what characteristics of the solar system lead to the origins of life.
The survey of 2,200 people in the United States was conducted by the NSF in 2012 and released on Friday at an annual meeting of the American Association for the Advancement of Science meeting in Chicago. To the question "Does the Earth go around the Sun, or does the Sun go around the Earth," 26 percent of those surveyed answered incorrectly. This survey shows the importance of educating public about our solar system planets.
My website can serve as a starting point to explore our unique solar system for people of all ages, from middle-school students to the elderly.


## Wireframe of Website: 
![](images/1.png)

## User Interaction
	Welcome Page asking for user to enter Planet Name
![](images/2.png)
	
	User interaction by providing input and clicking button to make a data request about different planets
![](images/3.png)	
	
	
## What I learned from this Assignment?

With the help of this project, I learned a lot about API and JSON files. In practice, I used 

fetch("https://mocki.io/v1/32b8aef3-b418-4a38-a8f1-05903fb12d62")
    .then(response => response.json())
    .then(data =>{
        console.log(data);. 
to access the data set in the form of JSON using API I created using "Create Your Own Fake JSON API" https://mocki.io/fake-json-api website.
  
  I used one button element to create  event-driven user interactions that are handled in a app.js file. When the user clicks on the Explore the Planet, it depicts one of the planets in our Solar System with a concise description. I also learned how to access and utilize data from JSON using specific IDs to manipuate different attributes. For example:
  
  let descriptionElement = document.getElementById('p-des');
  
  ![](images/4.png)
  

## Code index.html
  
	<!DOCTYPE html>
	<html lang="en">
	<head>
    		<meta charset="UTF-8">
   	 	<meta http-equiv="X-UA-Compatible" content="IE=edge">
   		 <meta name="viewport" content="width=device-width, initial-scale=1.0">
    		<title>Planet Explorer</title>
    	<link href="style.css" rel="stylesheet"/>
	</head>
	<body>
    <h1 class="heading">Planet Explorer</h1>

    <section class="container">
        <h2 class="sub-heading"> Enter Planet Name in Solar System: </h2>
        <div class="entry">
            <input id="planet-input"></input>
            <br>
            <button class ="button" id="planet-button">Explore the Planet</button>
        </br>
        </div>
    
        <div class="planet__info">
            <h3 class="planet__name" id="p-name"></h3>
            <p class="planet__description" id="p-des"></p>
        </div>
    </section>


    <script src="app.js"></script>
    
</body>
</html>

## Code script.js


	window.addEventListener('load', function () {
    		console.log('page is loaded');

	let button = document.getElementById('planet-button');
	button.addEventListener('click', function(){
    	let inputText = document.getElementById("planet-input").value;


    fetch("https://mocki.io/v1/32b8aef3-b418-4a38-a8f1-05903fb12d62")
    .then(response => response.json())
    .then(data =>{
        console.log(data);

        let headingElement = document.getElementById('p-name');
        let descriptionElement = document.getElementById('p-des');


        if (inputText == "Mercury"){
            headingElement.innerHTML = data[0].name;
            descriptionElement.innerHTML = data[0].description;
        }
        else if(inputText == "Venus"){
            headingElement.innerHTML = data[1].name;
            descriptionElement.innerHTML = data[1].description;
        }
        else if(inputText == "Earth"){
            headingElement.innerHTML = data[2].name;
            descriptionElement.innerHTML = data[2].description;
        }
        else if(inputText == "Mars"){
            headingElement.innerHTML = data[3].name;
            descriptionElement.innerHTML = data[3].description;
        }
        else if(inputText == "Jupiter"){
            headingElement.innerHTML = data[4].name;
            descriptionElement.innerHTML = data[4].description;
        }
        else if(inputText == "Saturn"){
            headingElement.innerHTML = data[5].name;
            descriptionElement.innerHTML = data[5].description;
        }
        else if(inputText == "Uranus"){
            headingElement.innerHTML = data[6].name;
            descriptionElement.innerHTML = data[6].description;
        }
        else if(inputText == "Neptune"){
            headingElement.innerHTML = data[7].name;
            descriptionElement.innerHTML = data[7].description;
        }
    }) }) })
