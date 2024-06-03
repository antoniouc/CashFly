const axios = require('axios')
class movimientos{
    constructor(UsuarioID,Total,Descripcion,Fecha,CategoriaID,MetodoPagoID,Nota,Etiquetas,Tipo){
        this.UsuarioID = UsuarioID;
        this.Descripcion = Descripcion;
        this.Total = Total;
        this.Fecha = Fecha;
        this.CategoriaID = CategoriaID;
        this.MetodoPagoID = MetodoPagoID;
        this.Nota = Nota;
        this.Etiquetas = Etiquetas;
        this.Tipo = Tipo;
    }
}

async function agregarMovimientos(UsuarioID,Descripcion,Total,Fecha,CategoriaID,MetodoPagoID,Nota,Etiquetas,Tipo, token) {
    const axiosConfig = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    };

    try {
        const response = await axios.post(`${process.env.BASE_URL}/movimiento/agregar`, {
            UsuarioID,Descripcion,Total,Fecha,CategoriaID,MetodoPagoID,Nota,Etiquetas,Tipo
        }, axiosConfig);
        return response.data;
    } catch (error) {
        console.error('Error al agregar el movimiento', error);
        throw error;
    }
}

module.exports={
    agregarMovimientos
}