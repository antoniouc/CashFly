const axios = require('axios')
class movimientos{
    constructor(UsuarioID,Descripcion,Total,Fecha,CategoriaID,MetodoPagoID,Nota,Etiquetas,Tipo){
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

async function obtenerMovimientos(usuarioID, token) {
    const axiosConfig = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    };
    try {
        const response = await axios.post(`${process.env.BASE_URL}/movimiento/historial`,{usuarioID}, axiosConfig);
        // return response.data.map(movimiento => new movimientos(
        //     movimiento.UsuarioID,
        //     movimiento.Descripcion,
        //     movimiento.Total,
        //     movimiento.Fecha,
        //     movimiento.CategoriaID,
        //     movimiento.MetodoPagoID,
        //     movimiento.Nota,
        //     movimiento.Etiquetas,
        //     movimiento.Tipo
        // ));
        return response.data.map(movimiento => {
            // Convertir la fecha al formato "YYYY-MM-DD"
            const fecha = new Date(movimiento.Fecha);
            const fechaFormateada = fecha.toISOString().split('T')[0];
            
            return new movimientos(
                movimiento.UsuarioID,
                movimiento.Descripcion,
                movimiento.Total,
                fechaFormateada, // Usar la fecha formateada
                movimiento.CategoriaID,
                movimiento.MetodoPagoID,
                movimiento.Nota,
                movimiento.Etiquetas,
                movimiento.Tipo
            );
        });
    } catch (error) {
        console.error('Error al obtener los movimientos:', error);
        throw error;
    }
}

module.exports={
    agregarMovimientos,
    obtenerMovimientos
}