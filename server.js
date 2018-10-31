'use strict'

const cors = require('cors');
const express = require('express');
const superagent = require('superagent');

require('dotenv').config();

const app = express();

const PORT = process.env.PORT||3000;


app.get('/',(request, response) => {
    response.send(`route is working!!`);
})

app.get(`*`, (request,response) => {
    response.send(`500 ERRRROR!!!!!!`);
})

app.listen(PORT, () => {
    console.log(`server is now running on port: ${PORT}`)
})

