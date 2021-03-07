import { ApolloServer } from 'apollo-server';

// import routes from './routes';

import schema from './schemas/index';
import { createContext } from './context';

const app = new ApolloServer({ schema, context: createContext })

app.listen().then(({ port }) => console.log(`🚀 Server started on port ${port}`));

// app.use(routes);
