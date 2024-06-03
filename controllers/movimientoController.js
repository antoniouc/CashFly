const movimiendoModel = require('../models/movimientomodel');

async function agregarMovimiento(UsuarioID,Descripcion,Total,Fecha,CategoriaID,MetodoPagoID,Nota,Etiquetas,Tipo, token) {
    return await movimiendoModel.agregarMovimientos(UsuarioID,Descripcion,Total,Fecha,CategoriaID,MetodoPagoID,Nota,Etiquetas,Tipo, token);
}

module.exports={
    agregarMovimiento
}