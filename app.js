const express = require('express');
const res = require('express/lib/response');

const hbs = require('hbs');
const path = require('path');
const { resourceUsage } = require('process');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');
const { getEnabledCategories } = require('trace_events');

const app = express();
const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// Register the location for handlebars partials here:

// ...

// Add the route handlers here:

app.get('/', (req, res) => {
  res.render('index');
});

//Beers

app.get('/beers', (req, res) => {
  punkAPI.getBeers().then(value => {
    res.render('beers', { beers: value });
  });
});

//Random beer
app.get('/randombeer', (req, res) => {
  punkAPI.getRandom().then(responseFromAPI => {
    res.render('randombeer', { randombeer: responseFromAPI });
  });
});

app.listen(3000, () => console.log('🏃‍ on port 3000'));
