import { objectType } from 'nexus';

export const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id(),

    t.model.type({
      description: "User's about"
    })
    t.model.name(),

    t.model.email({
      description: "User's credentials"
    }),
    t.model.password(),
    t.model.avatar(),

    t.int('createdAt'),
    t.int('updatedAt')
  }
});
