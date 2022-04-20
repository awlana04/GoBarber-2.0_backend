import 'dotenv/config';
import cors from 'cors';
import path from 'path';

import express, { NextFunction, Request, Response } from 'express';
import { errors } from 'celebrate';

import { router } from './routes';

import AppError from './utils/AppError';

const app = express();

app.use(express.json());
app.use(router);
app.use(errors());
app.use(cors());
app.use('/upload', express.static(path.join(__dirname, '..', 'tmp')));

const port = process.env.PORT;
const host = process.env.HOST;

app.use(
  (err: Error, _request: Request, response: Response, _: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: 'error',
        message: err.message,
      });
    }

    console.error(err);

    return response.status(500).json({
      status: 'error',
      message: err.message,
    });
  }
);

app.listen({ port, host }, () =>
  console.log(`🚀 Server running at port: ${port}!`)
);
