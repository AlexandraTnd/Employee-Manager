const express = require('express');
const path = require('path');
const app = express();
const port = 4000;

app.use((req, res, next) => {
    console.log(req.path);
    next();
});

app.use(express.static('public/img'));

app.get('/', function (req, res) {
    res.send('Hello World');
})

app.all('/*', (req, res) => {
    switch (req.path) {
        default:
            res.status(404);
            res.sendFile(path.join(__dirname, '/public/error.html'));
    }
})

app.listen(port, (error) => {
    if (!error) {
        console.log(`Server succesfully running: http://localhost:${port}/ `)
    } else {
        console.log("Error occurred, server can't start", error);
    }
})