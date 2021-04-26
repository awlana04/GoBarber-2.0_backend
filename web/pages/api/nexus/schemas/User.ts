import { objectType } from 'nexus';

export const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id(),

      t.model.name(),

      t.model.email(),
      t.model.password(),
      t.model.avatar(),

      t.int('createdAt'),
      t.int('updatedAt')
  }
});