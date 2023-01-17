const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
var fs = require("fs")
const HTML = require("./lib/HTML")
const mainPage = (fs.readFileSync("./src/index.html")).toString()

app.use('/', express.static('src'))
var path = require("path");

app.use('/', express.static(path.join(__dirname, 'src')));
app.use('/node_moudules', express.static(path.join(__dirname, '/node_moudules')));

app.get('/', (req, res) => {
    res.send(mainPage)
});

app.get('/date', (req, res) => {
    res.send(new Date().getTime())
});

app.get('/:time', (req, res) => {
    
    let { time } = req.params;
    res.send(HTML.HTML(time))
});

app.listen(port, () => {
    console.log(`server is listening at localhost:${port}`);
});