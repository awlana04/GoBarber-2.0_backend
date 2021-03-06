import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';

import routes from './routes';
import './database';

import AppointmentResolver from './schemas/resolver';

async function main() {
  const schema = await buildSchema({
    resolvers: [AppointmentResolver]
  });

  const app = new ApolloServer({ schema });

  app.listen().then(() => console.log('🚀 Server started on port 3333!'));
}

// app.use(routes);
