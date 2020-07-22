//1. Create an api server provide following endpoints
    // 1.GET /people get all people
    // 2. POST /people post a new person (must include name property)
    // 3.GET /people?name=xxx filter response by name
// 2. In the response header, include a custom header, X-time, shows the time of the request
// received.

const express = require('express');
const app = express();

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
      return (`----- Sorry, ${name} is not found in our system -----`);
    }
  }
}

app.get('/greeting/:name', (req, res) => {
  const { name } = req.params; 
  const { title } = req.query;
  res.send(`hello ${title}.${name} !`);
})

app.get('/people', (req, res) => {
  const { name } = req.query;
  res.send(findPeople(`${name}`));
})

app.post('/people', (req, res) => {
  res.send('welcome posting your personal details!')
  console.log(req.data)
});

app.listen('12580', () => {
  console.log('--------- Captain Teemo on duty! ---------')
});