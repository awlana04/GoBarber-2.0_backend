import 'reflect-metadata';
import 'dotenv/config';

import express from 'express';

import { router } from './routes';

const app = express();

app.use(express.json());
app.use(router);

const port = process.env.PORT;
const host = process.env.HOST;

app.listen({ port, host }, () =>
  console.log(`🚀 Server running at port: ${port}!`)
);
