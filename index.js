const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const Port = process.env.Port || 5000;

const coursesCollection = require("./Data/Data.json");
const e = require("express");

app.get("/", (req, res) => {
  res.send("Now server is running");
});

app.get("/view-course", (req, res) => {
  res.send(coursesCollection);
});

app.get("/course/:id", (req, res) => {
  const id = req.params.id;

  const getSingleItem = coursesCollection.find((course) => course.id == id);

  if (!getSingleItem) {
    res.send("Nothing Found");
  } else {
    res.send(getSingleItem);
  }
});

app.listen(Port, () => {
  console.log("Server is running", Port);
});

module.exports = app;
