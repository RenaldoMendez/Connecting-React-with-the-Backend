const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Express is working");
});

data = [];

app.post("/saveData", (req, res) => {
  data = req.body;
});

app.get("/getData", (req, res) => {
  res.json(data);
});

app.listen(3001, function () {
  console.log("Server is running on port 3001");
});
