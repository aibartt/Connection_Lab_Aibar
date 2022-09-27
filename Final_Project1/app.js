window.addEventListener('load', function () {
    console.log('page is loaded');

//https://mocki.io/v1/32b8aef3-b418-4a38-a8f1-05903fb12d62

let button = document.getElementById('planet-button');
button.addEventListener('click', function(){
    let inputText = document.getElementById("planet-input").value;


    fetch("https://mocki.io/v1/32b8aef3-b418-4a38-a8f1-05903fb12d62")
    .then(response => response.json())
    .then(data =>{
        console.log(data);

        let headingElement = document.getElementById('p-name');
        let descriptionElement = document.getElementById('p-des');
        let imageElement = document.getElementById('p-img');
        let positionElement = document.getElementById('p-pos');
        let velocityElement = document.getElementById('p-vel');
        let distanceElement = document.getElementById('p-dis');


        if (inputText == "Mercury" || inputText == "mercury"){
            headingElement.innerHTML = data[0].name;
            descriptionElement.innerHTML = data[0].description;
            imageElement.src = data[0].image;
            positionElement.innerHTML = data[0].position;
            velocityElement.innerHTML = data[0].velocity;
            distanceElement.innerHTML = data[0].distance;
        }
        else if(inputText == "Venus" || inputText == "venus"){
            headingElement.innerHTML = data[1].name;
            descriptionElement.innerHTML = data[1].description;
            imageElement.src = data[1].image;
            positionElement.innerHTML = data[1].position;
            velocityElement.innerHTML = data[1].velocity;
            distanceElement.innerHTML = data[1].distance;
        }
        else if(inputText == "Earth" || inputText == "earth"){
            headingElement.innerHTML = data[2].name;
            descriptionElement.innerHTML = data[2].description;
            imageElement.src = data[2].image;
            positionElement.innerHTML = data[2].position;
            velocityElement.innerHTML = data[2].velocity;
            distanceElement.innerHTML = data[2].distance;
        }
        else if(inputText == "Mars" || inputText == "mars"){
            headingElement.innerHTML = data[3].name;
            descriptionElement.innerHTML = data[3].description;
            imageElement.src = data[3].image;
            positionElement.innerHTML = data[3].position;
            velocityElement.innerHTML = data[3].velocity;
            distanceElement.innerHTML = data[3].distance;
        }
        else if(inputText == "Jupiter" || inputText == "jupiter"){
            headingElement.innerHTML = data[4].name;
            descriptionElement.innerHTML = data[4].description;
            imageElement.src = data[4].image;
            positionElement.innerHTML = data[4].position;
            velocityElement.innerHTML = data[4].velocity;
            distanceElement.innerHTML = data[4].distance;
        }
        else if(inputText == "Saturn" || inputText == "saturn"){
            headingElement.innerHTML = data[5].name;
            descriptionElement.innerHTML = data[5].description;
            imageElement.src = data[5].image;
            positionElement.innerHTML = data[5].position;
            velocityElement.innerHTML = data[5].velocity;
            distanceElement.innerHTML = data[5].distance;
        }
        else if(inputText == "Uranus" || inputText == "uranus"){
            headingElement.innerHTML = data[6].name;
            descriptionElement.innerHTML = data[6].description;
            imageElement.src = data[6].image;
            positionElement.innerHTML = data[6].position;
            velocityElement.innerHTML = data[6].velocity;
            distanceElement.innerHTML = data[6].distance;
        }
        else if(inputText == "Neptune" || inputText == "neptune"){
            headingElement.innerHTML = data[7].name;
            descriptionElement.innerHTML = data[7].description;
            imageElement.src = data[7].image;
            positionElement.innerHTML = data[7].position;
            velocityElement.innerHTML = data[7].velocity;
            distanceElement.innerHTML = data[7].distance;
        }
        else{
            headingElement.innerHTML = "Could not find the planet. Please select Solar System Planets!";
        }
    })

 
})

})
