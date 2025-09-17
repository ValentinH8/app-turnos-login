import express from 'express';
import cors from 'cors';
import { AppDataSource } from './config/data-source';
import usersRouter from './routes/usersRouter';
import turnsRouter from './routes/turnsRouter';

const app = express();
const PORT = 3001;


app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use(express.json());


app.use('/users', usersRouter);
app.use('/turns', turnsRouter); 


app.get('/', (req, res) => {
    res.json({ 
        message: '¡API funcionando!',
        endpoints: {
            users: '/users',
            turns: '/turns'
        }
    });
});

AppDataSource.initialize()
    .then(() => {
        console.log('Conexión a la base inicializada');
        app.listen(PORT, () => {
            console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
        });
    })
    .catch(error => {
        console.error('Error al inicializar la conexión a la base de datos:', error);
    });