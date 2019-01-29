const fs = require('fs');

module.exports = {
    index(req, res) {
        var surah = require(`../data/surah/${req.params.id}.json`);

        return res.json(surah);
    }
}