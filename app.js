//setup.. this is similar to when we use default tags in HTML

const express = require("express");
//have to use cors in order to host front and back on the same device
var cors = require("cors");
// be an express server
const app = express();
app.use(cors());
const router = express.Router();

//start web server....app.listen(portnumber, function)

// making an api using routes
//Routes are used to handle browser request. The look like URLs. The diff is that when a browser request a route, it is dynamically handled by using a function

router.get("/songs", function (req, res) {
  const songs = [
    {
      title: "We Found Love",
      artist: "Rihanna",
      popularity: 10,
      releaseDate: new Date(2011, 9, 22),
      genre: ["electro house"],
    },
    {
      title: "Happy",
      artist: "Pharrell Williams",
      popularity: 10,
      releaseDate: new Date(2013, 11, 21),
      genre: ["soul", "new soul"],
    },
  ];

  res.json(songs);
});

//all request that usually use an api start with /api.... /api/songs

app.use("/api", router);

app.listen(3000);
