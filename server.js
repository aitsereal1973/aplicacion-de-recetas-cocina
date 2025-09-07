const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Conexión a la base de datos
mongoose.connect(`mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST || 'localhost'}:${process.env.DB_PORT || '27017'}/${process.env.DB_NAME || 'aplicacion-de-recetas'}?retryWrites=true&ssl=true`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Base de datos conectada!');
}).catch(err => {
    console.error('Error al conectar a la base de datos:', err.message);
});

// Rutas simples
app.get('/', (req, res) => {
    res.send('API de Aplicación de Recetas de Cocina');
});

// Inicio del servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});