const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const bodyParser = require('body-parser')
const router = require('./router');
const path = require('path');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/build')));
app.use('/api', router);


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/build/index.html');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
})