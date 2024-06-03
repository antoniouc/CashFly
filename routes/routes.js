const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth'); // Middleware para proteger rutas


const index = require('./index');
const addgasto = require('./agregarTransaccion');
const login = require('./login');
const registro = require('./registro');
const registrar = require('./registrar-usuario')
const addmovimiento = require('./agregar-movimiento');
router.use('/', index);
router.use('/agregarTransaccion', addgasto);
router.use('/login', login);
router.use('/registro', registro);
router.use('/registrar-usuario', registrar);
router.use('/agregar-movimiento', addmovimiento);

module.exports = router;