"// Controlador para contiene" 
const Contiene = require('../models/contieneModel');
const axios = require('axios');

exports.getAllContiene = async (req, res) => {
  try {
    const contiene = await Contiene.getAll();
    res.json(contiene);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createContiene = async (req, res) => {
  try {
    const id = await Contiene.create(req.body);
    res.status(201).json({ id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const obtenerDatosSQLServer = async (req, res) => {
  try {
      const respuesta = await axios.get(process.env.MICROSERVICIO_URL_SQLSERVER);
      res.json(respuesta.data);
  } catch (error) {
      console.error('Error al llamar al microservicio SQL Server:', error);
      res.status(500).send('Error al comunicarse con el microservicio SQL Server');
  }
};

const obtenerDatosOracle = async (req, res) => {
  try {
      const respuesta = await axios.get(process.env.MICROSERVICIO_URL_ORACLE);
      res.json(respuesta.data);
  } catch (error) {
      console.error('Error al llamar al microservicio Oracle:', error);
      res.status(500).send('Error al comunicarse con el microservicio Oracle');
  }
};

module.exports = { obtenerDatosSQLServer, obtenerDatosOracle };