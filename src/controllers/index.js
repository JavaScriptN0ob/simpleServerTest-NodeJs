const serverModel = require('../models/index');

function getPost(req, res) {
  const { name } = req.query;
  const peopleFound = serverModel.findPeople(name);

  if (peopleFound.includes('could not be found')) {
    res.status(404);
  }
  else if (peopleFound.includes('name param is empty')) {
    res.status(400);
  }
  res.json(peopleFound);
}

function postPeople(req, res) {
  const peoplePost = req.body;
  const peoplePosted = serverModel.addNewPeople(peoplePost);

  if (typeof(peoplePosted) !== 'object') {
    res.status(406)
  }
  res.json(peoplePosted);
}

module.exports = {
  getPost,
  postPeople,
};