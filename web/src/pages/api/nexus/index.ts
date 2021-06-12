import { makeSchema, asNexusMethod, connectionPlugin } from 'nexus';
import { nexusPrisma } from 'nexus-plugin-prisma';
import { applyMiddleware } from 'graphql-middleware';
import { DateTimeResolver } from 'graphql-scalars';
import path from 'path';

import { permissions } from '../config/permissions';

import { User } from './schemas/User';
import { Barber } from './schemas/Barber';
import { Profile } from './schemas/Profile';
import { Appointment } from './schemas/Appointment';

import { Query } from './resolvers/Query';
import { Mutation } from './resolvers/Mutation';
import { AuthPayload } from './resolvers/AuthPayload';

export const DateTime = asNexusMethod(DateTimeResolver, 'date');

const schemaWithPermissions = makeSchema({
  types: [User, Barber, Profile, Appointment, Query, Mutation, AuthPayload],
  outputs: {
    schema: path.join(__dirname, '..', '..', '..', '..', 'schema.graphql'),
    typegen: path.join(__dirname, '..', '..', '..', '..', 'generated', 'nexus.ts'),
  },
  plugins: [nexusPrisma({ experimentalCRUD: true }), connectionPlugin()],
  contextType: {
    module: path.join(__dirname, '..', 'context.ts'),
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
