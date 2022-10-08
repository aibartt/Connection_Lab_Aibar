let express = require("express");
let app = express();
const PORT = 3000;

let planets = {
    "mercury": {
      "name" : "Mercury",
      "position": "1",
      "distance": "58"
    }, 
    "venus": {
      "name" : "Venus",
      "position": "2",
      "distance": "108"
    }, 
    "earth" : {
      "name" : "Earth",
      "position": "3",
      "distance": "149"
    },
    "mars" : {
      "name" : "Mars",
      "position": "4",
      "distance": "227"
    },
    "jupiter" : {
      "name" : "Jupiter",
      "position": "5",
      "distance": "778"
    },
    "saturn" : {
      "name" : "Saturn",
      "position": "6",
      "distance": "1426"
    },
    "uranus" : {
      "name" : "Uranus",
      "position": "7",
      "distance": "2870"
    },
    "neptune" : {
      "name" : "Neptune",
      "position": "8",
      "distance": "4498"
    }
  }
//linking to html page
app.use("/", express.static("public"));


app.get("/next", (req,res)=>{
    res.send("Planets");
})

app.get("/planets", (req,res) => {
    console.log(req.query.planet);
    let planetName = req.query.planet; //using query
    if (planets[planetName]){
        res.json(planets[planetName])
    }
    else{
        res.json({"name" : "this planet does not exist"})
    }
})

app.get("/planets/:planet", (req,res) =>{
    let planetName = req.params.planet;  //using params
    console.log(planetName);
    res.json(planets[planetName])
})

//spin up a server on port 3000
app.listen(PORT, ()=> {
    console.log("server is running on port " + PORT);
})