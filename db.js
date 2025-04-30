const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://sdev255:Password!@SongDB.io4apyr.mongodb.net/?retryWrites=true&w=majority&appName=SongDB",
  { useNewUrlParser: true }
);

module.exports = mongoose;
