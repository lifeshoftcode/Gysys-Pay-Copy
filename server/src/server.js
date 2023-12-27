import app from './app.js';
import path from 'path';
import { fileURLToPath } from 'url';
import { connectToDatabase } from './database.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectToDatabase();

    // Configuración para servir la aplicación de React en producción
    if (process.env.NODE_ENV === 'production') {
      const clientDistPath = path.join(__dirname, '../../client/dist');
      app.use(express.static(clientDistPath));
      app.get('*', (req, res) => {
        res.sendFile(path.resolve(clientDistPath, 'index.html'));
      });
    } else {
      // En desarrollo, la ruta raíz envía "Hello World"
      app.get('/', (req, res) => {
        res.send('Hello World!');
      });
    }

    // El servidor comienza a escuchar después de configurar todo
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error('Error al conectar con la base de datos:', error);
    process.exit(1); // Termina el proceso si no puede conectar a la base de datos
  }
};

startServer();



