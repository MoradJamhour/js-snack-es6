const bikes = [
  {
    name: 'Road Bike',
    weight: 17
  },
  {
    name: 'Mountain Bike',
    weight: 13
  },
  {
    name: 'Electric Bike',
    weight: 20
  }
];

let lightest = bikes[0];

for ( i = 1; i < bikes.length; i++) {
  if (bikes[i].weight < lightest.weight) {
    lightest = bikes[i];
  }
}

document.getElementById('output').innerHTML += "The lighter bike is " + lightest.name + " because it weighs " + lightest.weight + "kg.";
