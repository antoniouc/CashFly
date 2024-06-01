const opcionmodel = require('../models/opcionmodel');

async function obtenerCategorias() {
  return await opcionmodel.obtenerCategorias();
}

async function obtenerMetodosPagos() {
    return await opcionmodel.obtenerMetodosPagos();
  }

  module.exports={
    obtenerCategorias,
    obtenerMetodosPagos
  }
