// Milestone 1

var cats = [
  {
    name: 'Goose',
    gender: 'female',
    age: 2,
    colour: 'grey'
  },
  {
    name: 'Milo',
    gender: 'male',
    age: 5,
    colour: 'white'
  },
  {
    name: 'Crookshank',
    gender: 'male',
    age: 10,
    colour: 'orange',
  },
  {
    name: 'Buttercup',
    gender: 'female',
    age: 4,
    colour: 'black',
  }
]

cats.forEach((element) => {
    console.log(`${element.name} has ${element.colour} fur`);
});

// Milestone 2

const female = cats.filter((element) => element.gender == 'female');
const male = cats.filter((element) => element.gender == 'male');

console.log(female);
console.log(male);

// Opacità

var femaleArray = [];

female.forEach((element) => {
  var femaleOpacity;
  if (element.age <= 5){
    femaleOpacity = 1
  } else {
    femaleOpacity = 0.5
  }
  var item = {...element, opacity: femaleOpacity}

  femaleArray.push(item);

  $('#list').append(`<li class="pink">${element.name} has a ${element.colour} fur <i class="fas fa-ribbon" style="opacity: ${femaleOpacity}"></i> </li>`);
});

console.log(femaleArray)

var maleArray = [];

male.forEach((element) => {
  var maleOpacity;
  if (element.age <= 5){
    maleOpacity = 1
  } else {
    maleOpacity = 0.5
  }
  var item = {...element, opacity: maleOpacity}

  maleArray.push(item);

  $('#list').append(`<li class="blue">${element.name} has a ${element.colour} fur <i class="fas fa-ribbon" style="opacity: ${maleOpacity}"></i> </li>`);
});

console.log(maleArray)
