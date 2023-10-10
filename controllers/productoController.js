import renombrarImagen from "../helpers/renombrarImagen.js";
import Producto from "../models/productoModel.js";

const nuevoProducto = async (req,res) => {

    const { marca,nombre,descripcion,precio,sku,stock,genero,tipo } = req.body;

    const coloresProducto = ["Verde", "Marron", "Azul", "Beige", "Gris", "Blanco", "Rojo", "Amarillo"];

    const arregloColorsProducto = [];

    coloresProducto.forEach(color=>{
        if(req.files[`images${color}`]){
            const rutasImages = req.files[`images${color}`].map(renombrarImagen);
            arregloColorsProducto.push({[`${color}`]:rutasImages});
        }
    })

    const coloresActualesDelProducto = []

    coloresProducto.forEach(color=>{
        if(req.files[`images${color}`]){
            coloresActualesDelProducto.push(color);
        }
    })

    const producto = new Producto({marca,nombre,descripcion,precio,sku,stock,imagenesPorColor:arregloColorsProducto,coloresProducto:coloresActualesDelProducto,genero,tipo});

    await producto.save();
    
    res.json({status:true})
}

export{
    nuevoProducto,
}