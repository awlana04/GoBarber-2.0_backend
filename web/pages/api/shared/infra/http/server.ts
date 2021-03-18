import { ApolloServer } from 'apollo-server-micro';

import schema from '../graphql/index';
import { createContext } from './context';

const server = new ApolloServer({ schema, context: createContext });

const handler = server.createHandler({
  path: '/api/shared/infra/http/server'
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
