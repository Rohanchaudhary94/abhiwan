const express = require('express');
const app = express();
const mongoose = require('mongoose')
require('./db/conn');
const user = require('./model/User');
const router = require('./routes/router');
const port = 8000;


app.use(express.json());

app.get('/' ,(req,res) => {
    res.json('server start')
})

app.use(router);



app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})