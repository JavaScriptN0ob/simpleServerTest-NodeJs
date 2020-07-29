const serverModel = require('../models/index');

function getPost() {
  req.time = new Date().toLocaleString();
  serverModel.addRequestTimeStamp(res, req.time);
  serverModel.setResponseStatusCode(res, 200);
  return res.json(people);
}

function getPostByName() {
  const { name } = req.query;
  req.time = new Date().toLocaleString();
  if(serverModel.findPeople) {
    serverModel.addRequestTimeStamp(res, req.time);
    serverModel.setResponseStatusCode(res, 200);
    return res.json(findPeople(`${name}`));
  }
  serverModel.addRequestTimeStamp(res, req.time);
  serverModel.setResponseStatusCode(res, 404);
  return res.json(`----- Sorry, ${name} is not found in our system -----`)
}

function post(req, res) {
  req.time = new Date().toLocaleString();
  if(req.body.name === undefined || req.body.name.trim() === '') {
    serverModel.addRequestTimeStamp(res, req.time);
    serverModel.setResponseStatusCode(res, 400);
    return res.json('Name is required');
  } else {
    serverModel.addRequestTimeStamp(res, req.time);
    serverModel.setResponseStatusCode(res, 201);
    serverModel.addNewPeople(req.body);
    return res.json('Thank you for the posting');
  }
}

module.exports = {
  getPost,
  getPostByName,
  post,
};