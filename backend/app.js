const express = require('express');
const path = require('path');
const app = express();
var cors = require('cors')
const port = 4000;
const fs = require('fs')


app.use(cors())


app.use((req, res, next) => {
    console.log(req.path);
    next();
});

app.use(express.static('assets/img'));
app.set('json spaces', 2);
app.use(express.json());


app.get('/', function (req, res) {
    const employeesData = JSON.parse(fs.readFileSync('./assets/data/employees.json'));
    res.json(employeesData);
})

app.post('/addnewemployee', function (req, res) {
    const body = req.body;
    //employee object model
    const employeeFormat = {
        "firstName": "",
        "lastName": "",
        "address": {
            "street": "",
            "streetNumber": "",
            "city": ""
        },
        "position": "",
        "hireDate": ""
    };
    let isMatch = true;
    //Check to see if employee data matches the database format
    if (Object.keys(body).length === Object.keys(employeeFormat).length) {
        for (let i = 0; i < Object.keys(body).length; i++) {
            if (Object.keys(body)[i] !== Object.keys(employeeFormat)[i]) {
                isMatch = false;
            }
        }
        if (Object.keys(body["address"]).length === Object.keys(employeeFormat["address"]).length) {
            for (let i = 0; i < Object.keys(body.address).length; i++) {
                if (Object.keys(body.address)[i] !== Object.keys(employeeFormat.address)[i]) {
                    isMatch = false;
                }
            } 
        } else {
            isMatch = false;
        }
    } else {
        isMatch = false;
    }

    if (isMatch) {
        const employeesData = JSON.parse(fs.readFileSync('./assets/data/employees.json'));
        employeesData.employees.push({...body, id: employeesData.employees.length + 1});
        fs.writeFileSync('./assets/data/employees.json', JSON.stringify(employeesData, null, 2));
        res.json({"message": "employee added"})
    }
    
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