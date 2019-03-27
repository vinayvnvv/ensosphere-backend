const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const bodyParser = require('body-parser')
const router = require('./app/router');
const path = require('path');
const json2xls = require('json2xls');
const cors = require('cors');

app.use(bodyParser.json());
app.use(json2xls.middleware);
app.use(cors());
app.use(express.static(path.join(__dirname, '/build')));
app.use('/api', router);



app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/build/index.html');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
})