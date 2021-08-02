import 'reflect-metadata';
import 'express-async-errors';

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';

import './database';

import uploadConfig from './config/upload';
import AppError from './errors/AppError';

import Routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(Routes);
app.use('/files', express.static(uploadConfig.directory));

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    })
  }

  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  })
})

app.listen(3333, () => console.log('🚀 Server started at port: 3333!'));
