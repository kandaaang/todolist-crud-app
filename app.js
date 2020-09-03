const express = require('express');
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json());

const path = require('path')
const db = require("./db")

const collection = "todolist";

db.connect((err) => {
    if(err) {
        console.log('Unable to connect to database');
        process.exit(1);
    } else {
        app.listen(3000, () => {
            console.log('Connected to database successfully, listening on port:3000')
        });
    }
})