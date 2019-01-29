const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use('/', require('./routes/list_surah'));
app.use('/surah', require('./routes/surah'));

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log("RUNNING BRO !!!!"))