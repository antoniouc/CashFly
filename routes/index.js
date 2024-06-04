// routes/index.js
const express = require('express');
const router = express.Router();
const movimientoscontroller = require('../controllers/movimientoController');
const auth = require('../middleware/auth');


// Rutas públicas
router.get('/', auth.authenticate,async (req, res) => {
 const data = await  movimientoscontroller.obtenerMovimientos(req.user.id, req.cookies.token);
  res.render('index',{data});
});

module.exports = router;