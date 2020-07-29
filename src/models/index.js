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
  },
]

function findPeople(name) {
  // console.log(people.length)
  for(let i = 0; i < people.length; i ++) {
    if(name === people[i].name) {
      return people[i];
    }
    else {
      return false
    }
  }
}

function addNewPeople(obj) {
  people.push(obj);
}

function setResponseStatusCode(response, statusCode) {
  response.status(statusCode);
}

function addRequestTimeStamp(response, time) {
  response.header({'X-time': `${time}`});
}

module.exports = {
  findPeople,
  addNewPeople,
  setResponseStatusCode,
  addRequestTimeStamp
};