import { ApolloServer } from 'apollo-server-micro';

import schema from './graphql/index';
import { createContext } from './context';

const server = new ApolloServer({ schema, context: createContext });
