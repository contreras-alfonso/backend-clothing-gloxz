import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import conectarDB from './config/db.js';
import productoRouter from './routes/productoRoutes.js';


const app = express();

app.use(express.json());

dotenv.config();

conectarDB();


const corsOptions = {
    origin: "*"
} 

app.use(cors(corsOptions))

app.use('/api/productos',productoRouter);


app.listen(process.env.PORT,()=>{
    console.log(`Corriendo en el puerto: ${process.env.PORT}`)
})