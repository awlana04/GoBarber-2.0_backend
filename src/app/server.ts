import app from './app';

const host = process.env.HOST;
const port = process.env.PORT;

app.listen({ host, port }, () =>
  console.log(`🚀 Server running at port: ${port}`)
);
