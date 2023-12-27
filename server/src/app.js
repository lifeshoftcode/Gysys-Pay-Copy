import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import fs from 'fs';

import apiRouter from './api/v1/index.js';

// Configura dotenv para gestionar las variables de entorno
dotenv.config();

// Crea una nueva instancia de express
const app = express();

// Convierte __dirname a una variable compatible con ESModules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Decide qué archivo .env cargar basado en NODE_ENV
const envPath = process.env.NODE_ENV === 'production'
  ? path.join(__dirname, '../.env.production')
  : path.join(__dirname, '../.env');

// Asegúrate de que el archivo .env exista antes de intentar cargarlo
if (fs.existsSync(envPath)) {
  dotenv.config({ path: envPath });
} else {
  console.warn(`Archivo ${envPath} no encontrado, cargando variables de entorno por defecto.`);
}

// Habilita el middleware para parsear JSON
app.use(express.json());

// Habilita el middleware para parsear application/x-www-form-urlencoded
app.use(cors());

app.use('/api/v1', apiRouter);

export default app;
