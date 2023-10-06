import express from 'express';
import dotenv from 'dotenv';
import conectarDB from './config/db.js';

const app = express();

app.use(express.json());

dotenv.config();

conectarDB();


app.listen(process.env.PORT,()=>{
    console.log(`Corriendo en el puerto: ${process.env.PORT}`);
})