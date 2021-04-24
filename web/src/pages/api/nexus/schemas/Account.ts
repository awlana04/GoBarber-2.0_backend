import { objectType } from 'nexus';

export const Account = objectType({
  name: 'Account',
  definition(t) {
    t.model.id(),
      t.model.compoundId(),

      t.model.userId(),
      t.model.providerType(),
      t.model.providerId(),
      t.model.providerAccountId(),
      t.model.refreshToken(),
      t.model.accessToken(),
      t.model.accessTokenExpires(),

      t.int('createdAt'),
      t.int('updatedAt')
  }
})
