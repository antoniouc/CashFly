const express = require('express');
const router = express.Router();
const movimientoController = require('../controllers/movimientoController');
const auth = require('../middleware/auth');
router.post('/',auth.authenticate, async (req, res) => {

    const { descripcion, total, fecha, categoria, metodo, nota, etiquetas, tipo  } = req.body;

    try {

        console.log(req.user.id)
        // Registrar el usuario en la base de datos
        await movimientoController.agregarMovimiento(req.user.id,descripcion, total, fecha, categoria, metodo, nota, etiquetas,tipo, req.cookies.token);
        // Usuario insertado correctamente
        res.redirect('/');
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error interno del servidor');
    }
});

module.exports = router;