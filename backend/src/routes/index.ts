import { GraphQLServer } from 'graphql-yoga';

import AppointmentsRouter from './appointments.routes';

const routes = new GraphQLServer({});

routes.use('/appointments', AppointmentsRouter);

export default routes;
