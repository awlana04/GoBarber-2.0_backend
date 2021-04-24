import { makeSchema, connectionPlugin } from 'nexus';
import { nexusPrisma } from 'nexus-plugin-prisma';
import path from 'path';

import { User } from './schemas/User';

import { Query } from './schemas/Query';
import { Mutation } from './schemas/Mutation';

const schema = makeSchema({
  types: [User, Query, Mutation],
  outputs: {
    typegen: path.join(__dirname, '..', '..', 'generated', 'nexus-typegen.ts'),
    schema: path.join(__dirname, '..', '..', 'generated', 'schema.graphql'),
  },
  plugins: [nexusPrisma({ experimentalCRUD: true }), connectionPlugin()],
  contextType: {
    module: path.join(__dirname, '..', 'context.ts'),
    export: 'Context',
  },
  sourceTypes: {
    modules: [
      {
        module: path.join(
          __dirname,
          '..',
          '..',
          'node_modules',
          '.prisma',
          'client',
          'index.d.ts',
        ),
        alias: 'prisma',
      },
    ],
  },
});

export default schema;