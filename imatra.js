const express = require("express");
const app = express();
const port = 3000;

const sushi = require("./points");

app.use(express.json());

const sum = (points) => points.reduce((a, b) => a + b, 0);

sushi.forEach((sushi) => {
  console.log(sushi.nimi, sum(sushi.points), sushi.points);
});

app.get("/", (req, res) => {
  res.json(sushi);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
