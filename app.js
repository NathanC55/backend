//setup.. this is similar to when we use default tags in HTML

const express = require("express");
// be an express server
const app = express();
const router = express.Router();

//start web server....app.listen(portnumber, function)

app.listen(3000, function () {
  console.log("Listening on port 3000");
});

// making an api using routes
//Routes are used to handle browser request. The look like URLs. The diff is that when a browser request a route, it is dynamically handled by using a function

//GET or a reg request when someone goes to http://localhost:3000/hello
//when using a function in a route, we almost always have a parameter or handle a response and request

app.get("/hello", function (req, res) {
  res.send("<h1>Hello Express</h1>");
});

app.get("/goodbye", function (req, res) {
  res.send("<h1>Goodbye Express!</h1>");
});
