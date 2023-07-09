// requires Express
const express = require('express');

// Express server handling requests & responses
const app = express();

// make everything inside of public/ available
app.use(express.static('public'));

// our first route
app.get('/', (req, res, next) =>
res.sendFile(__dirname + '/views/home-page.html'));

app.get('/home', (req, res, next) =>
res.sendFile(__dirname + '/views/home-page.html'));

// route for an About page
app.get('/about', (req, res, next) =>
    res.sendFile(__dirname + '/views/about-page.html'));

// route for a Works page
app.get('/works', (req, res, next) =>
    res.sendFile(__dirname + '/views/works-page.html'));


// Server started
app.listen(3000, () => console.log('My first basic website!'));