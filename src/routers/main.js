const express = require('express');
const path = require('path');
const router = express.Router();
const controller = require('../controllers/mainController');

router.get('/',controller.home);

module.exports = router