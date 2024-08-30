"// Controlador para contiene" 
const Contiene = require('../models/contieneModel');

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

// Añade más controladores según sea necesario