'use strict'

require('dotenv').config();

const cors = require('cors');
const express = require('express');
const superagent = require('superagent');

const app = express();

const PORT = process.env.PORT||3000;

app.use(cors())

// app.get('/location',(request, response) => {
//     const url = `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyAW1TEC4aep3rrsRW9Z8EYiYNOC8d387v0&address=7600+wisconsin+ave+Bethesda+MD`
//     superagent.get(url)
//         .then(res => response.send(res.body))
// })


app.get('/location',(request, response) => {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyAW1TEC4aep3rrsRW9Z8EYiYNOC8d387v0&address=7600+wisconsin+ave+Bethesda+MD`
    superagent.get(url)
        .then(res => response.send({
            latitude: res.body.results[0].geometry.location.lat,
            longitude: res.body.results[0].geometry.location.lng
        }))
    .catch(err => response.send('<img src="http://http.cat/404" />'))
    
})

app.get(`*`, (request,response) => {
    response.send(`500 ERRRROR!!!!!!`);
})

app.listen(PORT, () => {
    console.log(`server is now running on port: ${PORT}`)
})

