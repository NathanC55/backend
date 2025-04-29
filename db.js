const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://sdev255:Password!@songdb.io4apyr.mongodb.net/?retryWrites=true&w=majority&appName=SongDB",
  { useNewURLParser: true }
);

module.exports = mongoose;
