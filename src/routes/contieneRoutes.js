"// Rutas para contiene" 
const express = require('express');
const router = express.Router();
const contieneController = require('../controllers/contieneController');

router.get('/', contieneController.getAllContiene);
router.post('/', contieneController.createContiene);

// Añade más rutas según sea necesario
router.get('/sqlserver', obtenerDatosSQLServer);
router.get('/oracle', obtenerDatosOracle);

module.exports = router;