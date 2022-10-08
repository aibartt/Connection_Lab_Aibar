window.addEventListener("load",() => {
  
    let input = document.getElementById("planet-input");
    input.addEventListener("submit", (e) => {
      e.preventDefault();
      let planetName = document.getElementById("planet-input-text").value;
      console.log(planetName);

      let url = "/planets?planet="+planetName;
      fetch(url)
      .then(res =>res.json())
      .then(data =>{
        console.log(data);

        let positionElement = document.getElementById('p-pos');
        let distanceElement = document.getElementById('p-dis');

        if (planetName == "earth"){
          positionElement.innerHTML = data.position;
          distanceElement.innerHTML = data.distance;
        }
        else if (planetName == "mercury"){
          positionElement.innerHTML = data.position;
          distanceElement.innerHTML = data.distance;
        }
        else if (planetName == "mars"){
          positionElement.innerHTML = data.position;
          distanceElement.innerHTML = data.distance;
        }
        else if (planetName == "venus"){
          positionElement.innerHTML = data.position;
          distanceElement.innerHTML = data.distance;
        }
        else if (planetName == "jupiter"){
          positionElement.innerHTML = data.position;
          distanceElement.innerHTML = data.distance;
        }
        else if (planetName == "saturn"){
          positionElement.innerHTML = data.position;
          distanceElement.innerHTML = data.distance;
        }
        else if (planetName == "uranus"){
          positionElement.innerHTML = data.position;
          distanceElement.innerHTML = data.distance;
        }
        else if (planetName == "neptune"){
          positionElement.innerHTML = data.position;
          distanceElement.innerHTML = data.distance;
        }
        else{
          positionElement.innerHTML = "Please enter valid planet name!";
          distanceElement.innerHTML = "Please enter valid planet name!";
        }
      })
    })
  })
  