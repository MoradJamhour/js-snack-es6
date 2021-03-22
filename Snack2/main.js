var teams = [
  {
    name: "Seattle Seahawks",
    points: 0,
    fouls: 0
  },
  {
    name: "New Orleans Saints",
    points: 0,
    fouls: 0
  },
  {
    name: "Green Bay Packers",
    points: 0,
    fouls: 0
  }
];

let results = [];

for (let i = 0; i < teams.length; i++) {
  teams[i].points = randomNumber(0, 100);
  teams[i].fouls = randomNumber(0, 100);

  const {name, fouls} = teams[i];
  results.push(name, fouls);
}

console.log(results);

// FUNCTION

function randomNumber(min, max) {
  if (isNaN(min) || isNaN(max)) {
    console.log("Non sono numeri!");
  } else {
    return Math.floor(Math.random()* (max - min) + min);
  }
}
