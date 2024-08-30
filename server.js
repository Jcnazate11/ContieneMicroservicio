"// Servidor de la aplicaci�n" 
const app = require('./src/app');
require('dotenv').config();

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});