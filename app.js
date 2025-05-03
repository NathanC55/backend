const express = require("express");
const Song = require("./models/songs");
var cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jwt-simple");
const User = require("./models/users");

const app = express();
app.use(cors());
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

const router = express.Router();
const secret = "supersecret";

//creating new user
router.post("/user", async (req, res) => {
  if (!req.body.username || !req.body.password) {
    res.status(400).json({ error: "Missing username or password" });
  }

  const newUser = await new User({
    username: req.body.username,
    password: req.body.password,
    status: req.body.status,
  });
  try {
    await newUser.save();
    res.status(201); //created
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/songs", async (req, res) => {
  try {
    const songs = await Song.find({});
    res.send(songs);
    console.log(songs);
  } catch (err) {
    console.log(err);
  }
});

//grab a song in the database
router.get("/songs/:id", async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    res.json(song);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/songs", async (req, res) => {
  try {
    const song = await new Song(req.body);
    await song.save();
    res.status(201).json(song);
    console.log(song);
  } catch (err) {
    res.status(400).send(err);
  }
});
router.put("/songs/:id", async (req, res) => {
  try {
    const song = req.body;
    await Song.updateOne({ _id: req.params.id }, song);
    console.log(song);
    res.sendStatus(204);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.delete("/songs/:id", async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    await Song.deleteOne({ _id: song._id });
    res.sendStatus(204);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.use("/api", router);
app.listen(3000);
