const express = require('express');
const postController = require('../controllers/post');
const { validateId } = require('../middlewares/validateId');
const router = express.Router();