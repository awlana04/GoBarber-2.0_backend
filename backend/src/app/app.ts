import 'dotenv/config';
import cors from 'cors';

import express from 'express';

import routes from './infra/http/routes';
import uploadConfig from '@core/config/upload';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use('/files', express.static(uploadConfig.uploadsFolder));

export default app;
