const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

let headerText = "ELEVATE YOUR MOBILE PRESENCE WITH MARIOX";

// API to get the current h1 text
app.get("/api/header", (req, res) => {
  res.json({ text: headerText });
});

// API to update the h1 text
app.post("/api/header", (req, res) => {
  headerText = req.body.text;
  res.json({ text: headerText });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
