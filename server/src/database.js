import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

// Configuración de la conexión utilizando Sequelize
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mysql', // Especificando que el dialecto es MySQL
  logging: false, // Opcional: Desactivar el logging de SQL
  retry: {
    max: 3 // Número máximo de intentos para reconectar
  }
});

// Función para probar la conexión
const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync(false);
    console.log('Conexión establecida con la base de datos.');
  } catch (error) {
    console.error('Error al conectar a la base de datos con Sequelize:', error);
  }
};

export { connectToDatabase, sequelize };
