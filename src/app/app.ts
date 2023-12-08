import 'dotenv/config';
import cors from 'cors';

import express, { Request, Response, NextFunction } from 'express';

import routes from './infra/http/routes';
import uploadConfig from '@core/config/upload';
import AppError from '@shared/app-error';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use('/files', express.static(uploadConfig.uploadsFolder));

app.use(
  (err: Error, _request: Request, response: Response, _: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.status).json({
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

export default app;
