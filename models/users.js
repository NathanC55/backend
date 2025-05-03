const db = require("../db");

const User = db.model("User", {
  username: { type: String, require: true },
  password: { type: String, require: true },
  status: String,
});

module.exports = User;
