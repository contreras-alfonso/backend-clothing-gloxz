import mongoose from "mongoose";

const usuarioSchema = mongoose.Schema({

    nombre:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    token:{
        type:String,
        default: Math.random().toString(32).slice(2,8)+"-"+Math.random().toString(32).slice(2,8)+"-"+Math.random().toString(32).slice(2,8)
    },
    status:{
        type:Boolean,
        default:true,
    },
},{
    timestamps:true,
})

const Usuario = mongoose.model('Usuario',usuarioSchema);
export default Usuario;

