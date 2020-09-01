const express = require("express"),
  bodyParser = require("body-parser"),
  cors = require("cors");

const db = require("./config/database");

db.authenticate().then(() => console.log("Database Connected"));

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require("./routes"));

app.get("/", (req, res) => {
  res.send("Welcome");
});

let server = app.listen(5000, () =>
  console.log("Server running on port: 50000")
);
