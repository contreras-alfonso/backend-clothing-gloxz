import mongoose from "mongoose";

const productoSchema = mongoose.Schema({
    marca:{
        type:String,
        required:true,
    },
    nombre:{
        type:String,
        required:true,
    },
    descripcion:{
        type:String,
    },
    precio:{
        type:Number,
        required:true,
    },
    sku:{
        type:String,
        default:Math.random().toString(32).slice(2,13).toUpperCase(),
    },
    stock:{
        type:Number,
        required:true,
    },
    imagenesPorColor:{
        type: mongoose.Schema.Types.Mixed,
        required:true,
    },
    coloresProducto:{
        type: [String],
        required:true,
    },
    genero:{
        type:String,
        required:true,
    },
    tipo:{
        type:String,
        required:true,
    }

},{
    timestamps:true,
})

const Producto = mongoose.model('Producto',productoSchema);
export default Producto;