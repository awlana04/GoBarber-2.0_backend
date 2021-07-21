import 'reflect-metadata';

import express from 'express';

import './database';
import uploadConfig from './config/upload';

import Routes from './routes';

const app = express();

app.use(express.json());
app.use(Routes);
app.use('/files', express.static(uploadConfig.directory))

app.listen(3333, () => console.log('🚀 Server started at port: 3333!'));
