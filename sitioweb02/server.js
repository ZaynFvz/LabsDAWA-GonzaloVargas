const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

// Rutas
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/services', (req, res) => {
    res.render('services');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.post('/contact', (req, res) => {
    // Aquí puedes procesar el formulario de contacto
    res.redirect('/confirmation');
});

app.get('/confirmation', (req, res) => {
    res.render('confirmation');
});

app.listen(port, () => {
    console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});
