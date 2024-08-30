"// Configuraci�n de la aplicaci�n" 
const express = require('express');
const contieneRoutes = require('./routes/contieneRoutes');

const app = express();

app.use(express.json());

app.use('/api/contiene', contieneRoutes);

module.exports = app;