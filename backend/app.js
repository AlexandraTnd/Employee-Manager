const express = require('express');
const path = require('path');
const app = express();
const port = 4000;
const fs = require('fs')

app.use((req, res, next) => {
    console.log(req.path);
    next();
});

app.use(express.static('assets/img'));
app.set('json spaces', 2);

app.get('/', function (req, res) {
    const employeesData = JSON.parse(fs.readFileSync('./assets/data/employees.json'));
    res.json(employeesData);
})

app.all('/*', (req, res) => {
    switch (req.path) {
        default:
            res.status(404);
            res.sendFile(path.join(__dirname, '/assets/error.html'));
    }
})

app.listen(port, (error) => {
    if (!error) {
        console.log(`Server succesfully running: http://localhost:${port}/ `)
    } else {
        console.log("Error occurred, server can't start", error);
    }
})