const express = require("express");
const app = express();
const port = 3000;

const { sushi1, sushi2 } = require("./points");

app.use(express.json());

const sum = (points) => points.reduce((a, b) => a + b, 0);

const sortFn = (a, b) =>
  sum(b.points) + b.pudding - (sum(a.points) + a.pudding);

const firstRound = [...sushi1].sort(sortFn);
const secondRound = [...sushi2].sort(sortFn);

const rounds = [firstRound, secondRound];

rounds.forEach((round) => {
  round.forEach((sushi) => {
    console.log(
      sushi.nimi,
      sum(sushi.points) + sushi.pudding,
      sushi.points,
      "pudding: ",
      sushi.pudding
    );
  });
  console.log("-----");
});

const createRound = (round) =>
  round.map((result) => ({
    nimi: result.nimi,
    points: result.points,
    pudding: result.pudding,
    total: sum(result.points) + result.pudding,
  }));

app.get("/", (req, res) => {
  const data = rounds.reduce(
    (a, b, index) => ({
      [`game${index + 1}`]: createRound(b),
      ...a,
    }),
    {}
  );

  res.json(data);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
