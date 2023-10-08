import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';

import connet from './database/database';
import productRouter from './routers/user.router';
import userRouter from './routers/user.router';

const app = express();

app.use(morgan('start'));
app.use(express.json());
app.use(cors());
dotenv.config();

connet();

app.listen(parseInt(process.env.PORT), () => {
  console.log('"Servidor escuchando en el puerto: " + process.env.PORT')
});

app.use('/api', productRouter);
app.use('/api', userRouter);