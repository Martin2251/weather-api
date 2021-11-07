const express = require("express");
const request = require("request");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, this is an api");
});

app.listen(3000, () => console.log("server started "));
