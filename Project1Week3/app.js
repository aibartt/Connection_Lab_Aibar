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
    })

 
})

})
