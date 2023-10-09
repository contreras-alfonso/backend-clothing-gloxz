import renombrarImagen from "../helpers/renombrarImagen.js";

const nuevoProducto = async (req,res) => {


    const coloresProducto = ["Verde", "Marron", "Azul", "Beige", "Gris", "Blanco", "Rojo", "Amarillo"];

    coloresProducto.forEach(color=>{
        if(req.files[`images${color}`]){
            req.files[`images${color}`].map(renombrarImagen);
        }
    })

    const coloresActualesDelProducto = []

    coloresProducto.forEach(color=>{
        if(req.files[`images${color}`]){
            coloresActualesDelProducto.push(color);
        }
    })

    console.log(coloresActualesDelProducto);
    
    res.json({status:true})
}

export{
    nuevoProducto,
}