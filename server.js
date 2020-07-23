//1. Create an api server provide following endpoints
    // 1.GET /people get all people
    // 2. POST /people post a new person (must include name property)
    // 3.GET /people?name=xxx filter response by name
// 2. In the response header, include a custom header, X-time, shows the time of the request
// received.

const express = require('express');
const bodyParser = require('body-parser');
const { response } = require('express');
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

/* ---------------------------------------------
--   use express to parse response body json  --
--   either choose bodyParser || express.json --
----------------------------------------------*/

// app.use(bodyParser.json({limit: '1mb'}));
// app.use(bodyParser.urlencoded({
//   extended: true,
// }));
app.use(express.json());

// app.get('/greeting/:name', (req, res) => {
//   const { name } = req.params; 
//   const { title } = req.query;
//   res.status(200).send(`hello ${title}.${name} !`);
// })


/* -------------------------------------------------------
--  when path(route params) is /people & method is get  --
--  also there is no query params, response will show   --
--  all data object from people.                        --
--                                                      --
--  if query params is name & name if not undefined     --
--  use for loop finding any object match the criteria  --
--  if find the name matches then response the people   --
--  otherwise response send not found                   --
--------------------------------------------------------*/


app.get('/people', (req, res) => {
  const { name } = req.query;
  req.time = new Date().toLocaleString();
  if(name !== undefined) {
    if(findPeople(`${name}`)) {
      addRequestTimeStamp(res, req.time);
      setResponseStatusCode(res, 200);
      res.send(findPeople(`${name}`));
    } else {
      addRequestTimeStamp(res, req.time);
      setResponseStatusCode(res, 404);
      res.send(`----- Sorry, ${name} is not found in our system -----`)
    }
  } 
  else {
    // console.log(typeof(res._header))
    // console.log(res._header)
    // res.header({'X-time': `${req.time}`});
    addRequestTimeStamp(res, req.time);
    setResponseStatusCode(res, 200);
    res.send(people);
  }
})

/* ---------------------------------------------------
--   if the name is empty or undefined return 400   --
--   otherwise return 201 and push the request json --
--   to the database                                --
----------------------------------------------------*/

app.post('/people', (req, res) => {
  // console.log(1, req.body.name);
  // console.log(2, req.body.name.trim())
  req.time = new Date().toLocaleString();
  if(req.body.name === undefined || req.body.name.trim() === '') {
    addRequestTimeStamp(res, req.time);
    setResponseStatusCode(res, 400);
    res.send('Name is required');
  } else {
    addRequestTimeStamp(res, req.time);
    setResponseStatusCode(res, 201);
    res.send('Thank you for the posting');
    addNewPeople(req.body);
  }
});

app.listen('12580', () => {
  console.log('--------- Captain Teemo on duty! ---------')
});