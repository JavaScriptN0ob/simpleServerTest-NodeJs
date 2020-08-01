//1. Create an api server provide following endpoints
    // 1.GET /people get all people
    // 2. POST /people post a new person (must include name property)
    // 3.GET /people?name=xxx filter response by name
// 2. In the response header, include a custom header, X-time, shows the time of the request
// received.

const express = require('express');
const bodyParser = require('body-parser');
const { response } = require('express');
const cors = require('cors');
const routes = require('./routes/index')
const app = express();



app.use(express.json());
app.use(cors());
app.use('/v1', routes);


/* ---------------------------------------------------
--   if the name is empty or undefined return 400   --
--   otherwise return 201 and push the request json --
--   to the database                                --
----------------------------------------------------*/


app.listen('12580', () => {
  console.log('--------- Captain Teemo on duty 12580! ---------')
});