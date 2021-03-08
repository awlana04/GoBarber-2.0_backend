import { ApolloServer } from 'apollo-server';

import schema from '../graphql/index';
import { createContext } from './context';

const app = new ApolloServer({ schema, context: createContext })

app.listen().then(() => console.log('🚀 Server started on port 4000'));
