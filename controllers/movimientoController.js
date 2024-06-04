const movimiendoModel = require('../models/movimientomodel');

async function agregarMovimiento(UsuarioID,Descripcion,Total,Fecha,CategoriaID,MetodoPagoID,Nota,Etiquetas,Tipo, token) {
    return await movimiendoModel.agregarMovimientos(UsuarioID,Descripcion,Total,Fecha,CategoriaID,MetodoPagoID,Nota,Etiquetas,Tipo, token);
}
async function obtenerMovimientos(usuarioID, token) {
    return await movimiendoModel.obtenerMovimientos(usuarioID, token);
}
module.exports={
    agregarMovimiento,
    obtenerMovimientos
}