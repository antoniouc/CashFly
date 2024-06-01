// routes/index.js
const express = require('express');
const router = express.Router();
const opcioncontroller = require('../controllers/opcioncontroller');


// Rutas públicas
router.get('/', async (req, res) => {
  const categoria = await opcioncontroller.obtenerCategorias();
  const metodo = await opcioncontroller.obtenerMetodosPagos();
  res.render('agregargasto', { categoria, metodo });
});

module.exports = router;