const db = require('../config/database');

const Contiene = {
  getAll: async () => {
    const [rows] = await db.query('SELECT * FROM contiene');
    return rows;
  },
  create: async (contiene) => {
    const [result] = await db.query(
      'INSERT INTO contiene (idProducto, idPedido, cantidad) VALUES (?, ?, ?)',
      [contiene.idProducto, contiene.idPedido, contiene.cantidad]
    );
    return result.insertId;
  },
  // Añade más métodos según sea necesario
};

module.exports = Contiene;