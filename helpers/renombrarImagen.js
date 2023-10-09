import fs from 'fs'

const renombrarImagen = (imagen) => {
    const nuevoNombre = Math.random().toString(32).slice(2,8)+Math.random().toString(32).slice(2,8)+imagen.originalname;
    const newPath = "./public/images/"+nuevoNombre
    fs.renameSync(imagen.path,newPath)
    return nuevoNombre
}

export default renombrarImagen