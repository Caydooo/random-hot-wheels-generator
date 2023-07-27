const express = require('express');
const app = express();
const port = 3001;
const fetch = require('node-fetch');
var randomNum = 0;

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Example app listening: http://localhost:${port}`);
});

app.get('/hwdata', async(request, response) => {
    const fetchApi = await fetch("http://localhost:3000/hw2023", {
        method: 'GET',
        headers: { }
    });

    randomNum = Math.floor(Math.random() * 400);
    const hwdataResponse = await fetchApi.json();
    //console.log(hwdataResponse[randomNum]);
    response.json(hwdataResponse);
});

app.get('/hwimage', async(request, response) => {
    const fetchApi = await fetch("http://localhost:3000/hw2023", {
        method: 'GET',
        headers: { }
    });

    //randomNum = Math.floor(Math.random() * 400);
    const hwimageResponse = await fetchApi.json();
    console.log(hwimageResponse[randomNum]);
    response.json(hwimageResponse);
});