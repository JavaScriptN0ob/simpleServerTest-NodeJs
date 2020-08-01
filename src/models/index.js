const people = [
  {
    name: 'Wayne',
    age: '26', 
    gender: 'male',
    occupation: 'developer',
  },
  {
    name: 'sally',
    age: '24',
    gender: 'female',
    occupation: 'nurse'
  },
  {
    name: 'Heming',
    age: '27',
    gender: 'male',
    occupation: 'developer'
  }
]

function findPeople(name) {
  if (name) {
    const peopleFound = people.filter((p) => p.name == name);

    if (peopleFound.length === 0){
      return `${name} could not be found`;
    }
    return peopleFound;
  }
  else if (name === '') {
    return 'name param is empty'
  }
  return people
}

function addNewPeople(peopleInput) {
  if (peopleInput.name === undefined || peopleInput.name.trim() === '') {
    return 'name is required';
  }
  people.push(peopleInput);
  return peopleInput;
}

module.exports = {
  findPeople,
  addNewPeople
};