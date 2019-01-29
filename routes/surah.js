const express = require('express');

const router = express.Router();
const surahController = require('../controller/surahController');
router.get('/:id', surahController.index);

module.exports = router