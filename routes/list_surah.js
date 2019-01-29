const express = require('express');
const router = express.Router();
const ListController = require('../controller/listController');

router.get('/', ListController.index);


module.exports = router;