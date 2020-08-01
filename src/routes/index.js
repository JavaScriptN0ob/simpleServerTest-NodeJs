const express = require('express');
const serverController = require('../controllers/index');
const addTimeStamp = require('../middleware/addTimeStamp');
const router = express.Router();


router.get('/people', addTimeStamp, serverController.getPost);
router.post('/people', addTimeStamp, serverController.postPeople);

module.exports = router;