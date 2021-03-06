const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

mongoose.connect("mongodb://localhost/db");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Server running on port ${port}`);
});
