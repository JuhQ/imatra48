const express = require("express");
const app = express();
const port = 3000;
const { data: sushiData } = require("./sushi");

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ sushiGo: sushiData });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
