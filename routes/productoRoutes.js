import express from 'express';
import upload from '../middlewares/subidaImagen.js';
import { nuevoProducto } from '../controllers/productoController.js';

const router = express.Router();

router.post('/nuevo-producto',upload.fields([{name:'imagesVerde'},{name:'imagesMarron'},,{name:'imagesAzul'},{name:'imagesBeige'},{name:'imagesGris'},{name:'imagesBlanco'},{name:'imagesRojo'},{name:'imagesAmarillo'},{name:'imagesNegro'}]),nuevoProducto);

export default router