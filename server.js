const express = require('express');
const hbs = require('hbs');
require("./hbs/helpers")
const app = express(),
    port = 3000;

app.use(express.static(__dirname + "/public"));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

//Rutas a la escucha
app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Daniel',
    });
});

app.get('/about', (req, res) => {

    res.render('about');
});
//

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto: ${port}`);
});