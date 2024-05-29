const express = require('express');
const router = express.Router();

const index = require('./index');
const addgasto = require('./agregarTransaccion');

router.use('/', index);
router.use('/agregarTransaccion', addgasto);

module.exports = router;