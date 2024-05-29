const express = require('express');
const app = express();
const router = require('./routes/routes');
const path = require('path');
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Middleware para procesar archivos estáticos en la carpeta 'public'
app.use(express.static('public'));
app.use(express.json());

app.use('/', router);
// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});