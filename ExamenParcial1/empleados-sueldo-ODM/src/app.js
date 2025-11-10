import express from 'express';
import cors from 'cors';
import { connectDB } from './config/mongo.js';
import empleadoRoutes from './routes/empleadoRoutes.js';

import 'dotenv/config';

const app = express();

// Middlewares
app.use(cors()); 
app.use(express.json()); 

// Rutas
app.use("/api/empleados", empleadoRoutes);

// conexion local de mongodb
await connectDB();

// Iniciar el servidor 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));