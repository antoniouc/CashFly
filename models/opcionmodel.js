const axios = require('axios');

class Categoria{
    constructor(CategoriaID, Nombre){
        this.CategoriaID = CategoriaID;
        this.Nombre = Nombre;
    }
}

class Metodopago{
    constructor(MetodoPagoID, Nombre){
        this.MetodoPagoID = MetodoPagoID;
        this.Nombre = Nombre;
    }
}

async function obtenerCategorias() {
    try {
      const response = await axios.get(`${process.env.BASE_URL}/opcion/obtener-categoria`);
      const categorias = response.data;
      return categorias.map(categoria => new Categoria(categoria.CategoriaID,
        categoria.Nombre));
    } catch (error) {
      console.error('Error al obtener todos los productos:', error);
      throw error;
    }
  }

  async function obtenerMetodosPagos() {
    try {
      const response = await axios.get(`${process.env.BASE_URL}/opcion/obtener-metodopagos`);
      const pagos = response.data;
      return pagos.map(pago => new Metodopago(pago.MetodoPagoID,
        pago.Nombre));
    } catch (error) {
      console.error('Error al obtener todos los productos:', error);
      throw error;
    }
  }

  module.exports={
    obtenerCategorias,
    obtenerMetodosPagos
  }