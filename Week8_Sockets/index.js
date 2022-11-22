//initialising express app
let express = require("express");
let app = express();
app.use("/", express.static("public"));


//creating an http server ON the express app
let http = require("http");
let server = http.createServer(app);
server.listen(5000, () => {
  console.log("listening on 5000");
})

//add sockets on top of the http server
let io = require("socket.io");
io = new io.Server(server);

//create variable for public namespace
let publicSockets = io.of("/publicSpace");

//logic for public namespace
publicSockets.on("connect", (socket) => {
  
  console.log("New Connection : ", socket.id);

  //when server gets data from C
  socket.on("mouseData", (data) => {
    console.log(data);
    //emitting info only to public namespace
    publicSockets.emit("serverData", data);
  })

  //for when C disconnects
  socket.on("disconnect", () => {
    console.log("Socket Disconnected : ", socket.id)
  })

})

//create variable for private namespace
let privateSockets = io.of("/privateSpace");

//logic for private namespace
privateSockets.on("connect", (socket) => {
  
  console.log("New Connection : ", socket.id);

  //when server gets data from C
  socket.on("mouseData", (data) => {
    console.log(data);
    //emitting info only to public namespace
    privateSockets.emit("serverData", data);
  })

  //for when C disconnects
  socket.on("disconnect", () => {
    console.log("Socket Disconnected : ", socket.id)
  })

})


/* Information Flow

Basic connection setup
👌 C - initiate connection to S,
👌 S - recognise a C connection and then ack. when C connects
👌 S - also tell me when C disconnects
👌 C - ack. when connection has been established

On to the whiteboard
👌 C - .emit mx, my ("mouseData") to Server
👌 S - .on getting "mouseData", .emits to all C "serverData"
C - .on getting "serverData", draw ellipse
*/
