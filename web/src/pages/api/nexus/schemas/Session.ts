import { objectType } from 'nexus';

export const Sessions = objectType({
  name: "Sessions",
  definition(t) {
    t.model.id(),
      t.model.userId(),
      t.model.expires(),
      t.model.sessionToken(),
      t.model.accessToken(),

      t.int('createdAt'),
      t.int('updatedAt')
  }
})
