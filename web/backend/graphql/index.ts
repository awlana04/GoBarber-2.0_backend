import { makeSchema, asNexusMethod, connectionPlugin } from 'nexus';
import { nexusPrisma } from 'nexus-plugin-prisma';
import { applyMiddleware } from 'graphql-middleware';
import { DateTimeResolver } from 'graphql-scalars';
import path from 'path';

import { permissions } from '../config/permissions';

import { Appointment } from './schemas/Appointment';
import { Barber } from './schemas/Barber';
import { User } from './schemas/User';

import { Query } from './resolvers/Query';
import { Mutation } from './resolvers/Mutation';

export const DateTime = asNexusMethod(DateTimeResolver, 'date');

const schemaWithPermissions = makeSchema({
  types: [Appointment, Barber, User, Query, Mutation],
  outputs: {
    schema: path.join(__dirname, '..', '..', 'schema.graphql'),
    typegen: path.join(__dirname, '..', '..', 'generated', 'nexus.ts'),
  },
  plugins: [nexusPrisma({ experimentalCRUD: true }), connectionPlugin()],
  contextType: {
    module: require.resolve('../context'),
    export: 'Context',
  },
  sourceTypes: {
    modules: [
      {
        module: '@prisma/client',
        alias: 'prisma',
      },
    ],
  },
});

export const schema = applyMiddleware(schemaWithPermissions, permissions);
