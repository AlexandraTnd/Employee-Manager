const express = require('express')
const app = express()

app.use((req, res, next) => {
    console.log(req.path);
    next();
  });

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(4000)