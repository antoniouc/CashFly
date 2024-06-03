// routes/index.js
const express = require('express');
const router = express.Router();
const opcioncontroller = require('../controllers/opcioncontroller');


// Rutas públicas
router.get('/:Tipo', async (req, res) => {
  const categoria = await opcioncontroller.obtenerCategorias();
  const metodo = await opcioncontroller.obtenerMetodosPagos();
  const Tipo = req.params.Tipo;
  res.render('agregargasto', { categoria, metodo ,Tipo});
});

module.exports = router;