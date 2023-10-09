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
        required:true,
    },
    precio:{
        type:Number,
        required:true,
    },
    sku:{
        type:String,
        required:true,
    },
    stock:{
        type:Number,
        required:true,
    },
    imagenesSoloProducto:{
        type: [String],
        required:true,
    },
    imagenesSoloModelo:{
        type: [String],
        required:true,
    }

},{
    timestamps:true,
})

const Producto = mongoose.model('Prodcuto',productoSchema);
export default Producto;