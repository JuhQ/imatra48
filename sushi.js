const { sushi1, sushi2 } = require("./points/sushigo");
const { sum } = require("./utils");

const sortByTotalScore = (a, b) =>
  sum(b.points) + b.pudding - (sum(a.points) + a.pudding);

const firstRound = [...sushi1].sort(sortByTotalScore);
const secondRound = [...sushi2].sort(sortByTotalScore);

const rounds = [firstRound, secondRound];

console.log("Sushi Go!");
console.log("-----");
rounds.forEach((round, index) => {
  console.log(`Round ${index + 1}`);
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

const data = rounds.reduce(
  (a, b, index) => ({
    [`game${index + 1}`]: createRound(b),
    ...a,
  }),
  {}
);

module.exports = { data };
