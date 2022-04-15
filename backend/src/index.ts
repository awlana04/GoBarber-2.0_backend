import 'reflect-metadata';
import 'dotenv/config';

import express from 'express';

const app = express();

const port = process.env.PORT;
const host = process.env.HOST;

app.listen({ port, host }, () =>
  console.log(`🚀 Server running at port: ${port}!`)
);
