
const express = require('express');  
const exphbs = require('express-handlebars');
const path = require('path');

// Inicializaciones
const app = express();

module.exports = app;

// Configuraciones
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

// Middlewares
app.use(express.urlencoded({ extended: false }));

// Global variables 


// Rutas
app.use(require('./routes/index.routes'));


// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
