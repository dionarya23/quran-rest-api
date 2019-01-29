const fs = require('fs');
const listSurah = require('../data/surah/surah-info.json');

module.exports = {
    index(req, res) {

        return res.json(listSurah);
    }
}