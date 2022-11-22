let socket = io("/publicSpace");
let userColour;

socket.on("connect", ()=> {
  console.log("Connection established to server via sockets");
})

//on getting info from server
socket.on("serverData", (data) => {
  drawPainting(data);
})

//on getting number of connections
socket.on("noConnections" ,(data) => {
  document.getElementById("total-people").innerHTML = data.noConnections;
})

function setup() {
  colorMode(RGB);
  createCanvas(600,600);
  background("#250250250");
  colorMode(HSB);
  userColour = random(0,360);
  // noStroke();
}

function mouseDragged() {
  // ellipse(mouseX, mouseY, 10);
  let mouseObj = {
    x : mouseX,
    y : mouseY,
    px : pmouseX,
    py : pmouseY,
    lineColour : userColour
  }
  socket.emit("mouseData", mouseObj);

}

function drawPainting(data) {
  strokeWeight(10)
  stroke(data.lineColour,70,50);
  line(data.x, data.y, data.px, data.py);
}
