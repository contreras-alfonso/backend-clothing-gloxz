import mongoose, { mongo } from "mongoose";

const conectarDB = async () => {
    try {
        await mongoose.connect(`${process.env.RUTA_MONGO}`)
        console.log('CONECTADO A MONGODB :)')
    } catch (error) {
        console.log(`Ocurrio un error al conectar la DB ---------- ${error}`)
    }
}

export default conectarDB;
